export class Color {
    r: number;
    g: number;
    b: number;
    constructor(r: number, g: number, b: number) {
        this.r = r;
        this.g = g;
        this.b = b;
    }
    toString() {
        return `Color(${this.r}, ${this.g}, ${this.b})`;
    }
}

export class Point {
    x: number;
    y: number;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
    toString() {
        return `Point(${this.x}, ${this.y})`;
    }
    static NOWHERE = new Point(NaN, NaN);
}
