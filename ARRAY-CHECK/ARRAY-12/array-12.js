/*
    Viết hàm hasFibonaciNumber(numberList) để kiểm tra xem trong mảng numberList có chứa một số fibonaci nhỏ hơn 100 không?
    - Việc đầu tiên là viết hàm để generate ra cái list fibonaci numbers nhỏ hơn 100. Nếu bạn chưa biết fibonaci là gì thì đọc ở đây nhé
    - Việc tiếp theo là kiểm tra trong mảng đầu vào có chứa con số fibonaci nhỏ hơn 100 không?
    Trả về true nếu có, ngược lại trả về false.
*/

const generateFibArray = (n) => {
    let fibArr = [0, 1];
    let nextFib = 1;

    while (nextFib < n) {
        fibArr.push(nextFib);
        nextFib = fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2];
    }

    return fibArr;
};

const hasFibonaciNumber = (numberList) => {
    if (!Array.isArray(numberList)) {
        return "Vui long nhap chinh xac!";
    } else {
        let result = false;
        let fibArr = generateFibArray(100);
        let numberListLength = numberList.length;
        for (let i = 0; i < numberListLength; i++) {
            if (fibArr.includes(numberList[i])) {
                result = true;
                return result;
            }
        }
        return result;
    }
};

console.log(hasFibonaciNumber([4, 6, 7])); // false
console.log(hasFibonaciNumber([0, 1, 2, 3, 4, 5])); // true
console.log(hasFibonaciNumber([89])); // true
