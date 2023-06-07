/*
    Viêt hàm countWords(str) để đếm số từ có trong str
*/

const countWords = (str) => {
    if (!str) {
        return "Vui long nhap chinh xac!";
    } else {
        let arrWords = str.trim().split(" ");
        let result = arrWords.length;
        return result;
    }
};

console.log(countWords("baby shark")); // 2
console.log(countWords()); // Nhap lai
