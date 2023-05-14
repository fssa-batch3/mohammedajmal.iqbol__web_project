//seller register page js code start


//seller form submit event function
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

    //seller register details get from his/her input
    let name = document.getElementById("name").value;
    let gender = document.getElementById("select").value;
    let mobile_number = document.getElementById("mobile-number").value;
    let date_of_birth = document.getElementById("date-of-birth").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirm_password = document.getElementById("confirm-password").value;
    let sellingCourses = sellingCourses_arr;
    let address = "Please Enter Your Address";
    let about_me = "Write About Yourself";
    let seller_id = Date.now();

    //check he/she is already exists or not
    let match = false;
    let matches = false;
    for (let i = 0; i < seller_register_arr.length; i++) {
      if (seller_register_arr[i]["email"] === email) {
        match = true;
      }  else if (seller_register_arr[i]["name"] === name) {
        matches = true;
      } else {
        match = false;
      }
    }

    if (match == true) {
      alert("user already exists");
    } else if (matches == true) {
      alert("UserName Already Exists Try With Different Name")
      return;
    } else {

      let mobilenumber = document.getElementById("mobile-number").value;

      if (password != confirm_password) {
        alert("password not match try again");
        //  window.location.href="sellerRegister.html";
      } else if (mobilenumber.length > 11) {
        alert("mobile number must contains 10 numbers");
        // location.reload();
      } else {
        let register_obj = {
          name,
          gender,
          mobile_number,
          date_of_birth,
          address,
          about_me,
          email,
          password,
          confirm_password,
          profile_pic: `https://ui-avatars.com/api/?name=${name}&background=random`,
          sellingCourses,
          seller_id,
        };

        //push obj into array
        seller_register_arr.push(register_obj);

        //set to local
        let register = JSON.stringify(seller_register_arr);
        localStorage.setItem("seller_register_arr", register);

        localStorage.setItem("seller_login_arr",JSON.stringify(email));
        

        //alerting the seller
        alert(
          "Please Verify Email \n You have to check the OTP One time Password Sent to You By Us and enter the recieved OTP to Verify Your Account"
        );
        //redirect he/she into next window
        window.location.href = "emailverifyseller.html?email=" + email;
      }
    }

    //catch statement
  } catch (error) {
    console.error("Error" + error);
  }
});

//seller register page js code end
