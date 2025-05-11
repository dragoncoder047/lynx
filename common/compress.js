// stolen from https://evanhahn.com/javascript-compression-streams-api-with-strings/
// swapped gzip for deflate
// reworked async iterator -> reader.read() cause async iterator don't work in Safari

/**
 * Convert a string to its UTF-8 bytes and compress it.
 *
 * @param {string} str
 * @returns {Promise<Uint8Array>}
 */
export async function compress(str) {
    // Convert the string to a byte stream.
    const stream = new Blob([str]).stream();

    // Create a compressed stream.
    const compressedStream = stream.pipeThrough(
        new CompressionStream("deflate")
    );

    const reader = compressedStream.getReader();

    // Read all the bytes from this stream.
    const chunks = [];
    for (;;) {
        const result = await reader.read();
        if (result.done) break;
        chunks.push(result.value);
    }
    return await concatUint8Arrays(chunks);
}

/**
 * Decompress bytes into a UTF-8 string.
 *
 * @param {Uint8Array} compressedBytes
 * @returns {Promise<string>}
 */
export async function decompress(compressedBytes) {
    // Convert the bytes to a stream.
    const stream = new Blob([compressedBytes]).stream();

    // Create a decompressed stream.
    const decompressedStream = stream.pipeThrough(
        new DecompressionStream("deflate")
    );

    const reader = decompressedStream.getReader();

    // Read all the bytes from this stream.
    const chunks = [];
    for (;;) {
        const result = await reader.read();
        if (result.done) break;
        chunks.push(result.value);
    }
    const stringBytes = await concatUint8Arrays(chunks);

    // Convert the bytes to a string.
    return new TextDecoder().decode(stringBytes);
}

/**
 * Combine multiple Uint8Arrays into one.
 *
 * @param {ReadonlyArray<Uint8Array>} uint8arrays
 * @returns {Promise<Uint8Array>}
 */
async function concatUint8Arrays(uint8arrays) {
    const blob = new Blob(uint8arrays);
    const buffer = await blob.arrayBuffer();
    return new Uint8Array(buffer);
}
