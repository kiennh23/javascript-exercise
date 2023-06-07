/*
    Viết hàm isIncreasingNumber(n) để kiểm tra n có phải là số tăng dần hay không?
    - 0 < n < 1000000
    - Số tăng dần có ít nhất 2 chữ số
    - Chữ số bên phải luôn lớn hơn chữ số bên trái
    - Trả về true nếu là số tăng dần, ngược lại trả về false.
*/

const isIncreasingNumber = (number) => {
    if (isNaN(number) || number <= 0 || number >= 1000000) {
        return "Vui long nhap chinh xac!";
    } else {
        let arr = String(number).split("");
        let arrLength = arr.length;
        if (arrLength < 2) return "Vui long nhap so co 2 chu so !";
        for (let i = 0; i < arrLength - 1; i++) {
            let num1 = Number(arr[i]);
            let num2 = Number(arr[i + 1]);
            if (num1 >= num2) return false;
        }
        return true;
    }
};

console.log(isIncreasingNumber(4321)); // false
console.log(isIncreasingNumber(1234)); // true
console.log(isIncreasingNumber(4231)); // false
console.log(isIncreasingNumber()); // Nhap lai
console.log(isIncreasingNumber("test")); // Nhap lai
