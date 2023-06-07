/*
    Viết hàm findSecondLargestNumber(numberList) để tìm ra số lớn thứ 2 trong mảng numberList
*/

const findSecondLargestNumber = (numberList) => {
    if (!Array.isArray(numberList)) {
        return "Vui long nhap chinh xac!";
    } else {
        let newNumberList = numberList.sort((a, b) => b - a);
        return newNumberList[1];
    }
};

let arr1 = [1];
let arr2 = [1, 2];
let arr3 = [1, 2, 3, 4];

console.log(findSecondLargestNumber(arr1)); // undefined
console.log(findSecondLargestNumber(arr2)); // 1
console.log(findSecondLargestNumber(arr3)); // 3
