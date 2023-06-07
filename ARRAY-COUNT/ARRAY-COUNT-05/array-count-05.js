/*
    Viết hàm countNumbersNotInB(a, b) để đếm có bao nhiếu số xuất hiện trong mảng a, mà không có trong mảng b
*/

const countNumbersNotInB = (a, b) => {
    if (!Array.isArray(a) || !Array.isArray(b)) {
        return "Vui long nhap vao mang!";
    } else {
        let count = 0;
        let length = a.length;
        for (let i = 0; i < length; i++) {
            let num = a[i];
            if (!b.includes(num)) {
                count++;
            }
        }
        return count;
    }
};

console.log(countNumbersNotInB([1, 2, 3], [4, 5])); // 3
console.log(countNumbersNotInB([1, 2, 3], [1, 2, 3])); // 0
console.log(countNumbersNotInB([1, 2, 3], [3, 4, 5])); // 2
console.log(countNumbersNotInB([1, 2, 3, 4, 5, 6, 7], [3, 4, 5])); // 4
