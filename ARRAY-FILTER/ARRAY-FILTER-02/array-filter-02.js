/*
    Viết hàm findNumbers(numberList) để tìm ra các số thoả điều kiện là lớn hơn số đứng trước nó (không tính số đầu tiên)
*/

const findNumbers = (numberList) => {
    if (!Array.isArray(numberList)) {
        return "Vui long nhap vao mang!";
    } else {
        let result = [];
        let numberListLength = numberList.length;
        for (let i = 0; i < numberListLength - 1; i++) {
            let number = numberList[i];
            let nextNum = numberList[i + 1];
            if (nextNum > number) {
                result.push(nextNum);
            }
        }
        return result;
    }
};

console.log(findNumbers([1])); // []
console.log(findNumbers([2, 5, 3, 7])); // [5, 7] vì 5 > 2 và 7 > 3
