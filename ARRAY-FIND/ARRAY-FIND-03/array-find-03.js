/*
    Viết hàm findFirstPositiveEven(numberList) để tìm ra số dương chẵn đầu tiên trong mảng numberList
*/

const findFirstPositiveEven = (numberList) => {
    if (!Array.isArray(numberList)) {
        return "Vui long nhap chinh xac!";
    } else {
        let numberListLength = numberList.length;
        for (let i = 0; i < numberListLength; i++) {
            if (numberList[i] > 0 && numberList[i] % 2 === 0) {
                return numberList[i];
            }
        }
        return;
    }
};

let arr1 = [1, 4, 5];
let arr2 = [1, 3, 5];

console.log(findFirstPositiveEven(arr1)); // 4
console.log(findFirstPositiveEven(arr2)); // undefined vì không có số dương chẳn nào;
