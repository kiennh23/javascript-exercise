/*
    Viết hàm statisticsWords(str) để đếm tần số xuất hiện của môi từ trong str.
    - Trả về một object với:
    - key là từ có xuất hiện trong str
    - value là số lần xuất hiện của key
*/

const statisticsWords = (str) => {
    if (!str) {
        return "Vui long nhap chinh xac!";
    } else {
        let arrWords = str.trim().split(" ");
        let arrLength = arrWords.length;
        let result = {};

        for (let i = 0; i < arrLength; i++) {
            let key = arrWords[i];
            if (result.hasOwnProperty(key)) {
                result[key]++;
            } else {
                result[key] = 1;
            }
        }
        return result;
    }
};

console.log(statisticsWords("baby shark doo doo")); // {baby: 1, shark: 1, doo: 2}
console.log(statisticsWords()); // Nhap lai
