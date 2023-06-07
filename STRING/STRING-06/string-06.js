/*
    Viết hàm getDisplayedAddress(address) để ghép chuỗi từ các thuộc tính của object address thành một
    chuỗi address hoàn chỉnh
    - Chuỗi trả về có dạng: "address.number address.street, address.ward, address.district, address.city"
    - Lưu ý object address không phải lúc nào cũng có đầy đủ các thông tin trên.

*/

const getDisplayedAddress = (addr) => {
    if (!addr || typeof addr !== "object" || Array.isArray(addr)) {
        return "Vui long nhap chinh xac!";
    } else {
        let address = "";

        if (addr.number) {
            address += `${addr.number} `;
        }

        if (addr.street) {
            address += `${addr.street}`;
        }

        if (addr.ward) {
            address += `, ${addr.ward}`;
        }

        if (addr.district) {
            address += `, ${addr.district}`;
        }

        if (addr.city) {
            address += `, ${addr.city}`;
        }

        return address;
    }
};

const obj1 = {
    number: 149,
    street: "Doc Lap",
    ward: "Tan Quy",
    district: "Tan Phu District",
    city: "HCMC",
};

const obj2 = {
    street: "Doc Lap",
    district: "Tan Phu District",
};

console.log(getDisplayedAddress(obj1)); // 149, Doc Lap, Tan Quy, Tan Phu District, HCMC

console.log(getDisplayedAddress(obj2)); // Doc Lap, Tan Phu District

console.log(getDisplayedAddress([])); // Nhap lai
