/*
    Viết hàm findFirstEmail(strList) để tìm ra email hợp lệ đầu tiên có trong mảng strList
    - Ðiều kiện của một email hợp lệ:
    - Email là một chuỗi có chứa ký tự @ ở giữa và không phải ở cuối từ.
    - Email có thể có một số domain như: .com, .vn, .com.vn. Domain sẽ xuất hiện ở cuối từ.
    - Email có định dạng là X@Y. Trong đó X có độ dài ít nhất 3 ký tự, Y có độ dài ít nhất 3 ký tự (ko tính phần domain nêu trên)
    Trường hợp không tìm thấy email thoả yêu cầu thì trả về undefined.
*/

const findFirstEmail = (mailArray) => {
    if (!Array.isArray(mailArray)) {
        return "Vui long nhap vao mang!";
    } else {
        let mailArrLength = mailArray.length;
        for (let i = 0; i < mailArrLength; i++) {
            let mail = mailArray[i];
            if (
                (mail.includes("@") && mail.includes(".com")) ||
                mail.includes(".vn") ||
                mail.includes(".com.vn")
            ) {
                let index = mail.indexOf("@");
                let dotIndex = mail.indexOf(".");
                let domainLength = dotIndex - index;
                if (index >= 3 && domainLength >= 4) {
                    return mail;
                }
            }
        }
        return;
    }
};

let arr1 = ["abc@easy.frontend", "abc@gmail.com.vn", "abc@gmail.com"];
let arr2 = ["abc@easy.frontend"];

console.log(findFirstEmail(arr1)); // 'abc@gmail.com.vn'
console.log(findFirstEmail(arr2)); // undefined
