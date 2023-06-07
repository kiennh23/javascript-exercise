/*
    Viết hàm findLongestWord(wordList) để tìm ra từ dài nhất trong mảng wordList
    - Từ cần tìm có độ dài không quá 5
    - Từ cần tìm không có chứa khoảng trắng (space)
    - Trường hợp không tìm thấy từ thoả điều kiện thì trả về empty string.
*/

const findLongestWord = (wordList) => {
    if (!Array.isArray(wordList)) {
        return "Vui long truyen vao mang!";
    } else {
        let wordListLength = wordList.length;
        let newWordArr = [];
        let result = "";

        for (let i = 0; i < wordListLength; i++) {
            let word = wordList[i];
            if (!word.includes(" ") && word.length <= 5) {
                newWordArr.push(wordList[i]);
            }
        }

        let newWordLength = newWordArr.length;
        if (newWordLength < 1) return "";
        if (newWordLength === 1) return newWordArr[0];

        for (let i = 0; i < newWordLength - 1; i++) {
            if (newWordArr[i].length <= newWordArr[i + 1].length) {
                result = newWordArr[i + 1];
            } else {
                result = newWordArr[i];
            }
        }
        return result;
    }
};

let arr1 = [];
let arr2 = ["super", "cool", "cools", "coolss"];
let arr3 = ["super", "super cool"];

console.log(findLongestWord(arr1)); // ''
console.log(findLongestWord(arr2)); // 'cools'
console.log(findLongestWord(arr3)); // 'super' vì từ 'super cool' có chứa khoảng trắng và có độ dài lớn hơn 5 nên không tính
