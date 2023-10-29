

// let myObject = {
//   name: "Tunn",
//   email: "tuanpham24@gmail.com"
// }

// for(var value of Object.values(myObject)){
//   console.log(value);
// }


let langs = [
  "Javascript", 
  "C++",
  "Java",
  "PHP",
  "Ruby",
  "C#",
  "Python",
  "Javascript"
];

let myInfo = {
  // key: value
  name: "Phạm Anh Tuấn",
  email: "123@gmail.com",
  phone: "0987654321"
}

// Vòng lặp for bình thường
for (let index = 0; index < langs.length; index ++) {
  console.log("vị trí thứ " + index + " là phần tử: " + langs[index]);
}

// ==> For-in
// - Đối với Array (mảng): Dùng để lấy ra chỉ số của các phần tử
// - Đối với object (đối tượng): Dùng để lấy ra thuộc tính của object
// Cú pháp: 
// for (let tên_biến in tên_mảng/tên_object) {
//   Khối lệnh
// }

// Đối với mảng
for (let chi_so in langs) {
  console.log("Chỉ số: ", chi_so);
}

// Đối với object
for (let thuoc_tinh in myInfo) {
  console.log("Thuộc tính: ", thuoc_tinh);
}

// For-of
// - Dùng với Array (mảng): Dùng để lấy ra giá tri của các phần tử
// Cú pháp: 
// for (let tên_biến of tên_mảng/tên_object) {
//   Khối lệnh
// }

// Đối với mảng
for (let gia_tri of langs) {
  console.log("Giá trị của array: ", gia_tri);
}

// Đối với object
console.log(Object.values(myInfo)); // => Trả về 1 mảng
for (let gia_tri of Object.values(myInfo)) {
  console.log("Giá trị của object: ", gia_tri);
}

