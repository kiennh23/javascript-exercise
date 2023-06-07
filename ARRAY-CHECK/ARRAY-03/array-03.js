/*
    Viết hàm hasEasyFrontend(wordList) để kiểm tra xem nội dung tất cả các từ có chứa easy và frontend không nhé
- Trả về true nếu:
- Một phần tử có chứa cả 2 từ: "easy" và "frontend"
- Một phần tử chứa từ "easy" và một phần tử khác chứa "frontend"
- Ngược lại trả về false.
*/

const hasEasyFrontend = (wordList) => {
    if (!Array.isArray(wordList)) {
        return "Vui long nhap chinh xac!";
    } else {
        let result = false;
        wordList.forEach((word) => {
            if (word.includes("easy frontend")) {
                result = true;
            }
        });
        return result;
    }
};

console.log(hasEasyFrontend(["easy", ""]));
console.log(hasEasyFrontend(["frontend", "easy"]));
console.log(hasEasyFrontend(["easy frontend", ""]));
