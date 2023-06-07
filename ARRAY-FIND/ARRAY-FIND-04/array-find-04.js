/*
    Viết hàm findLastNegativeOdd(numberList) để tìm ra số âm lẻ cuối cùng trong mảng numberList
*/

const findLastNegativeOdd = (numberList) => {
    if (!Array.isArray(numberList)) {
        return "Vui long nhap chinh xac!";
    } else {
        let numberListLength = numberList.length;
        let reversedList = numberList.reverse();
        for (let i = 0; i < numberListLength; i++) {
            if (reversedList[i] < 0 && reversedList[i] % 2 !== 0) {
                return reversedList[i];
            }
        }
        return;
    }
};

let arr1 = [-1, -3, -5];
let arr2 = [1, 3, 5];

console.log(findLastNegativeOdd(arr1)); // -5 vì -5 là số âm lẻ cuối cùng
console.log(findLastNegativeOdd(arr2)); // undefined vì không có số âm lẻ nào trong mảng
