/*
    Viết hàm countNumbers(numberList) để đếm xem trong mảng có bao nhiêu số mà nó nhỏ hơn số đừng liền trước của nó.
*/

const countNumbers = (numberList) => {
    if (!Array.isArray(numberList)) {
        return "Vui long truyen vao mang!";
    } else {
        let count = 0;
        let numberListLength = numberList.length;
        for (let i = 0; i < numberListLength - 1; i++) {
            let num = numberList[i];
            let nextNum = numberList[i + 1];
            if (num > nextNum) {
                count++;
            }
        }
        return count;
    }
};

console.log(countNumbers([1, 2, 3])); // 0
console.log(countNumbers([1, 2, 3, 10, 9, 8])); // 2 (9 và 8 thoả điều kiện)
