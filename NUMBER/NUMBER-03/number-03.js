/*
    Kiểm tra số tăng dần đều theo khoảng cách cho trước
    Viết hàm isIncreasingNumberByDistance(n, x) để kiểm tra n có phải là số tăng dần đều với khoảng cách giữa 2 chữ số là x không?
    - 0 < n < 1000000, 0 < x < 5
    - Số tăng dần có ít nhất 2 chữ số
    - Chữ số bên phải luôn lớn hơn chữ số bên trái
    - Khoảng cách của 2 chữ số liền kề là x
    - Trả về true nếu là số tăng dần đều theo khoảng cách x, ngược lại trả về false.

*/

function isIncreasingNumberByDistance(number, x) {
    if (arguments.length < 2) return "Vui long truyen vao 2 doi so!";
    if (
        isNaN(number) ||
        isNaN(x) ||
        number <= 0 ||
        number >= 1000000 ||
        x <= 0 ||
        x >= 5
    ) {
        return "Vui long nhap chinh xac!";
    } else {
        let arr = String(number).split("");
        let arrLength = arr.length;
        if (arrLength < 2) {
            return "Vui long nhap so co 2 chu so !";
        }
        for (let i = 0; i < arrLength - 1; i++) {
            let num1 = Number(arr[i]);
            let num2 = Number(arr[i + 1]);
            if (num1 >= num2 || num2 - num1 != x) return false;
        }
        return true;
    }
}

console.log(isIncreasingNumberByDistance(1357, 2)); // true
console.log(isIncreasingNumberByDistance(2345, 1)); // true
console.log(isIncreasingNumberByDistance(2345, 2)); // false
console.log(isIncreasingNumberByDistance(135, 1)); // false
console.log(isIncreasingNumberByDistance("test", 1)); // Nhap lai
console.log(isIncreasingNumberByDistance(2468, "test")); // Nhap lai
console.log(isIncreasingNumberByDistance(2468)); // Nhap lai
