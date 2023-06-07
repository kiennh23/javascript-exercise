/*
    Viết hàm hasStudent(studentList, studentId) để kiểm tra trong mảng studentList có student nào có id là studentId không?
*/

function hasStudent(studentList, studentId) {
    if (arguments.length < 2) {
        return "Vui long nhap vao 2 doi so!";
    } else {
        if (!studentList && typeof studentList === "object" && !studentId) {
            return "Vui long nhap chinh xac!";
        } else {
            let result = false;
            studentList.forEach((student) => {
                if (student.id === studentId) {
                    result = true;
                }
            });
            return result;
        }
    }
}

const studentList = [
    { id: 1, name: "Easy" },
    { id: 2, name: "Frontend" },
];

console.log(hasStudent(studentList, 1)); // true
console.log(hasStudent(studentList, 3)); // false
