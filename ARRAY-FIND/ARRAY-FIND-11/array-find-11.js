/*
    Viết hàm findStudentHavingHighestMark(studentList) để tìm ra student để điểm môn toán cao nhất.
*/

const findStudentHavingHighestMark = (studentList) => {
    if (!Array.isArray(studentList)) {
        return "Vui long nhap chinh xac!";
    } else {
        let studentListLength = studentList.length;
        let max = 0;
        let result;
        for (let i = 0; i < studentListLength; i++) {
            let student = studentList[i];
            if (student.math > max) {
                max = student.math;
                result = student;
            }
        }
        return result;
    }
};

const studentList = [
    { id: 1, name: "Alice", math: 9 },
    { id: 2, name: "Bob", math: 10 },
    { id: 3, name: "John", math: 10 },
];
console.log(findStudentHavingHighestMark(studentList)); // { id: 2, name: 'Bob', math: 10}
