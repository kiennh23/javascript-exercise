/*
    Viết hàm hasTruthy(arr) để kiểm tra xem trong mảng arr có giá trị falsy không?
*/

const hasFalsy = (arr) => {
    if (!Array.isArray(arr)) {
        return "Vui long nhap chinh xac!";
    } else {
        let result = false;
        arr.forEach((element) => {
            if (!element) {
                result = true;
            }
        });
        return result;
    }
};

console.log(hasFalsy([])); // false
console.log(hasFalsy([false, ""])); // true
console.log(hasFalsy([false, 123])); // true
console.log(hasFalsy(["easy", 123])); // false
