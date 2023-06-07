/*
    Viết hàm hasTwoDigitsWithSum(n, sum) để kiểm tra n (9 < n < 1000000) có chứa 2 chữ số bất kỳ nào có
    tổng bằng sum (0 < sum < 19) cho trước không?
*/

const hasTwoDigitsWithSum = (number, sum) => {
    if (
        isNaN(number) ||
        isNaN(sum) ||
        number <= 9 ||
        number >= 1000000 ||
        sum <= 0 ||
        sum >= 19
    ) {
        return "Vui long nhap chinh xac!";
    } else {
        let arrNumber = String(number).split("");
        let temp = arrNumber.reduce((acc, cur) => {
            return (acc = acc + Number(cur));
        }, 0);
        let result = temp === sum ? true : false;
        return result;
    }
};

console.log(hasTwoDigitsWithSum(10, 1)); // true
console.log(hasTwoDigitsWithSum(101, 3)); // false
console.log(hasTwoDigitsWithSum(11, 2)); // true
