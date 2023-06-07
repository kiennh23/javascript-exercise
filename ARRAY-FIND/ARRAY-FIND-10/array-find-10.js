/*
    Viết hàm findProductByCode(productList, code) để tìm ra vị trí product có mã sản phẩm bằng với code.
*/

function findProductByCode(productList, code) {
    if (arguments.length < 2 || !Array.isArray(productList)) {
        return "Vui long nhap chinh xac!";
    } else {
        let result = productList.findIndex((product) => {
            return product.code === code;
        });
        return result;
    }
}

const productList = [
    { id: 1, code: "ip01", name: "IPhone 16" },
    { id: 2, code: "ip02", name: "IPhone 16 Promax" },
];

console.log(findProductByCode(productList, "ip01")); // 0
console.log(findProductByCode(productList, "ip03")); // -1
