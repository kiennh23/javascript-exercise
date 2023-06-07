/*
    Viết hàm findAllNumbers(numberList) để tìm ra tất cả các số bằng với số dương chẳn đầu tiên trong mảng.
    - Trường hợp mảng không có số dương chẳn thì trả về mảng rỗng.
    - Mảng kết quả không bao gồm số dương chẵn đầu tiên.
*/

const findAllNumbers = (numberList) => {
    if (!Array.isArray(numberList)) {
        return "Vui long nhap vao mang!";
    } else {
        let numArr = numberList.filter(
            (number) => number > 0 && number % 2 === 0
        );
        numArr.shift();
        return numArr;
    }
};

console.log(findAllNumbers([])); // []
console.log(findAllNumbers([1, 3, 5])); // []
console.log(findAllNumbers([1, 2, 5]));
// [] bởi vì có duy một số dương chẳn đầu tiên, mà số này không bao gồm trong mảng kết quả
console.log(findAllNumbers([1, 4, 5, -6, 4, 5, 4]));
// [4, 4] vì có 3 số 4, bỏ đi một số đầu tiên thì còn lại 2 sô
