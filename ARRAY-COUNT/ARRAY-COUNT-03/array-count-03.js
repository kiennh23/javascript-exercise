/*
    Viết hàm countWords(wordList, n) để đếm xem có bao nhiều từ có độ dài lớn hơn hoặc bằng n
*/

const countWords = (wordList, n) => {
    if (!Array.isArray(wordList) || isNaN(n)) {
        return "Vui long nhap chinh xac!";
    } else {
        let count = 0;
        wordList.forEach((word) => {
            let length = word.length;
            if (length >= n) {
                count++;
            }
        });
        return count;
    }
};

console.log(countWords(["easy", "frontend"], 4)); // 2
console.log(countWords(["easy", "frontend"], 5)); // 1
console.log(countWords(["easy", "frontend"], 10)); // 0
