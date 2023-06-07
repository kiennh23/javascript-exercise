/*
    Viết hàm findMinPositive(numberList) để tìm ra số dương nhỏ nhất trong mảng.
*/

const findMinPositive = (numberList) => {
    if (!Array.isArray(numberList)) {
        return "Vui long nhap vao mang!";
    } else {
        let numberListLength = numberList.length;
        let newNumberList = [];
        if (numberListLength < 1) return;
        for (let i = 0; i < numberListLength; i++) {
            if (numberList[i] > 0) {
                newNumberList.push(numberList[i]);
            }
        }
        let sortedArr = newNumberList.sort((x, y) => x - y);
        return sortedArr[0];
    }
};

let arr1 = [];
let arr2 = [-1, -5];
let arr3 = [-1, -5, 2, 6];

console.log(findMinPositive(arr1)); // undefined
console.log(findMinPositive(arr2)); // undefined
console.log(findMinPositive(arr3)); // 2
