/*
    Viết hàm findAllStudents(studentList) để tìm ra tất cả student có điểm toán nhỏ hơn 5
*/

const findAllStudents = (studentList) => {
    if (!Array.isArray(studentList)) {
        return "Vui long nhap vao mang!";
    } else {
        let result = studentList.filter((student) => student.math < 5);
        return result;
    }
};

const studentList = [
    { id: 1, name: "Alice", math: 9 },
    { id: 2, name: "Bob", math: 4 },
    { id: 3, name: "John", math: 0 },
];

console.log(findAllStudents(studentList));
// should return the following array:
// [
// { id: 2, name: 'Bob', math: 4 },
// { id: 3, name: 'John', math: 0 },
// ]
