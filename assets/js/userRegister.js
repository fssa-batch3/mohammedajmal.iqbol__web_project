
//password hash encryption
let password = document.getElementById("password");

let hashedpassword;
password.addEventListener("input", () => {

  console.log(password.value);

  // function encryptPassword(password) {
  let passwordval = document.getElementById("password").value;

  try {
    // Generate a random salt value
    const salt = CryptoJS.lib.WordArray.random(16);

    // Hash the password using SHA-256 with salt
    const hashedPassword = CryptoJS.SHA256(passwordval + salt);

    hashedpassword = salt.toString() + " " + hashedPassword.toString();

    console.log(salt.toString() + " " + hashedPassword.toString());

    // Return the salt and hashed password as a string
    return salt.toString() + " " + hashedPassword.toString();
  } catch (error) {
    console.error("Error encrypting password:", error);
    throw error;
  }
});

//confirm password encryption
let confirm_password = document.getElementById("confirm-password");

let hashedconfirm_password;
confirm_password.addEventListener("input", () => {

  // console.log(confirm_password.value);

  // function encryptPassword(password) {
  let confirm_password = document.getElementById("confirm-password").value;
  console.log(confirm_password);

  try {
    // Generate a random salt value
    const salt = CryptoJS.lib.WordArray.random(16);

    // Hash the password using SHA-256 with salt
    const hashedPassword = CryptoJS.SHA256(confirm_password + salt);

    hashedconfirm_password = salt.toString() + " " + hashedPassword.toString();

    console.log(salt.toString() + " " + hashedPassword.toString());

    // Return the salt and hashed password as a string
    return salt.toString() + " " + hashedPassword.toString();
  } catch (error) {
    console.error("Error encrypting password:", error);
    throw error;
  }
});

//user registration page js code start

let form = document.getElementById("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  //try block starts when code is running properly
  try {
    let register_arr = [];

    if (localStorage.getItem("register_arr") !== null) {
      register_arr = JSON.parse(localStorage.getItem("register_arr"));
    }

    let courses_arr = [];

    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    // let profile_pic = document.getElementById("profile-pic").value;
    let gender = document.getElementById("select").value;
    let mobile_number = document.getElementById("mobile-number").value;
    let about_me = document.getElementById("about-me").value;
    let date_of_birth = document.getElementById("date-of-birth").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirm_password = document.getElementById("confirm-password").value;
    let courses = courses_arr;
    let user_id = Date.now();

    let match = false;
    for (let i = 0; i < register_arr.length; i++) {
      if (register_arr[i]["email"] === email) {
        match = true;
      } else {
        match = false;
      }
    }

    if (match == true) {
      alert("user already exists");
    } else {
      let name = document.getElementById("name").value;
      console.log(name);

      let age = document.getElementById("age").value;
      console.log(age);

      let mobilenumber = document.getElementById("mobile-number").value;
      console.log(mobilenumber);

      if (password != confirm_password) {
        alert("password not match try again");
        //  window.location.href="register.html";
      } else if (age.length > 3) {
        alert("age must contains less than three");
        // location.reload();
      } else if (mobilenumber.length > 11) {
        alert("mobile number must contains 10 numbers");
        // location.reload();
      } else {
        let register_obj = {
          name,
          age,
          gender,
          mobile_number,
          about_me,
          date_of_birth,
          email,
          password : hashedpassword,
          confirm_password : hashedconfirm_password,
          profile_pic: `https://ui-avatars.com/api/?name=${name}`,
          courses,
          user_id,
        };

        register_arr.push(register_obj);

        let register = JSON.stringify(register_arr);
        localStorage.setItem("register_arr", register);

        console.log(register);

        alert(
          "Please Verify Email \n You have to check the OTP One time Password Sent to You By Us and enter the recieved OTP to Verify Your Account"
        );
        window.location.href = "emailverify.html?email=" + email;
      }
    }

    //catch block starts when throws a error
  } catch (error) {
    console.error("Error" + error);
  }
});
