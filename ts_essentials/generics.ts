
type Role = 'admin' | 'user' | 'editor' | 'super' | -1;

// let roles: Role[];
// or
let roles: Array<Role>;

roles = ['admin', "super", -1, /* Err: -2 */ ];

type DataStorage<T> = {
    storage: T[],
    add: (data: T) => void;
}

const st: DataStorage<number> = {
    storage: [1, 2, 3],
    add(data){
        this.storage.push(data);
    }
};

const ust: DataStorage<Role> = {
    storage: ['admin', "super"],
    add(data){
        this.storage.push(data);
    }
};

ust.add("user");

function merge<T, U>(a: T, b: U): T & U {
    return {
        ...a,
        ...b
    };
}

const user = merge<{name: string}, {age: number}>({name: 'Ka'}, {age: 17});

console.log(user.name, user.age);

// TS can still infer
const user2 = merge({a: 'b'}, {b: 'a'});

console.log(user2.a, user2.b);