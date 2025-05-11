import { bootstrap, specials } from "@jcubic/lips";


await bootstrap("https://cdn.jsdelivr.net/npm/@jcubic/lips/dist/std.xcb");
specials.__list__ = {};

export * from "@jcubic/lips";
