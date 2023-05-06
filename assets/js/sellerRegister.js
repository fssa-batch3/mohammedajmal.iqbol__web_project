//seller register page js code start

let form = document.getElementById("forms");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  //try statement
  try {
    let seller_register_arr = [];

    if (localStorage.getItem("seller_register_arr") !== null) {
      seller_register_arr = JSON.parse(
        localStorage.getItem("seller_register_arr")
      );
    }

    let sellingCourses_arr = [];

    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let gender = document.getElementById("select").value;
    let mobile_number = document.getElementById("mobile-number").value;
    let about_me = document.getElementById("about-me").value;
    let date_of_birth = document.getElementById("date-of-birth").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirm_password = document.getElementById("confirm-password").value;
    let sellingCourses = sellingCourses_arr;
    let seller_id = Date.now();

    console.log(name);
    console.log(age);
    console.log(gender);
    console.log(mobile_number);
    console.log(about_me);
    console.log(date_of_birth);
    console.log(email);
    console.log(password);
    console.log(confirm_password);
    console.log(sellingCourses);
    console.log(seller_id);

    let match = false;
    for (let i = 0; i < seller_register_arr.length; i++) {
      if (seller_register_arr[i]["email"] === email) {
        match = true;
      } else {
        match = false;
      }
    }

    if (match == true) {
      alert("user already exists");
    } else {
      let age = document.getElementById("age").value;
      console.log(age);

      let mobilenumber = document.getElementById("mobile-number").value;
      console.log(mobilenumber);

      if (password != confirm_password) {
        alert("password not match try again");
        //  window.location.href="sellerRegister.html";
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
          password,
          confirm_password,
          profile_pic: `https://ui-avatars.com/api/?name=${name}`,
          sellingCourses,
          seller_id,
        };

        seller_register_arr.push(register_obj);

        let register = JSON.stringify(seller_register_arr);
        localStorage.setItem("seller_register_arr", register);

        console.log(register);

        alert(
          "Please Verify Email \n You have to check the OTP One time Password Sent to You By Us and enter the recieved OTP to Verify Your Account"
        );
        window.location.href = "emailverifyseller.html?email=" + email;
      }
    }

    //catch statement
  } catch (error) {
    console.error("Error" + error);
  }
});

//seller register page js code end
