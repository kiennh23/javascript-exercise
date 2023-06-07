/*
    Viết hàm uniqueArray(numberList)  để xoá các số xuần hiện hơn 1 lần, nhưng giữ lại 1 số.
*/

const uniqueArray = (numberList) => {
    if (!Array.isArray(numberList)) {
        return "Vui long nhap vao mang!";
    } else {
        let uniqueArray = [...new Set(numberList)];
        return uniqueArray;
    }
};

console.log(uniqueArray([1, 1, 2, 2, 3])); // [1, 2, 3]
console.log(uniqueArray([1, 1, 1, 1])); // [1]
