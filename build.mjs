import * as esbuild from "esbuild";
import * as fs from "node:fs";
import packageJSON from "./package.json" with { type: "json" };

/** @type {esbuild.BuildOptions} */
const config = {
    bundle: true,
    sourcemap: true,
    minify: true,
    metafile: true,
    platform: "browser",
    charset: "utf8",
    entryPoints: Object.values(packageJSON.exports),
    format: "esm",
    target: "esnext",
    treeShaking: true,
    outfile: "build/consedit.js",
    plugins: [
        {
            name: "ignore_unresolvable",
            setup(build) {
                build.onResolve({ filter: /^(module|fs|path)$/ }, async args => ({ external: true }));
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
    if (result.metafile) fs.writeFileSync("build/meta.json", JSON.stringify(result.metafile))
}
