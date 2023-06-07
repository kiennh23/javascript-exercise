/*
    Viết hàm isPrime(n) để kiểm tra n có phải là số nguyên tố không?
    - Số nguyên tố là số chỉ chia hết cho 1 và chính nó.
    - 0 < n < 100000
    - Trả về true nếu là số nguyên tố, ngược lại trả về false.

*/

const isPrime = (number) => {
    if (isNaN(number) || number <= 0 || number >= 1000000) {
        return "Vui long nhap chinh xac!";
    } else {
        if (number <= 1) return false;
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) return false;
        }
        return true;
    }
};

console.log(isPrime(3)); // true
console.log(isPrime(4)); // false
console.log(isPrime(11)); // true
