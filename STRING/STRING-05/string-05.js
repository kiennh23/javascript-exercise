/*
    Viết hàm countURLs(str) để đếm số lượng URLs có trong câu.
    URL có định dạng: protocol://domain.com/path-name
    URL có thể bắt đầu bằng protocol như: http, https, ws hoặc wss
    Domain có thể là .com, .com.vn hoặc .vn
    Phần tên domain phải có ít nhất 3 ký tự, như abc.com, chứ ab.com là không hợp lệ
    Trả về số lượng URLs tìm thấy trong câu.
    Lưu ý: không sử dụng regular expression.

*/

const countURLs = (str) => {
    if (!str) {
        return "Vui long nhap chinh xac!";
    } else {
        let result = 0;
        let arrWords = str.trim().split(" ");
        arrWords.forEach((word) => {
            if (
                word.includes("http://") ||
                word.includes("https://") ||
                word.includes("ws://") ||
                word.includes("wss://")
            ) {
                let index = word.indexOf("://");
                word = word.slice(index + 3);
                let dotIndex = word.indexOf(".");
                if (dotIndex >= 3) {
                    result++;
                }
            }
        });
        return result;
    }
};

let str = "my website is: http://ezfrontend.com you can visit it";
let str1 = "my website is: wss://ez.com you can visit it";
console.log(countURLs(str)); // 1
console.log(countURLs(str1)); // 0
