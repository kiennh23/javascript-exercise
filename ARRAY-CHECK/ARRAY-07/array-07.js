/*
    Viết hàm hasAlice(studentList) để kiểm tra trong mảng studentList có student nữ nào tên là Alice không? (không phân biệt hoa thường)
*/

const hasAlice = (studentList) => {
    if (!Array.isArray(studentList)) {
        return "Vui long nhap chinh xac!";
    } else {
        let result = false;
        studentList.forEach((student) => {
            if (student.name.toLowerCase() === "alice") result = true;
        });
        return result;
    }
};

const studentList = [
    { id: 1, name: "Alice", gender: "male" },
    { id: 2, name: "aliCE", gender: "female" },
    { id: 3, name: "Easy Frontend", gender: "male" },
];

console.log(hasAlice(studentList)); // true
