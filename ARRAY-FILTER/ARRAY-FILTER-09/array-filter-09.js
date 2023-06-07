/*
    Viết hàm findAllIphones(productList) để tìm ra tất cả các product có tên chứa chữ iphone (ko phân biệt hoa thường) và vẫn còn hàng trong kho (amount > 0)
*/

const findAllIphones = (productList) => {
    if (!Array.isArray(productList)) {
        return "Vui long nhap vao mang!";
    } else {
        let result = productList.filter(
            (product) =>
                product.amount > 0 &&
                product.name.toLowerCase().includes("iphone")
        );
        return result;
    }
};

const productList = [
    { id: 1, name: "Luxury IPhone X", amount: 1 },
    { id: 2, name: "Super Cool iphone 16 Pro", amount: 0 },
    { id: 3, name: "iphone 20 Pro", amount: 2 },
];

console.log(findAllIphones(productList));
// should return the following list:
// [
// { id: 1, name: 'Luxury IPhone X', amount: 1 },
// { id: 3, name: 'iphone 20 Pro', amount: 2 },
// ];
