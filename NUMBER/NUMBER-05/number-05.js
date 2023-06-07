/*
    Viết hàm isPerfectSquare(n) để kiểm tra n có phải là số chính phương không?
    - 0 < n < 100000
    - Số chính phương là số có căn bậc 2 của nó là một số tự nhiên.
    - Trả về true nếu là số chính phương, ngược lại trả về false.

*/

const isPerfectSquare = (number) => {
    if (isNaN(number) || number <= 0 || number >= 1000000) {
        return "Vui long nhap chinh xac!";
    } else {
        if (Math.sqrt(number) % 1 !== 0) return false;
        return true;
    }
};

console.log(isPerfectSquare(2)); // false
console.log(isPerfectSquare(4)); // true
console.log(isPerfectSquare(9)); // true
console.log(isPerfectSquare(37)); // false
