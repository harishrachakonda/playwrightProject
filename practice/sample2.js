let test;
console.log(test); // Output: undefined
console.log(typeof test); // Output: undefined

let test2 = null;
console.log(test2); // Output: null
console.log(typeof test2); // Output: object


const students = [
    { name: 'Sam', score: 85 },
    { name: 'Ravi', score: 28 },
    { name: 'Chandu', score: 78 },
    { name: 'Navin', score: 35 },
    { name: 'Marsha', score: 88 }
]

// use filter, map, reduce 
const filteredStudents = students.filter(student => student.score > 36);
const studentNames = filteredStudents.map(student => student.name.toUpperCase());
const totalScore = students.reduce((acc, student) => acc + student.score, 0);

const totalScore2 = students.reduce(function(acc, student) {
    acc = acc + student.score;
    return acc;
},0);

console.log(filteredStudents); // Output: [ { name: 'Sam', score: 85 }, { name: 'Chandu', score: 78 }, { name: 'Marsha', score: 88 } ]
console.log(studentNames); // Output: [ 'SAM', 'CHANDU', 'MARSH' ]
console.log(totalScore); // Output: 314
console.log(totalScore2); // Output: 314


