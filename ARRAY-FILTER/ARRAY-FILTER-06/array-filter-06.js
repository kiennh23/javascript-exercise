/*
    Viết hàm findAllNumbers(numberList) để tìm ra tất cả các số có chữ số đầu tiên là chữ số lẻ.
*/

const findAllNumbers = (numberList) => {
    if (!Array.isArray(numberList)) {
        return "Vui long nhap vao mang!";
    } else {
        let result = [];
        numberList.forEach((num) => {
            let firtElement = String(num).split("").shift();
            if (Number(firtElement) % 2 !== 0) {
                result.push(num);
            }
        });
        return result;
    }
};

console.log(findAllNumbers([1, 5, 6])); // [1, 5]
console.log(findAllNumbers([234, 421, 123])); // [123]
