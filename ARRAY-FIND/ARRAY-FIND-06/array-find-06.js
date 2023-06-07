/*
    Viết hàm findLastPerfectSquare(numberList) để tìm ra số chính phương cuối cùng trong mảng numberList

*/

const findLastPerfectSquare = (numberList) => {
    if (!Array.isArray(numberList)) {
        return "Vui long nhap vao mang!";
    } else {
        let result;
        let numberListLength = numberList.length;
        let newArrList = [];
        for (let i = 0; i < numberListLength; i++) {
            if (Math.sqrt(numberList[i]) % 1 === 0) {
                newArrList.push(numberList[i]);
            }
        }
        result = newArrList[newArrList.length - 1];
        return result;
    }
};

let arr1 = [2, 3, 5];
let arr2 = [4, 16, 25, 36, 40];

console.log(findLastPerfectSquare(arr1)); // undefined
console.log(findLastPerfectSquare(arr2)); // 36
