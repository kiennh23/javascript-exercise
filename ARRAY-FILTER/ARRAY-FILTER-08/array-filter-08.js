/*
    Viết hàm findAllProducts(productList) để tìm ra tất cả product có isFreeShip=true.

*/

const findAllProducts = (productList) => {
    if (!Array.isArray(productList)) {
        return "Vui long nhap vao mang!";
    } else {
        let result = productList.filter(
            (product) => product.isFreeShip === true
        );
        return result;
    }
};

const productList = [
    { id: 1, name: "iphone X", isFreeShip: true },
    { id: 2, name: "iphone 16 Pro", isFreeShip: true },
    { id: 3, name: "iphone 20 Pro", isFreeShip: false },
];

console.log(findAllProducts(productList));
// should return the following list:
// [
// { id: 1, name: 'iphone X', isFreeShip: true },
// { id: 2, name: 'iphone 16 Pro', isFreeShip: true },
// ]
