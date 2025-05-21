class Person {
    // Define the parent class
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // Method to get person details
    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}
// Exporting the Person class
export default Person;