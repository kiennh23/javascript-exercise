/*
    Viết hàm findStudentById(studentList, studentId) để tìm ra vị trí của student có id bằng với studentId
*/

function findStudentById(studentList, studentId) {
    if (arguments.length < 2 || !Array.isArray(studentList)) {
        return "Vui long nhap lai!";
    } else {
        let result = studentList.findIndex((student) => {
            return student.id === studentId;
        });
        return result;
    }
}

const studentList = [
    { id: 1, name: "Easy" },
    { id: 2, name: "Frontend" },
]; // 0 // -1

console.log(findStudentById(studentList, 1));
console.log(findStudentById(studentList, 3));
