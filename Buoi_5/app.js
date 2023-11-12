
const mainTitle = document.getElementById("main-title");

console.log(mainTitle);

// Thay đôi style thông qua DOM
mainTitle.style.color = "green"

// Thay đôi nội dung của thẻ thông qua DOM
mainTitle.innerText = "JSA 30 - Todo List"


// Hàm trong JS: 
// VD Hàm xin chào
// Cú pháp: 
// function <tên_hàm>(){
//   Khối lệnh
// }

// Lưu ý: Muốn thực thi lệnh trong hàm thì phải gọi hàm


function sayHello() {
  alert("Hello")
}

sayHello() // Gọi hàm

