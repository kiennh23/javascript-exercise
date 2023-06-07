/*
    Viết hàm sumAllDigits(numberList) để tính tổng các chữ số của từng số trong mảng numberList
*/

const sumAllDigits = (numberList) => {
    if (!Array.isArray(numberList)) {
        return "Vui long nhap vao mang!";
    } else {
        let result = 0;
        let numberListLength = numberList.length;
        if (numberListLength < 1) return 0;
        let digitArr = [];
        numberList.forEach((number) => {
            let arr = number.toString().split("");
            digitArr = digitArr.concat(arr);
        });
        result = digitArr.reduce((acc, curr) => Number(acc) + Number(curr), 0);
        return result;
    }
};

console.log(sumAllDigits([])); // 0
console.log(sumAllDigits([4])); // 4
console.log(sumAllDigits([123, 4])); // 10 vì lấy 1 + 2 + 3 + 4 = 10
console.log(sumAllDigits([1234, 55])); // 20 vì lấy 1 + 2 + 3 + 4 + 5 + 5 = 20
