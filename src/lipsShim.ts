import { bootstrap, specials, Parser, LSymbol } from "@jcubic/lips";
export * from "@jcubic/lips";


await bootstrap("https://cdn.jsdelivr.net/npm/@jcubic/lips/dist/std.xcb");
/* disable parser specials */
specials.__list__ = {};

/* disable symbol interning */
LSymbol.list = new Proxy(LSymbol.list, {
    get: () => undefined,
});

export class FixedParser extends Parser {
    /* disable datum references */
    match_datum_label(token: string) {
        return null;
    }
    match_datum_ref(token: string) {
        return null;
    }
}
