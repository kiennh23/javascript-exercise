/*
    Viết hàm sumAllMinDigits(numberList) để tính tổng các chữ số nhỏ nhất của từng số trong mảng numberList
*/

const sumAllMinDigits = (numberList) => {
    if (!Array.isArray(numberList)) {
        return "Vui long nhap vao mang!";
    } else {
        let result = 0;
        let numberListLength = numberList.length;
        if (numberListLength < 1) return 0;
        for (let num of numberList) {
            let arr = num
                .toString()
                .split("")
                .sort((a, b) => a - b);
            result += Number(arr[0]);
        }
        return result;
    }
};

console.log(sumAllMinDigits([])); // 0
console.log(sumAllMinDigits([123])); // 1 vì chỉ lấy chữ số nhỏ nhất của 123 là 1
console.log(sumAllMinDigits([123, 532])); // 3 (lấy 1 từ 123 và 2 từ 532, tổng bằng 3)
