function add(n1: number, n2: number) {
  return n1 + n2;
}

// unction printResult(num: number): void
function printResult(num: number) {
  console.log("Result " + num);
}

printResult(add(5, 12));


function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(10, 20, (result) => {
   console.log(result);
})

// function as a type

// let combineValues: Function
let combineValues: (a: number, b: number) => number;

combineValues = add;
// combineValues = 5

console.log(combineValues(8, 8));

