
// Defining object with interfaces.
interface Credentials {
    password: string;
    email: string;
}

let creds: Credentials;

creds = {
    password: 'asdsda',
    email: 'mail'
}

// Why you would interface vs custom type?

// Declaration Merging.
interface User {name: string}
interface User {age: number}
// Result: User = { name: string; age: number; }

// duplicate type cause errors

// Extensibility
interface Animal {name: string;}
interface Dog extends Animal { breed: string;}

let animal : Dog;
animal = {
    name: 'An',
    breed: 'Pitbull'
}

// with type
interface ErrorHandling {
    success: boolean;
    error?: {message : string};
}

interface ArtworksData {
    artworks: {title: string}[];
}

type ArtworkResponse = ArtworksData & ErrorHandling;

const handleArtworkResponse = (response: ArtworkResponse) => {
    if (response.error)
    {
        console.error(response.error.message);
        return;
    }

    console.log(response.artworks);
}

// & is merging, | is either or

let role: 'admin' | 'user' | 'editor' | 'super' | -1;

role = 'admin';
// role = 'free'; // TS: Err
role = -1;

type Role = 'admin' | 'user' | 'editor' | 'super' | -1;

function performAction(action: string, role: Role): void {
    if (typeof role === 'string' && role === 'admin') {
        // ...
    }
}