/*
    Viết hàm countStudents(studentList, avgMark) để đếm số lượng student có điểm trung bình môn lớn hơn hoặc bằng avgMark
    - Cách tính điểm trung bình môn:
    - Giả sử mình không biết trước sẽ có bao nhiêu môn
    - Dựa vào object marks để xác định, có bao nhiêu keys là bấy nhiêu môn và tính điểm trung bình môn tương ứng.
    - Một student list sẽ đảm bảo là số lượng keys trong object marks sẽ giống nhau.
*/

const countStudents = (studentList, avgMark) => {
    if (!Array.isArray(studentList) || isNaN(avgMark)) {
        return "Vui long nhap chinh xac!";
    } else {
        let count = 0;
        let studentListLength = studentList.length;
        for (let i = 0; i < studentListLength; i++) {
            let marksObj = studentList[i].marks;
            let marksArr = Object.values(marksObj);
            let totalMark = marksArr.reduce((acc, curr) => acc + curr, 0);
            let average = totalMark / marksArr.length;
            if (average >= avgMark) {
                count++;
            }
        }
        return count;
    }
};

const studentList = [
    { id: 1, name: "Alice", marks: { math: 5, english: 6 } },
    { id: 2, name: "Bob", marks: { math: 9, english: 8 } },
];

console.log(countStudents(studentList, 7)); // 1
