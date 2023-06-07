/*
    Viết hàm countEmails(str) để đếm số lượng email có trong str
    Email là một chuỗi có chứa ký tự @ ở giữa và không phải ở cuối từ.
    Email có thể có một số domain như: .com, .vn, .com.vn. Domain sẽ xuất hiện ở cuối từ.
    Email có định dạng là X@Y. Trong đó X có độ dài ít nhất 3 ký tự, Y có độ dài ít nhất 3 ký tự (ko tính
    phần domain nêu trên)
    Trả về số lượng email tìm thấy từ chuỗi truyền vào.
    Lưu ý: không sử dụng regular expression.

*/

const countEmails = (str) => {
    if (!str) {
        return "Vui long nhap chinh xac!";
    } else {
        let result = 0;
        let arrWords = str.trim().split(" ");
        arrWords.forEach((word) => {
            let index = word.indexOf("@");
            if (index >= 3) {
                word = word.slice(index + 1);
                let dotIndex = word.indexOf(".");
                if (dotIndex >= 3) {
                    result++;
                }
            }
        });
        return result;
    }
};

let str =
    "my email easy@frontend.com or easy@frontend.com.vn or easy@frontend.vn";
let str1 = "my email should be @ bla .com";
let str2 = "my email should be a@a.com";
let str3 = "my email should be abc@super.com";

console.log(countEmails(str)); // 3
console.log(countEmails(str1)); // 0
console.log(countEmails(str2)); // 0
console.log(countEmails(str3)); // 1
