// Primitives : number, string, boolean
// More complex types : arrays, objects
// Function types, parameters

// Primitives
// Primitives

let age: number; // Number error!

age = 12; // '12' error!

let userName: string;

userName = "YJ";

let isStudent: boolean;

isStudent = true;

// More complex types
// More complex types

let hobbies: string[]; // number[], string[]

hobbies = ["Tennis", "hiking"];

type Person = {
  name: string;
  age: number;
};

let person: Person;

person = {
  name: "YJ",
  age: 34,
};

// person = {
//   isEmployee: true,
// };

let people: Person[];

// Type inference
// Type inference

let course = "React - The Complete Guide";

// course = 1234; // error

let unions: string | number = "React - The Complete Guide";

unions = 1234;

// Function & types

function add1(a: number, b: number) {
  return a + b;
}

function printOutput(value: any) {
  // void
  console.log(value);
}

// Generics
// Generics
function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3];
const stringArray = insertAtBeginning(["a", "b", "c"], "d");
// updatedArray[0].split(""); // Generic 붙이니까 error!
stringArray[0].split("");
