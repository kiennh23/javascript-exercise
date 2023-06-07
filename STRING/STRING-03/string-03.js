/*
    Viết hàm statisticsCharacters(str) để thống kê số lượng ký tự có trong câu.
    - Trả về một object với:
    - key là character có xuất hiện trong str. Nếu là khoảng trắng thì key="space".
    - value là số lần xuất hiện của key
*/

const statisticsCharacters = (str) => {
    if (!str) {
        return "Vui long nhap chinh xac!";
    } else {
        let arrWords = str.split("");
        let arrLength = arrWords.length;
        let result = {};

        for (let i = 0; i < arrLength; i++) {
            let key = arrWords[i];
            if (key === " ") key = "space";
            if (result.hasOwnProperty(key)) {
                result[key]++;
            } else {
                result[key] = 1;
            }
        }
        return result;
    }
};

console.log(statisticsCharacters("aa b   cc dd")); // {a: 2, space: 5, b: 1, c: 2, d: 2}
console.log(statisticsCharacters()); // Nhap lai
