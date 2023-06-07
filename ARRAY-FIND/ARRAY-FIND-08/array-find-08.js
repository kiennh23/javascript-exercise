/*
    Viết hàm findLastUrl(strList) để tìm ra URL cuối cùng có trong mảng strList
    - Ðiều kiện cho một URL hợp lệ:
    - URL có định dạng: protocol://domain.com/path-name
    - URL có thể bắt đầu bằng protocol như: http, https, ws hoặc wss
    - Domain có thể là .com, .com.vn hoặc .vn
    - Phần tên domain phải có ít nhất 3 ký tự, như abc.com, chứ ab.com là không hợp lệ
*/

const findFirstEmail = (urlArray) => {
    if (!Array.isArray(urlArray)) {
        return "Vui long nhap vao mang!";
    } else {
        let result;
        urlArray.forEach((url) => {
            if (
                url.includes("https://") ||
                url.includes("http://") ||
                url.includes("ws://") ||
                (url.includes("wss://") && url.includes(".com")) ||
                url.includes(".com.vn") ||
                url.includes(".vn")
            ) {
                let index = url.indexOf("://");
                let dotIndex = url.indexOf(".");
                if (dotIndex - index >= 4) {
                    result = url;
                }
            }
        });
        return result;
    }
};

let arr1 = ["https://google.com", "wss://chat.sample.com"];
let arr2 = [];

console.log(findFirstEmail(arr1)); // 'wss://chat.sample.com'
console.log(findFirstEmail(arr2)); // undefined
