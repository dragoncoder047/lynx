import * as esbuild from "esbuild";
import * as fs from "node:fs";

const getFlag = (flag) => {
    const index = process.argv.indexOf(flag);
    if (index === -1) throw new Error(`Missing required flag: ${flag}`);
    const value = process.argv[index + 1];
    if (!value) throw new Error(`Missing value for flag: ${flag}`);
    return value;
};

const outfile = getFlag("-o");
const mapfile = outfile + ".map";
const metafile = outfile.replace(/\.js/, ".meta.json");
fs.rmSync(outfile, { force: true });
fs.rmSync(mapfile, { force: true });
fs.rmSync(metafile, { force: true });

/** @type {esbuild.BuildOptions} */
const config = {
    bundle: true,
    sourcemap: true,
    minify: true,
    metafile: true,
    platform: "browser",
    charset: "utf8",
    entryPoints: [getFlag("-i")],
    format: "esm",
    target: "esnext",
    treeShaking: true,
    outfile,
    plugins: [
        {
            name: "ignore_unresolvable",
            setup(build) {
                build.onResolve({ filter: /^(module|fs|path)$/ }, async _ => ({ external: true }));
            },
        }
    ]
};

if (process.argv.includes("-w")) {
    config.plugins.push({
        name: "logger",
        setup(build) {
            build.onEnd(result => {
                if (result.errors.length == 0)
                    console.error(`rebuilt ${config.outfile} OK`);
                else
                    console.error(`failed to build ${config.outfile}`);
            });
        },
    });
    await esbuild.context(config).then(ctx => ctx.watch());
}
else {
    const result = await esbuild.build(config);
    if (result.metafile)
        fs.writeFileSync(metafile,
            JSON.stringify(result.metafile))
}
