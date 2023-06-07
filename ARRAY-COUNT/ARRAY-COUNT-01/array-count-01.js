/*
    Viết hàm countPositiveEvenNumbers(numberList) để đếm có bao nhiêu số dương chẳn có trong mảng
*/

const countPositiveEvenNumbers = (numberList) => {
    if (!Array.isArray(numberList)) {
        return "Vui long nhap vao mang!";
    } else {
        let result = numberList.filter((num) => num > 0 && num % 2 === 0);
        return result.length;
    }
};

console.log(countPositiveEvenNumbers([-2, -1])); // 0
console.log(countPositiveEvenNumbers([-2, -1, 1, 2, 4])); // 2 (2 và 4 thoả điều kiện)
