
//user registration page js code start


let form = document.getElementById("form");
form.addEventListener("submit", event => {
  event.preventDefault();
 
  //try block starts when code is running properly
  try {


  let register_arr = [];

  if(localStorage.getItem("register_arr") !== null ){
      register_arr = JSON.parse(localStorage.getItem("register_arr"));
  }

  let courses_arr = [];

  let name = document.getElementById("name").value;
  let age = document.getElementById("age").value;
  // let profile_pic = document.getElementById("profile-pic").value;
  let gender = document.getElementById("gender").value;
  let mobile_number = document.getElementById("mobile-number").value;
  let about_me = document.getElementById("about-me").value;
  let date_of_birth = document.getElementById("date-of-birth").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let confirm_password = document.getElementById("confirm-password").value;
  let courses = courses_arr;
  let user_id = Date.now();





 let match = false;
 for(let i=0;i<register_arr.length;i++){
    if(register_arr[i]["email"] === email){
        match = true;
    } else {
          match = false;
    }
 }

 if(match == true ){
  alert("user already exists");
 } else {


  if( password != confirm_password ){
       alert("password not match try again");
       window.location.href="register.html";
       
  } else {

  let register_obj = {
    name,age,gender,mobile_number,about_me,date_of_birth,email,password,confirm_password,
    profile_pic : `https://ui-avatars.com/api/?name=${name}`,courses,user_id
  };

  register_arr.push(register_obj);


  let register = JSON.stringify(register_arr);
  localStorage.setItem("register_arr",register);


  console.log(register);

 alert("User Registration Successful");
 window.location.href = "signin.html";

 }


}

  //catch block starts when throws a error
} catch (error) {
  console.error("Error" + error);
}

}); 



//user registration page js code end

