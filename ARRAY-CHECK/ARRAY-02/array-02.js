/*
    Viết hàm hasOddNumberDivisibleBy3(numberList) để kiểm tra trong mảng numberList có chứa số lẻ nào chia hết cho 3 không?

 */

const hasOddNumberDivisibleBy3 = (numberList) => {
    if (!Array.isArray(numberList)) {
        return "Vui long nhap vao mang!";
    } else {
        let result = "";
        numberList.forEach((number) => {
            if (number % 2 !== 0) {
                result = number % 3 === 0 ? true : false;
            }
        });
        return result;
    }
};

console.log(hasOddNumberDivisibleBy3([1, 5, 7])); // false
console.log(hasOddNumberDivisibleBy3([1, 6, 9])); // true
