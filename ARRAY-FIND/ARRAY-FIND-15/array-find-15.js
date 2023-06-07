/*
    Viết hàm findProductHavingFreeShip(productList) để tìm ra sản phẩm đầu tiên có free ship.
*/

const findProductHavingFreeShip = (productList) => {
    if (!Array.isArray(productList)) {
        return "Vui long nhap vao mang!";
    } else {
        let result = productList.find((product) => product.isFreeShip === true);
        return result;
    }
};

const productList = [
    { id: 1, name: "IPhone 5", isFreeShip: false },
    { id: 2, name: "IPhone X", isFreeShip: true },
    { id: 3, name: "IPhone 12 Pro", isFreeShip: true },
];
console.log(findProductHavingFreeShip(productList));
// { id: 2, name: 'IPhone X', isFreeShip: true }
