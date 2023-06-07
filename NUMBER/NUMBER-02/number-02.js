/*
    Viết hàm isDecreasingNumber(n) để kiểm tra n có phải là số giảm dần hay không?
    - 0 < n < 1000000
    - Số giảm dần có ít nhất 2 chữ số
    - Chữ số bên phải luôn nhỏ hơn chữ số bên trái
    - Trả về true nếu là số giảm dần, ngược lại trả về false.

*/

const isDecreasingNumber = (number) => {
    if (isNaN(number) || number <= 0 || number >= 1000000) {
        return "Vui long nhap chinh xac!";
    } else {
        let arr = String(number).split("");
        let arrLength = arr.length;
        if (arrLength < 2) return "Vui long nhap so co 2 chu so !";
        for (let i = 0; i < arrLength - 1; i++) {
            let num1 = Number(arr[i]);
            let num2 = Number(arr[i + 1]);
            if (num1 <= num2) return false;
        }
        return true;
    }
};

console.log(isDecreasingNumber(4321)); // true
console.log(isDecreasingNumber(1234)); // false
console.log(isDecreasingNumber(4231)); // false
console.log(isDecreasingNumber()); // false
console.log(isDecreasingNumber("test")); // false
