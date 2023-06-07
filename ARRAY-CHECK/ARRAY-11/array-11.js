/*
    Viết hàm isSymmetricList(numberList) để kiểm tra mảng có tính chất đổi xứng không?
    - Mảng đối xứng là mảng đọc từ trái qua phải giống như đọc từ phải sang trái.
    - Mảng đối xứng phải có ít nhất một phần tử.
*/

const isSymmetricList = (numberList) => {
    if (!Array.isArray(numberList)) {
        return "Vui long nhap chinh xac!";
    } else {
        if (numberList.length < 1) {
            return false;
        } else {
            let newNumberList = numberList.join(",");
            let reversedNumberList = numberList.reverse().join(",");
            if (reversedNumberList === newNumberList) {
                return true;
            } else {
                return false;
            }
        }
    }
};

console.log(isSymmetricList([])); // false
console.log(isSymmetricList([1])); // true
console.log(isSymmetricList([1, 2, 2, 1])); // true
console.log(isSymmetricList([1, 2, 3])); // false
