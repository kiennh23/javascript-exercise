/*
    Viết hàm findFirstIPhone(productList) để tìm ra sản phẩm dòng IPhone đầu tiên
*/

const findFirstIPhone = (productList) => {
    if (!Array.isArray(productList)) {
        return "Vui long nhap vao mang!";
    } else {
        let productListLength = productList.length;
        for (let i = 0; i < productListLength; i++) {
            let mobile = productList[i].name;
            let isIphone = mobile.toLowerCase().includes("iphone");
            if (isIphone) {
                return mobile;
            }
        }
        return;
    }
};

const productList = [
    { id: 1, name: "Samsung" },
    { id: 2, name: "IPHONE X" },
    { id: 3, name: "iPhone 12 Pro" },
];
console.log(findFirstIPhone(productList));
// { id: 2, name: 'IPHONE X' }
