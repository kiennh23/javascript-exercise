/*
    Viết hàm removeStudentById(studentList, studentId) để remove student có id là studentId ra khỏi mảng studentList và trả về mảng mới.
*/

const removeStudentById = (studentList, studentId) => {
    if (!Array.isArray(studentList) || isNaN(studentId)) {
        return "Vui long nhap chinh xac!";
    } else {
    }
};

const studentList = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
];

console.log(removeStudentById(studentList, 1));
// should return:
// [
// { id: 2, name: 'Bob' },
// ]
console.log(removeStudentById(studentList, 3));
// should return:
// [
// { id: 1, name: 'Alice' },
// { id: 2, name: 'Bob' },
// ]
