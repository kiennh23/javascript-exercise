/*
    Viết hàm hasFreeShip(productList, price) để kiểm tra xem có product nào freeship và giá nhỏ hơn price không?

*/

function hasFreeShip(productList, price) {
    if (arguments.length < 2) {
        return "Vui long truyen vao 2 doi so!";
    } else {
        let result = false;
        if (!Array.isArray(productList)) {
            return "Vui long nhap chinh xac!";
        } else {
            productList.forEach((product) => {
                if (product.price <= price) {
                    result = true;
                }
            });
        }
        return result;
    }
}

const productList = [
    { id: 1, name: "Iphone 16", isFreeShip: false, price: 10200500 },
    { id: 2, name: "Iphone 16 Pro Max", isFreeShip: true, price: 1500000 },
];

console.log(hasFreeShip(productList, 10000000)); // true
