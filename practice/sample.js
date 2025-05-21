const person = {
  name: "John Doe",
  age: 30,
  greet: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
};

person.greet(); // Output: Hello, my name is John Doe
person.age = 31;
console.log(`I am now ${person.age} years old`); // Output: I am now 31 years old

function varExample() {
  var x = 1;
  if (true) {
    var x = 2;
    console.log(x); // Output: 2
  }
  console.log(x); // Output: 2
}

function letExample() {
  let y = 1;
  if (true) {
    let y = 2;
    z=3; // by default, z gets var if not declared
    console.log(z); // Output: 3
    console.log(y); // Output: 2
  }
    // console.log(z); // ReferenceError: z is not defined if z is declared with let
  console.log(y); // Output: 1
}

function constExample() {
    const a = 1;
    if (true) {
        const a = 2;
        console.log(a); // Output: 2
    }
    console.log(a); // Output: 1
    a = 3; // TypeError: Assignment to constant variable.
    }
// constExample();

// letExample();

// varExample();

function fetchData(callback) {
    setTimeout(() => {
        console.log("Data fetched");
        const data = "Sample Data";
        callback(data);
    }, 2000);
}

function processData(data) {
    console.log("Processing data:", data);
}

function modifyData(data) {
    console.log("Modifying data:", data);
}

fetchData(processData);
fetchData(modifyData);



