/*
    Viết hàm sumEvenNumbers(numberList) để tính tổng các số chẵn có giá trị lớn hơn số liền kế trước đó
*/

const sumEvenNumbers = (numberList) => {
    if (!Array.isArray(numberList)) {
        return "Vui long nhap vao mang!";
    } else {
        let result = 0;
        let numberListLength = numberList.length;
        for (let i = 0; i < numberListLength - 1; i++) {
            let currNum = numberList[i];
            let nextNum = numberList[i + 1];
            if (currNum % 2 === 0 && nextNum % 2 === 0 && currNum < nextNum) {
                result = result + currNum + nextNum;
            }
        }
        return result;
    }
};

console.log(sumEvenNumbers([-10, -4, 2, 8, 5])); // 6 vì lấy -4 + 2 + 8 = -6
console.log(sumEvenNumbers([2, 8, 5, 4])); // 10 vì lấy 2 + 8 = 10
