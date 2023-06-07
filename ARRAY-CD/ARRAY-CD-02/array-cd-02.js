/*
    Viết hàm remove(arr, k, n) để xoá n phần tử ra khỏi mảng arr kể từ vị trị k (zero based)
    - Nếu k < 0 hoặc k >= arr.length thì trả về mảng hiện tại.
    - Nếu k hợp lệ thì remove n phần tử kể tử vị trí k và trả về mảng kết quả.
    - Nếu n không truyền vào thì remove tới cuối mảng.
    - Lưu ý không được làm thay đổi mảng arr truyền vào.
*/

function remove(arr, k, n) {
    if (!Array.isArray(arr) || isNaN(k)) {
        return "Vui long nhap vao chinh xac!";
    } else if (arguments.length === 2) {
        let newArr = [...arr];
        newArr.splice(0, newArr.length);
        return newArr;
    } else {
        let newArr = [...arr];
        if (k < 0 || k >= arr.length) return arr;
        newArr.splice(k, n);
        return newArr;
    }
}

console.log(remove([1, 2, 3], -1, 10)); // [1, 2, 3]
console.log(remove([1, 2, 3], 3, 10)); // [1, 2, 3]
console.log(remove([1, 2, 3], 1, 2)); // [1]
console.log(remove([1, 2, 3], 0)); // []
