// stolen from https://evanhahn.com/javascript-compression-streams-api-with-strings/
// swapped gzip for deflate
// reworked async iterator -> reader.read() cause async iterator don't work in Safari

/**
 * Convert a string to its UTF-8 bytes and compress it.
 */
export async function compress(str: string): Promise<Uint8Array> {
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
 */
export async function decompress(compressedBytes: Uint8Array): Promise<string> {
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
 */
async function concatUint8Arrays(uint8arrays: ReadonlyArray<Uint8Array>): Promise<Uint8Array> {
    const blob = new Blob(uint8arrays as any);
    const buffer = await blob.arrayBuffer();
    return new Uint8Array(buffer);
}
