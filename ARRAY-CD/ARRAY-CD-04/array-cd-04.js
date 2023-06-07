/*
    Viết hàm insert(numberList, newNumber) để chèn newNumber vào mảng numberList sao cho mảng kết quả vẫn là tăng dần.
*/

const insert = (numberList, newNumber) => {
    if (!Array.isArray(numberList) || isNaN(newNumber)) {
        return "Vui long nhap chinh xac!";
    } else {
        numberList.push(newNumber);
        numberList.sort((a, b) => a - b);
        return numberList;

        // let numberListLength = numberList.length;
        // let index;
        // if (numberListLength < 1) {
        //     numberList.push(newNumber);
        //     return numberList;
        // }
        // for (let i = 0; i < numberListLength; i++) {
        //     let number = numberList[i];
        //     if (number >= newNumber) {
        //         index = i;
        //         break;
        //     }
        // }
        // numberList.splice(index, 0, newNumber);
        // return numberList;
    }
};

console.log(insert([], 3)); // [3]
console.log(insert([1, 2, 4, 5, 6], 3)); // [1, 2, 3, 4, 5, 6]
console.log(insert([1, 2, 3, 5, 6], 3)); // [1, 2, 3, 3, 5, 6]
