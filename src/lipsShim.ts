import { bootstrap, specials, Parser } from "@jcubic/lips";
export * from "@jcubic/lips";


await bootstrap("https://cdn.jsdelivr.net/npm/@jcubic/lips/dist/std.xcb");
/* disable parser specials */
specials.__list__ = {};

export class FixedParser extends Parser {
    /* disable datum references */
    match_datum_label(token: string) {
        return null;
    }
    match_datum_ref(token: string) {
        return null;
    }
}
