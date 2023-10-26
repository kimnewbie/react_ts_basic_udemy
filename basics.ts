// Primitives : number, string, boolean
// More complex types : arrays, objects
// Function types, parameters

// Primitives

let age: number; // Number error!

age = 12; // '12' error!

let userName: string;

userName = "YJ";

let isStudent: boolean;

isStudent = true;

// More complex types

let hobbies: string[]; // number[], string[]

hobbies = ["Tennis", "hiking"];

let person: {
  name: string;
  age: number;
};

person = {
  name: "YJ",
  age: 34,
};

// person = {
//   isEmployee: true,
// };

let people: {
  name: string;
  age: number;
}[];
