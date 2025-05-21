import Person from './person.js';

class Student extends Person {
    constructor(name, age, grade) {
        super(name, age); // Call the constructor of the parent class
        this.grade = grade;
    }

    // Method to get student details
    getStudentDetails() {
        const parentDetails = super.getDetails(); // Call the parent class method
        return `${parentDetails}, Grade: ${this.grade}`;
    }
}
// Exporting the Student class
export default Student;