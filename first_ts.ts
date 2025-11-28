let userName = "Max";

// TS is infering type from string literal.
// If not initialized, TS won't infer. it will fallback to normal JS.
// userName = 32; // TS: ERR


// type: any, it will work as normal JS.
let userName2;

userName2 = "Jamma";
userName2 = 34;

let userName3: string; // Explicit type assignment

// For const, type is not required.
const API_KEY = 'ASD';

// Basic Primitives type. string, number, boolean
let userId: number;
let isUserLoggedIn: boolean;

// run compiler `npx tsc first_ts.ts` to get first_ts.js


// union type, both string and number is valid
let usId: string | number = 'abc1';
usId = 79;
// usId = true; //  TS:ERR

// Object

// type: any. never a great type to have.
// let user;
//
// user = {
//     id: '',
//     name: 'Max',
//     isAdmin: true
// }

// tell ts user is a object.

let user: object;

// user = 'Max'; // TS: ERR but doesn't give out structure.

user = {};
user = {'id': 'di'};
// but it can be anything
user = {'age': 23};

let usser : {
    name: string;
    age: number;
    isAdmin: boolean,
    id: number | string;
}

// usser = {id: 1}; TS: Err

usser = {age: 0, id: 12, isAdmin: false, 'name': 'max'};
console.log(usser);

// Array

let hobbies: Array<string>;
// hobbies = [12, 'Sports', 'Cooking']; TS: errr

hobbies = ['Sports', 'Cooking', 'Reading'];

let hobs: string[]; // number[], boolean[]

