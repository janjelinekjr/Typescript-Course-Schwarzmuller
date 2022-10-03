let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "max";

// userName = userInput // doesnt work

if (typeof userInput === "string") {
  userName = userInput;
}

// never type

function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code }; // stop the code
}

generateError("An Error", 404);
