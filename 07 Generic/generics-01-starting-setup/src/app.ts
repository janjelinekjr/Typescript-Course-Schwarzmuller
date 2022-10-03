// Code goes here!

const names: Array<string> = []; // same as string[]

const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Done");
  }, 2000);
  reject();
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Creating a Generic Function

// function merge<T, U>(objA: T, objB: U){
//    return Object.assign(objA, objB)
// }

// const mergeObj = merge({name: 'Max', hobbies: ['Sports']}, {age: 30});
// console.log(mergeObj.age);

// Working with Constraints

function merge<T extends object, U extends object>(objA: T, objB: U) {
  // extends object = have to be an object
  return Object.assign(objA, objB);
}

const mergeObj = merge({ name: "Max", hobbies: ["Sports"] }, { age: 30 });
console.log(mergeObj.age);

interface Lengthy {
  length: number;
}

function countAndPrint<T extends Lengthy>(element: T) {
  let descriptionText = "Got no value.";
  if (element.length === 1) {
    descriptionText = "Gto 1 element";
  } else if (element.length > 1) {
    descriptionText = `Got ${element.length} elements.`;
  }
  return [element, descriptionText];
}

console.log(countAndPrint(["Sports", "Cooking"]));

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return obj[key];
}

extractAndConvert({ name: "Max" }, "name");

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Generic Classes

class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Manu");
console.log(textStorage.getItems());

// const objStorage = new DataStorage<object>()
// objStorage.addItem({name: 'Max'})
// objStorage.addItem({name: 'Manu'})
// objStorage.removeItem({name: 'Manu'})

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Generic Utility Types

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let CourseGoal: Partial<CourseGoal> = {};
  CourseGoal.title = title;
  CourseGoal.description = description;
  CourseGoal.completeUntil = date;
  return CourseGoal as CourseGoal;
}

const names1:Readonly<string[]> = ["Max", "Anna"];
// names1.push("Manu");
// names1.pop()


