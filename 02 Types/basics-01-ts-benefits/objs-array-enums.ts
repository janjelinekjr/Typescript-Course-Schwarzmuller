// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string]; // tuples - fix lenght of an array and also types
// } = {
//   name: "Jan",
//   age: 27,
//   hobbies: ["Sports", "Cooking"],
//   role: [2, "author"],
// };

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: "Jan",
  age: 27,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN
};

let favActivity: string[];

favActivity = ["Sports", "Cooking"];

console.log(person.name);
