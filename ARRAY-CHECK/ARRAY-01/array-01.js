/*
    Viết hàm hasEvenNumberGreaterThanN(numberList, n) để kiểm tra trong mảng số numberList truyền vào có số chẵn mà lớn hơn n hay không?
*/

const hasEvenNumberGreaterThanN = (numberList, n) => {
    if (isNaN(n) || !Array.isArray(numberList)) {
        return "Vui long nhap chinh xac!";
    } else {
        let result = false;
        numberList.forEach((number) => {
            if (number % 2 === 0) {
                result = number > n ? true : false;
            }
        });
        return result;
    }
};

console.log(hasEvenNumberGreaterThanN([2, 3, 4], 5)); // false
console.log(hasEvenNumberGreaterThanN([2, 3, 4, 6], 5)); // true
