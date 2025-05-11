export class Color {
    r
    g
    b
    constructor(r, g, b) {
        this.r = r;
        this.g = g;
        this.b = b;
    }
    toString() {
        return `Color(${this.r}, ${this.g}, ${this.b})`;
    }
}

export class Point {
    x
    y
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    toString() {
        return `Point(${this.x}, ${this.y})`;
    }
}
