/*
    Viết hàm hasTruthy(arr) để kiểm tra xem trong mảng arr có giá trị truthy không?
*/

const hasTruthy = (arr) => {
    if (!Array.isArray(arr)) {
        return "Vui long nhap chinh xac!";
    } else {
        let result = false;
        arr.forEach((element) => {
            if (element) {
                result = true;
            }
        });
        return result;
    }
};

console.log(hasTruthy([])); // false
console.log(hasTruthy([false, ""])); // false
console.log(hasTruthy([[false, 123]])); // true
