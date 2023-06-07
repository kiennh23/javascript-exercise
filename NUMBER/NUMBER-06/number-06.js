/*
    Viết hàm isPerfectNumber(n) để kiểm tra n có phải là số hoàn hảo hay không?
    - Với n thoả điều kiện 1 < n < 1000
    - Số hoàn hảo là số mà tổng của tất cả ước số (không tính chính nó, tức từ 1 đến n - 1) bằng chính nó.
    - Trả về true nếu đúng, ngược lại trả về false
    - Ví dụ: 6 = 1 + 2 + 3 (như vậy 6 là một số hoàn hảo)

*/

const isPerfectNumber = (number) => {
    if (isNaN(number) || number <= 1 || number >= 1000) {
        return "Vui long nhap chinh xac!";
    } else {
        let sum = 0;
        for (let i = 1; i <= number / 2; i++) {
            if (number % i === 0) {
                sum += i;
            }
        }
        let result = sum !== number ? false : true;
        return result;
    }
};

console.log(isPerfectNumber(28)); // true
console.log(isPerfectNumber(6)); // true
console.log(isPerfectNumber(7)); // false
