/*
    Viết hàm fillPath(path, params) để thay thế các chuỗi params trong path bằng các giá trị tương ứng trong object params.

*/

function fillPath(path, params) {
    if (
        arguments.length < 2 ||
        !params ||
        typeof params !== "object" ||
        Array.isArray(params) ||
        !path
    ) {
        return "Vui long nhap chinh xac!";
    } else {
        let result = "";
        Object.keys(params).forEach((key) => {
            result = path.replace(`${key}`, params[key]);
        });
        return result;
    }
}

let str1 = "/products/:productId";
let str2 = "/categories/:categoryId/products/:productId";
let str3 = "/categories/:categoryId/products/:productId";

const obj1 = { productId: 123 };
const obj2 = {
    categoryId: 1,
    productId: 2,
};
const obj3 = { productId: 2 };

console.log(fillPath(str1, obj1)); // '/products/123'

console.log(fillPath(str2, obj2)); // should return '/categories/1/products/2'

console.log(fillPath(str3, obj3)); // should return '/categories/:categoryId/products/2'
