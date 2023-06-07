/*
    Viết hàm isSymetricNumber(n) để kiểm tra n có phải là số đối xứng hay không?
    - Với n thoả điều kiện 1 < n < 1000000
    - Số đối xứng là số đọc từ trái sang phải cũng giống như đọc từ phải sang trái.
    - Trả về true nếu đúng, ngược lại trả về false

*/

const isSymetricNumber = (number) => {
    if (isNaN(number) || number <= 1 || number >= 1000000) {
        return "Vui long nhap chinh xac!";
    } else {
        let arrNumber = String(number).split("").reverse();
        let reversedNumber = Number(arrNumber.join(""));
        let result = number === reversedNumber ? true : false;
        return result;
    }
};

console.log(isSymetricNumber(10)); // false
console.log(isSymetricNumber(11)); // true
console.log(isSymetricNumber(12321)); // true
