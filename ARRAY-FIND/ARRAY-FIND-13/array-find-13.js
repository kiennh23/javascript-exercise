/*
    Viết hàm findStudent(studentList) để tìm ra student đầu tiên có trong mảng có tất cả các điểm đều lớn hơn hoặc bằng 5, tuy nhiên có một môn dưới 5.
*/

const findStudent = (studentList) => {
    if (!Array.isArray(studentList)) {
        return "Vui long nhap vao mang!";
    } else {
        let studentListLength = studentList.length;
        for (let i = 0; i < studentListLength; i++) {
            if (studentList[i].marks) {
                let marksObj = studentList[i].marks;
                let markArr = Object.values(marksObj);
                let tempArr = markArr.filter((mark) => mark < 5);
                let tempArrLength = tempArr.length;
                if (
                    tempArr &&
                    tempArrLength === 1 &&
                    checkFiltedArray(tempArr[0], markArr)
                ) {
                    return studentList[i];
                }
            }
        }
        return;
    }
};

const checkFiltedArray = (value, arr) => {
    let newArr = arr.filter((item) => item !== value);
    let result = newArr.every((item) => item >= 5);
    return result;
};

const studentList = [
    { id: 1, name: "Alice", marks: { math: 9, english: 9, programming: 5 } },
    { id: 2, name: "Bob", marks: { math: 2, english: 3, programming: 5 } },
    { id: 3, name: "John", marks: { math: 4, english: 7, programming: 9 } },
    { id: 4, name: "Sarah", marks: { math: 2, english: 8, programming: 10 } },
];

console.log(findStudent(studentList));
// { id: 3, name: 'John', marks: { math: 4, english: 7, programming: 9 } }
// vì đây là student đầu chỉ có duy nhất một môn dưới 5 điểm
