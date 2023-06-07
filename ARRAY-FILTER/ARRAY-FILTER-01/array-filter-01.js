/*
    Viết hàm generateNumberInRange(a, b) để tạo ra một mảng các số từ a đến b (có bao gồm a và b).
*/

const generateNumberInRange = (a, b) => {
    if (isNaN(a) || isNaN(b)) {
        return "Vui long nhap vao so!";
    } else if (a > b) {
        return [];
    } else {
        let resultArr = [];
        for (let i = a; i <= b; i++) {
            resultArr.push(i);
        }
        return resultArr;
    }
};

console.log(generateNumberInRange(1, 5)); // [1, 2, 3, 4, 5]
console.log(generateNumberInRange(5, 7)); // [5, 6, 7]
console.log(generateNumberInRange(7, 5)); // []
