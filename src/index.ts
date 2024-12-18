console.log("Hello, World");

let age: number;

// tuple = fixed length array, generally used for key pairs
let person: [string, number] = ["Evan", 31];

// enum = groups of constants (PascalCase)
// instead of const small = 1, const medium = 2, const large = 3
// can initialize with a number and it will increment by 1
const enum Size {
  Small = 1,
  Medium,
  Large,
}

let mySize: Size = Size.Large;

console.log("mySize ->", mySize);

// can initialize taxYear as 2022, will get overwritten if a parameter is provided when function is called
function calculateTax(income: number, taxYear = 2022): number {
  if (taxYear < 2022) {
    return income * 1.2;
  }
  return income * 1.3;
}

calculateTax(80_000, 2022);

// can add readonly to make variables unmodifiable
let employee: {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
} = {
  id: 1,
  name: "Evan",
  retire: (date: Date) => {
    console.log(date);
  },
};

// type aliases create object templates
type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};

let jennifer: Employee = {
  id: 2,
  name: "Jennifer",
  retire: (date: Date) => {
    console.log(date);
  },
};

// union types
function kgToLbs(weight: number | string): number {
  // narrowing
  if (typeof weight === "number") {
    return weight * 2.2;
  } else {
    return parseInt(weight) * 2.2;
  }
}

kgToLbs(10);
kgToLbs("10");

// intersection types, combine two types
type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
  drag: () => {},
  resize: () => {},
};


// literal types, exact or specific values
let quantity: 50 | 100 = 50;

// or

type Quantity = 50 | 100;
let typeQuantity: Quantity = 100;

type Metric = 'cm' | 'inch';


// nullable types - TypeScript is very strict about using null/undefined values
// if you want null or undefined to be valid inputs you need to specify that
function greet(name: string | null | undefined) {
    if (name)
        console.log('Hello, ' + name.toUpperCase())
    else
        console.log('Hello')
}


// optional chaining
type Customer = {
    birthday: Date
};

function getCustomer(id: number): Customer | null | undefined {
    return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(0);
// optional property access operator (?)
console.log(customer?.birthday);