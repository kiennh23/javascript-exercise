/*
    Viết hàm findLastStudentHavingMinAvg(studentList) để tìm ra student có điểm trung bình môn thấp nhất cuối cùng trong mảng.
*/

const calculateAverage = (student) => {
    let totalMarks = student.math + student.english;
    return totalMarks / 2;
};

const findStudentHavingHighestMark = (studentList) => {
    if (!Array.isArray(studentList)) {
        return "Vui long nhap vao mang!";
    } else {
        let studentListLength = studentList.length;
        let result;
        let min = Infinity;
        for (let i = 0; i < studentListLength; i++) {
            let student = studentList[i];
            let average = calculateAverage(student);
            if (average <= min) {
                min = average;
                result = student;
            }
        }
        return result;
    }
};

const studentList = [
    { id: 1, name: "Alice", math: 9, english: 9 },
    { id: 2, name: "Bob", math: 5, english: 5 },
    { id: 3, name: "John", math: 5, english: 5 },
];
console.log(findStudentHavingHighestMark(studentList));
// { id: 3, name: 'John', math: 5, english: 5 }
