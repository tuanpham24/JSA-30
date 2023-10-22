// Biến
// Toán tử: *, -, *, /, %
//

// Biến: let, var, const

let name = "Vũ" // Khai báo  biến

name = "Quang Anh" // ghi đè giá trị của biến

console.log(name);


// Mảng: Là 1 biến có thể lưu nhiều giá trị cùng lúc
// Cú pháp khai báo 1 mảng: let/var/const <tên_mảng> = [<giá_trị_1>, <giá_trị_1>,...]

// vd Danh sách học viên của JSA-30
let studientList = ["Thịnh", "Vũ", "Dương", "Tiến", "Nhật", "Quang Anh"];

// Lưu ý: Các phần tử của mảng phải cùng một kiểu dữ liệu
// Chỉ số của mảng n phần tử bắt đầu từ 0, kết thúc là n-1

// Truy cập phần tử của mảng
console.log("Phần tử ở vị trí số 2 là: ", studientList[2] );

// Truy cập phần tử đầu tiên của mảng: 
console.log("Phần tử ở vị trí đầu tiên là: ", studientList[0] );

// Tính số phần tử của mảng:
console.log("Số phần tử của mảng: ", studientList.length );

// Truy cập phần tử cuối cùng của mảng: 
console.log("Phần tử ở vị trí đầu tiên là: ", studientList[studientList.length - 1] );

// Thêm 1 phần tử vào cuối mảng
studientList.push("Phạm Anh Tuấn");
for (let index = 0; index < studientList.length; index ++) {
  console.log(studientList[index]);
}

// Vòng lặp for
// Khái niệm: Thực hiện 1 đoạn code gì đó lặp lại nhiều lần (biết trước số lần lặp)
// Ứng dụng:
// Cú pháp:
  // for (let biến_đếm(điểm bắt đầu), điều_kiện_dừng(điểm kết thúc), bước_nhảy) {
  //    Khối lệnh
  // }

// Toán tử logic: >, <, >=, <=, == 
//  ==> Kết quả trả về là giá trị true hoặc false (boolean)

// VD: In ra các số từ 0 đến 50
// for (let i = 0; i <= 50; i++) {
//   console.log(i);
// }
// i ++ <=> i = i + 1

let n = 50
console.log("Check: ", n > 60);

// In ra các phần tử có trong mảng let studientList = ["Thịnh", "Vũ", "Dương", "Tiến", "Nhật", "Quang Anh"];
for (let index = 0; index < 6; index ++) {
  console.log(studientList[index]);
}
// -> Duyệt mảng:
// Lần lặp đầu tiên: index = 0 => studientList[0] => "Thịnh"
// Lần lặp thứ 2: index = 1 => studientList[1] => "Vũ"
// ...

// Vòng lặp while: Chỉ thực thi code bên trong khi điều kiện trả về true
// Cú pháp: 
  // while (điều_kiện) {
  //   Khối lệnh
  // }

// Vd:
while (18 >= 18) {
  // alert("Bạn đã đủ tuổi");
  break
}
// break => Dừng vòng lặp ngay lập tức
// Tìm hiểu thêm: do while()

// Kiểu dữ liệu Object - Đối tượng
// Cú pháp:
// let/var/const = {
//   tên_thuộc_tính_1: giá_trị,
//   tên_thuộc_tính_2: giá_trị,
//   ...
// }

// key - value 

// Tên: Trần Văn Tiến
// Tuổi: 15
// Địa chỉ: Ba Vì, Hà Nội
// Sdt: 0987654321

let studient1 = {
  name: "Trần Văn Tiến",
  age: 15,
  address: "Ba Vì, Hà Nội",
  phone: "0987654321"
}

// Lấy ra giá trị của các thuộc tính: name, age, address, phone
console.log("name của studient1 là: ", studient1.name);
console.log("age của studient1 là: ", studient1.age);
console.log("address của studient1 là: ", studient1.address);
console.log("phone của studient1 là: ", studient1.phone);


