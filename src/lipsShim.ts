import { bootstrap, specials, Parser, LSymbol, env } from "@jcubic/lips";
import { Color, Point } from "./common/otherTypes";
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

const setRepr = env.get<<T>(klass: { new(...x: any[]): T }, repr: (x: T, q: boolean) => string) => void>("set-repr!");
setRepr(Point, (point: Point) => {
    return `Point(${point.x}, ${point.y})`;
});
const bla = (x: number) => x.toString(16).padStart(2, "0");
setRepr(Color, (color: Color) => {
    return `#${bla(color.r)}${bla(color.g)}${bla(color.b)}`;
});
