/*
    Viết hàm generateFibonaci(n) để tạo ra mảng các số fibonaci nhỏ hơn n (0 < n < 1000)
    Fibonaci là dãy số tự nhiên có 2 phần tử đầu tiên là 0 và 1.
    Phân tử tiếp theo sẽ bằng tổng 2 phần tử trước đó:
    f(n) = f(n - 1) + f(n - 2)
*/

const generateFibonaci = (n) => {
    if (isNaN(n) || n <= 0 || n >= 1000) {
        return "Vui long nhap chinh xac!";
    } else {
        let fibArr = [0, 1];
        let nextFib = 1;

        while (nextFib < n) {
            fibArr.push(nextFib);
            nextFib = fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2];
        }

        return fibArr;
    }
};

console.log(generateFibonaci(5)); // [0, 1, 1, 2, 3]
console.log(generateFibonaci(10)); // [0, 1, 1, 2, 3, 5, 8]
