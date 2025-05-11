declare module "@jcubic/lips" {
    const version: string;
    const banner: string;
    const date: string;
    const env: Environment;
    function exec(src: string | Pair): Promise<any>;
    function parse(parser: Parser): Promise<Pair[]>;
    function parse(what: StringLike, env?: Environment): Promise<Pair[]>;
    function tokenize(what: StringLike): Promise<any>;
    function evaluate(what: unknown): Promise<any>;
    function compile(what: unknown): Promise<any>;

    function serialize(what: any): string;
    function unserialize(what: string): any;
    function serialize_bin(what: any): Uint8Array;
    function unserialize_bin(what: Uint8Array): any;

    function bootstrap(url?: string): Promise<void>;
    abstract class WithMetadata {
        __doc__: string | undefined;
        __line__: number | undefined;
        __col__: number | undefined;
        __offset__: number | undefined;
    }
    class LString extends WithMetadata {
        __string__: string;
        constructor(wrapped: string | string[]);
        valueOf(): string;
    }
    class LSymbol extends WithMetadata {
        __name__: string;
        constructor(name: StringLike);
        static list: Record<string, LSymbol>;
        static is(sym1: LSymbol, test: string | LSymbol | RegExp): boolean;
        valueOf(): string;
    }
    class Pair extends WithMetadata {
        car: any;
        cdr: any;
        constructor(car: any, cdr: any);
        flatten(): Pair;
        length(): number;
        static match(obj: any, item: any): boolean;
        find(item: any): boolean;
        clone(): Pair;
        last_pair(): Pair;
        to_array(): Pair;
        fromArray(arr: any[]): Pair;
        to_object(literal?: boolean): Record<string, any>;
    }
    class LNumber extends WithMetadata {
        __value__: BigInt;
        valueOf(): number;
    }
    class LBigInteger extends LNumber {
    }
    class LFloat extends LNumber {
    }

    class LNil extends WithMetadata { private constructor(); }
    const nil: LNil;

    type StringLike = LString | string;
    class Parser {
        readonly _formatter: Formatter;
        readonly __env__: Environment;
        readonly __lexer__: Lexer;
        readonly _meta: boolean;
        readonly _refs: unknown[];
        readonly _state: {
            parentheses: number;
            fold_case: boolean;
        };
        constructor(opts: {
            env?: Environment;
            meta?: boolean;
            formatter?: Formatter
        });
        prepare(source: string): void;
        parse(src: StringLike): void;
        _peek(): Promise<ReturnType<Lexer["token"]>>;
        _is_comment(token: unknown): boolean;
        _read_value(): Promise<any>;
    }
    class Lexer {
        constructor(code: string, opt?: { whitespace?: boolean });
        token(metadata: false): string;
        token(metadata: true): {
            token: string | undefined,
            col: number,
            offset: number,
            line: number
        }
    }
    type DeepPartial<T> = T extends object ? {
        [P in keyof T]?: DeepPartial<T[P]>;
    } : T;
    class Formatter {
        __code__: string;
        static defaults: {
            offset: number,
            indent: number;
            exceptions: {
                specials: RegExp[];
                shift: Record<number, string[]>;
            }
        };
        constructor(code: string);
        break(): this;
        format(options?: DeepPartial<typeof Formatter["defaults"]>): string;
    }

    class Environment {
        __env__: Record<string, any>;
        __docs__: Map<string, string>;
        __parent__: Environment | undefined;
        __name__: string;
        constructor(env: Record<string, any>, parent?: Environment, name?: string);
        unset(name: string): void;
        inherit(name: string, env: Record<string, any>): Environment;
        doc(name: string): string;
        doc(name: string, value: string, dump?: boolean): this;
        get<T>(name: StringLike | LSymbol, opts?: { throwError?: boolean }): T;
        set(name: StringLike | LSymbol, value: any, doc?: string): this;
        constant(name: string, value: any): this;
        has(name: string): boolean;
    }
    type SpecialsEntry = {
        seq: string,
        symbol: LSymbol,
        type: symbol,
    };
    const specials: {
        names(): string[];
        readonly LITERAL: symbol;
        readonly SPLICE: symbol;
        __list__: Record<string, SpecialsEntry>;
        get(name: string): SpecialsEntry | undefined;
    }
}
