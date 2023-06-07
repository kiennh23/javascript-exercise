/*
    Viết hàm calcCartTotal(cartItemList) để tính tổng tiền của giỏ hàng.
*/

const calcCartTotal = (cartItemList) => {
    if (!Array.isArray(cartItemList)) {
        return "Vui long nhap vao mang!";
    } else {
        let cost = 0;
        let itemLength = cartItemList.length;
        for (let i = 0; i < itemLength; i++) {
            let cartItem = cartItemList[i];
            let productObj = cartItem.product;
            cost += productObj.price * cartItem.quantity;
        }
        return cost;
    }
};

const cartItemList = [
    { id: 1, product: { id: 1, price: 50000 }, quantity: 1 },
    { id: 2, product: { id: 2, price: 100000 }, quantity: 2 },
];

console.log(calcCartTotal(cartItemList)); // 250000 = 50 x 1 + 100000 x 2
