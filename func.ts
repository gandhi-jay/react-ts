

function add (a: number, b: number): number {
    return a + b;
}

add(3, 4);

function mult(obj: {a: number, b: number}): number {
    return obj.a * obj.b;
}

mult({a: 1, b: 32});

// void funct.
function voidFunc(obj: {ff: Function}): void {
    console.log(obj.ff(2, 3));
}

voidFunc({ff: mult});

function voidFunc2(obj: {ff: (a:number, b:number) => number}): void {
    console.log(obj.ff(2, 3));
}

// voidFunc2({ff: voidFunc}); // TS: Err
voidFunc2({ff:add});

// Type def are getting longerr...
// create type aliases

type AddFn = (a: number, b: number) => number;

function voidFunc3(obj: {ff: AddFn}): void {
    console.log(obj.ff(432, 1));
}

// Storing union type with type aliases.
type StringOrNum = string | number;
let userId: StringOrNum;
userid = '1';


