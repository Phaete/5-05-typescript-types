// Union-Type for Grades
type Grade = 1 | 2 | 3 | 4 | 5 | 6 | "A" | "B" | "C" | "D" | "E" | "F" | undefined

type Student = {
    firstName: string,
    lastName: string,
    age: number,
    grades: Grade[]
}

function printStudent(student : Student) {
    console.log(student.firstName + " " + student.lastName + " (" + student.age + ")")
    console.log("=".repeat(student.firstName.length+student.lastName.length+4+String(student.age).length))
    console.log(student.grades.map(grade => grade === undefined ? "*" : grade.toString()))
}

const studentJohn: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    grades: [1, 2, 3, 4, 5, 6]
}

//printStudent(studentJohn)

const studentJane: Student = {
    firstName: "Jane",
    lastName: "Doe",
    age: 21,
    grades: ["A", 1, "B", 2, "C", 3, 4, "F", 5, 6]
}

//printStudent(studentJane)

const studentJustin: Student = {
    firstName: "Justin",
    lastName: "Doe",
    age: 21,
    grades: [undefined, 1, "B", 2, "C", undefined, 4, "F", 5, 6]
}

//printStudent(studentJustin)

const listOfStudents: Student[] = [studentJohn, studentJane, studentJustin]

function printAllStudents(students: Student[]) {
    students.forEach(student => {
            printStudent(student)
            console.log()
    })
}

printAllStudents(listOfStudents)


// ------------------------
// Session content
// ------------------------

const student3: StudentType = {
    id: '1',
    name: 'John',
    age: 20,
    calc: (a, b) => a + b,
    sayHello: () => console.log("Hello")
}
console.log(student3)

// types
type StudentType = { // types are hoisting
    id: string
    name: string
    age: number
    calc:(a: number, b: number) => number // types can include functions and are only described in the type and implemented in the object
    sayHello:() => void
} // all variables need only be separated by a new line, no comma needed

const student1: StudentType = {
    id: '1',
    name: 'John',
    age: 20,
    calc: (a, b) => a + b,
    sayHello: () => console.log("Hello")
}

console.log(student1)
console.log(student1.calc(2, 3))
student1.sayHello()

// interfaces
interface StudentInterface {
    id: string,
    name: string,
    age: number
}

const student2: StudentInterface = { // will show an error, if the variable in the additional interface, which is hoisting, is not declared in this object
    id: '1',
    name: 'John',
    age: 20,
    phone: "000-000-00000"
}

console.log(student2)

// add other variables to an interface
interface StudentInterface {  // interfaces are hoisting, so we need to change the implementation of any object to reflect the new variable
    phone: string
}

// Union-Types (Enums in Java)
type Gender = "male" | "female"

const gs:Gender = "male" // "other" or other strings not allowed, only male or female
console.log(gs)

// Intersection Types
type Person = {
    secNum: string
}

type PersonStudent = StudentType & Person

const student4: PersonStudent = {
    id: '1',
    name: 'John',
    age: 20,
    secNum: '123456',
    calc: (a, b) => a + b,
    sayHello: () => console.log("Hello")
}

console.log(student4)

