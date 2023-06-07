/*
    Viết hàm countUniqueNumbers(numberList) để tìm ra có bao nhiêu số khác nhau trong mảng.
*/

const countUniqueNumbers = (numberList) => {
    if (!Array.isArray(numberList)) {
        return "Vui long nhap vao mang!";
    } else {
        return [...new Set(numberList)].length;
    }
};

console.log(countUniqueNumbers([])); // 0
console.log(countUniqueNumbers([1, 1, 1])); // 1
console.log(countUniqueNumbers([1, 2, 3])); // 3
console.log(countUniqueNumbers([1, 2, 2, 3, 1])); // 3
console.log(countUniqueNumbers([5, 1, 1, 2, 5, 2, 0, 3, 4, 5, 1])); // 6
