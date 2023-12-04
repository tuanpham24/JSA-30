// Get DOM by id
const fullNameInput = document.querySelector("#full-name");
const dateOfBirthInput = document.querySelector("#date-of-birth");
const emailInput = document.querySelector("#email");
const phoneInput = document.querySelector("#phone");
const passwordInput = document.querySelector("#password");
const passwordRepeatInput = document.querySelector("#password-repeat");
const signUpForm = document.querySelector("#sign-up-form");

// Lấy ra danh sách các account đã lưu trước đó
// Nếu user-list chưa có thì gán bằng mảng rỗng
let accountList = JSON.parse(localStorage.getItem("user-list")) || [];

// Khai báo hàm xử lý đăng ký
function handleSignUp(event) {

  // Ngăn việc load lại trang
  event.preventDefault()

  // Lấy các giá trị người dùng nhập vào từ ô input
  let fullName = fullNameInput.value;
  let dateOfBirth = dateOfBirthInput.value;
  let email = emailInput.value;
  let phone = phoneInput.value;
  let password = passwordInput.value;
  let passwordRepeat = passwordRepeatInput.value;

  // Kiểm tra xem đã điền đủ các trường thông tin hay chưa
  // Chỉ cần thiếu 1 trong các trường thì báo lỗi
  // ! => Ngược lại
  if(!fullName || !dateOfBirth || !email || !phone || !password || !passwordRepeat) {
    alert("Please fill all field!");

    // Khi lỗi thì dừng hàm, không chạy tiếp code bên dưới
    return;
  }

  // Gói các thuộc tính trên vào trong object accountData
  let accountData = {
    fullName,
    dateOfBirth,
    email,
    phone,
    password,
    passwordRepeat,
  };



  // Thêm account data vào account list
  accountList.push(accountData)

  // Sau kbi thêm xong thì lưu lại vào localstorage
  localStorage.setItem("user-list", JSON.stringify(accountList))
  
}

signUpForm.addEventListener("submit", function (event) {
  // Gọi hàm đăng ký
  handleSignUp(event)
})
