/*
    Viết hàm isDivisibleBy10(n) để kiểm tra n (0 < n < 1000000) có tổng chữ số chia hết cho 10 hay không?

*/

const isDivisibleBy10 = (number) => {
    if (isNaN(number) || number <= 1 || number >= 1000000) {
        return "Vui long nhap chinh xac!";
    } else {
        let arrNumber = String(number).split("");
        let temp = arrNumber.reduce((acc, cur) => {
            return (acc = acc + Number(cur));
        }, 0);
        let result = temp % 10 === 0 ? true : false;
        return result;
    }
};

console.log(isDivisibleBy10(10)); // false
console.log(isDivisibleBy10(1234)); // true
console.log(isDivisibleBy10(123455)); // true
