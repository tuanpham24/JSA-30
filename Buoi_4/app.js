
/** Localstorage (local và global)
 * Là nơi lưu trữ dữ liệu cục bộ (Lưu trên trình duyệt của máy)
 * Lưu lượng: 5MB
 */

// Lưu dữ liệu vào localStorage: 
// Cú pháp: localStorage.setItem("<key>", value)
let name = "Phạm Anh Tuấn";
localStorage.setItem("name", name);

// Lấy dữ liệu trong localStorage ra ngoài: 
// Cú pháp: localStorage.getItem("<key>")
let nameInLS = localStorage.getItem("name");
console.log("Lấy tên từ LS ra: ", nameInLS);

const productList = [
  {
    id: 1,
    name: 'Nike AF1 07',
    description: 'Bestseller',
    price: 500
  },
  {
    id: 2,
    name: 'Nike Air Jordan 1 Mid',
    description: 'Trending 2023',
    price: 300
  },
  {
    id: 1,
    name: 'Nike Air Max 90 GORE-TEX',
    description: 'Trending 2023',
    price: 350
  },
  {
    id: 1,
    name: 'Nike Zion 3PF',
    description: 'Trending 2023',
    price: 700
  },
  {
    id: 1,
    name: 'Nike Full Force Low',
    description: 'Trending 2023',
    price: 1000
  },
]

// ______________________________
// ===> LƯU Ý: Dữ liệu ở trong Localstorage lưu ở dạng JSON.
// Do đó trước khi lưu dữ liệu vào LS, thì mình chuyển dối dữ liệu từ JS thành JSON
//    Cách chuyển dữ liệu từ JS thành JSON: JSON.stringify(<tên_biến>)
//    Cách chuyển dữ liệu từ JSON thành JS: JSON.parse(<tên_biến>)

// ______________________________


// Lưu mảng dữ liệu productList vào LS (product-list)
localStorage.setItem("product-list", JSON.stringify(productList));

// Lấy mảng dữ liệu productList ra JS (product-list)
let productListInLS = JSON.parse(localStorage.getItem("product-list"));

console.log("DS sản phẩm trong LS: ", productListInLS);
console.log("DS sản phẩm trong JS: ", productList);

// DOM 

let myInfo = {
  name: "Phạm Anh Tuấn",
  age: 25,
  email: "tuanpham24.it@gmail.com"
}

localStorage.setItem("my-info", JSON.stringify(myInfo));

let myInfoSaved = JSON.parse(localStorage.getItem("my-info"));

const nameHTML = document.getElementById("name"); // DOM
nameHTML.style.color = "red"
nameHTML.innerText = myInfoSaved.name;

