
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

  let name = document.getElementById("name").value;
  console.log(name);

  let age = document.getElementById("age").value;
  console.log(age);

  let mobilenumber = document.getElementById("mobile-number").value;
  console.log(mobilenumber);




  if( password != confirm_password ){
       alert("password not match try again");
      //  window.location.href="register.html";


       
  }  else if(age.length > 3) {

    alert("age must contains less than three");
    // location.reload();

  }  else if(mobilenumber.length > 11) {

    alert("mobile number must contains 10 numbers");
    // location.reload();

  } else {




  let register_obj = {
    name,age,gender,mobile_number,about_me,date_of_birth,email,password,confirm_password,
    profile_pic : `https://ui-avatars.com/api/?name=${name}`,courses,user_id
  };

  register_arr.push(register_obj);


  let register = JSON.stringify(register_arr);
  localStorage.setItem("register_arr",register);


  console.log(register);

 alert("Please Verify Email \n You have to check the OTP One time Password Sent to You By Us and enter the recieved OTP to Verify Your Account");
 window.location.href = "emailverify.html?email=" + email;

 }


}

  //catch block starts when throws a error
} catch (error) {
  console.error("Error" + error);
}

}); 

let register_arr = [];

if(localStorage.getItem("register_arr") !== null ){
    register_arr = JSON.parse(localStorage.getItem("register_arr"));
}


console.log(register_arr);
async function postData(endpoint,data){

  return fetch(`https://freshstocks-ac7db-default-rtdb.firebaseio.com/${endpoint}.json/`,{
    method : "PUT",
    headers: {
      "Content-type": "application/json; charset=UTF-8"
  },
    body: JSON.stringify(data)
  })
  .then(data => {
    return data.json();
    })
  .then(data=>{
    console.log(data);
  })
}
async function getData(endpoint){

  return fetch(`https://freshstocks-ac7db-default-rtdb.firebaseio.com/${endpoint}.json/`)
  .then(data => {
    return data.json();
    })
  .then(data=>{
    return data;
  })
}

getData("Register")
.then(data =>{
  const datas = Object.values(data)
  console.log(datas);
})



//user registration page js code end

