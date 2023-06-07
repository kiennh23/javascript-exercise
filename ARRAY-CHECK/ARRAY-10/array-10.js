/*
    Viết hàm isIncreasingNumberList(numberList) để kiểm tra xem mảng số này có phải giảm dần không?
    - Mảng tăng dần cần thoả các điều kiện sau:
    - Có ít nhất 2 phần tử.
    - Phần tử sau luôn nhỏ hơn phần tử trước nó.
*/

const isIncreasingNumberList = (numberList) => {
    if (!Array.isArray(numberList) || numberList.length < 2) {
        return "Vui long nhap chinh xac!";
    } else {
        let result = false;
        let arrLength = numberList.length;
        for (let i = 0; i < arrLength - 1; i++) {
            let num1 = numberList[i];
            let num2 = numberList[i + 1];
            if (num1 >= num2) {
                return result;
            } else {
                result = true;
                return result;
            }
        }
    }
};

console.log(isIncreasingNumberList([1, 1])); // false
console.log(isIncreasingNumberList([1, 2])); // true
console.log(isIncreasingNumberList([2, 1])); // false
