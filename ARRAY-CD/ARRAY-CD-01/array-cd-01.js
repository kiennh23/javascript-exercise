/*
    Viết hàm insert(arr, newItem, k) để thêm một phần tử mới newItem vào vị trí k (zero based) của mảng arr
    - Nếu k lớn hơn độ dài của mảng thì thêm vào cuối mảng
    - Nếu k bé hơn hoặc bằng 0 thì thêm vào đàu mảng
*/

const insert = (arr, newItem, k) => {
    if (!Array.isArray(arr) || isNaN(k) || isNaN(newItem)) {
        return "Vui long nhap vao chinh xac!";
    } else {
        let arrLength = arr.length;
        if (k >= arrLength) {
            arr.push(newItem);
            return arr;
        }
        if (k <= 0) {
            arr.unshift(newItem);
            return arr;
        }
        arr.splice(k, 0, newItem);
        return arr;
    }
};

console.log(insert([1, 2, 3], 0, -1)); // [0, 1, 2, 3]
console.log(insert([1, 2, 3], 4, 10)); // [1, 2, 3, 4]
console.log(insert([1, 2, 3], 10, 2)); // [1, 2, 10, 3]
