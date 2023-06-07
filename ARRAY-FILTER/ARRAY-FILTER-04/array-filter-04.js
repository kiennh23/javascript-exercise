/*
    Viết hàm generatePrimeNumbers(n) để tạo ra mảng các số nguyên tố nhỏ hơn n (0 < n < 1000)
*/

const generatePrimeNumbers = (n) => {
    if (isNaN(n) || n <= 0 || n >= 1000) {
        return "Vui long nhap chinh xac!";
    } else {
        let result = [];
        if (n < 2) return result;
        for (let i = 2; i < n; i++) {
            let isPrime = true;
            for (let j = 2; j <= Math.sqrt(i); j++) {
                if (i % j === 0) {
                    isPrime = false;
                    break;
                }
            }
            if (isPrime) {
                result.push(i);
            }
        }

        return result;
    }
};

console.log(generatePrimeNumbers(10)); // [2, 3, 5, 7]
console.log(generatePrimeNumbers(20)); // [2, 3, 5, 7, 11, 13, 17, 19]
