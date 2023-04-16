

//seller register page js code start


let form = document.getElementById("form");
form.addEventListener("submit", event => {
  event.preventDefault();

  //try statement
  try {

  let seller_register_arr = [];
  let sellingCourses_arr = [];

  if(localStorage.getItem("seller_register_arr") !== null ){
      seller_register_arr = JSON.parse(localStorage.getItem("seller_register_arr"));
  }

  let name = document.getElementById("name").value;
  let age = document.getElementById("age").value;
  let gender = document.getElementById("gender").value;
  let mobile_number = document.getElementById("mobile-number").value;
  let about_me = document.getElementById("about-me").value;
  let date_of_birth = document.getElementById("date-of-birth").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let confirm_password = document.getElementById("confirm-password").value;
  let sellingCourses = sellingCourses_arr;


 

 let match = false;
 for(let i=0;i<seller_register_arr.length;i++){
    if(seller_register_arr[i]["email"] === email){
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
       window.location.href="sellerRegister.html";
       
  } else {

  let register_obj = {
    name,age,gender,mobile_number,about_me,date_of_birth,email,password,confirm_password, profile_pic : `https://ui-avatars.com/api/?name=${name}`,sellingCourses
  };

  seller_register_arr.push(register_obj);


  let register = JSON.stringify(seller_register_arr);
  localStorage.setItem("seller_register_arr",register);


  console.log(register);

 alert("Seller Registration Successful");
 window.location.href = "../pages/sellerLogin.html";

 }


}

   //catch statement
}  catch (error) {

  console.log("Error" + error);

}
 



}); 


//seller register page js code end



//seller login page js code start


let login = document.getElementById("form");
login.addEventListener("submit",event => {
event.preventDefault();


  //try statement
  try {

  let seller_register_arr = JSON.parse(localStorage.getItem("seller_register_arr"));
 console.log(seller_register_arr);

 
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  if(email == "" && password == "" ){
       alert("please fill the details");
  }

  let match = false;
  for(let i=0;i<seller_register_arr.length;i++){
   if( email == seller_register_arr[i]["email"] && password == seller_register_arr[i]["password"]){
      match = true;  
      localStorage.setItem("seller_login_arr",JSON.stringify(seller_register_arr[i]["email"]));
      break;

   } else {
     match = false;
   }
  };

  if( match == true ){
    alert("seller login successfully");
    window.location.href = "../pages/adminCoursesAdd.html";
  } else {
   alert("invalid seller credentials");
  }


    //catch statement
}  catch (error) {

  console.log("Error" + error);

}
  

});


//seller login page js code end