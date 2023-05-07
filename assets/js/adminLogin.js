

//admin login
let login = document.getElementById("form");
//login event listener
login.addEventListener("submit",event => {
event.preventDefault();

//arr parse from local
  let register_data = JSON.parse(localStorage.getItem("register_arr"));
 console.log(register_data);

 
 //check email and pass 
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  if(email == "" && password == "" ){
       alert("please fill the details");
  }

  let match = false;
  for(let i=0;i<register_data.length;i++){
   if( email == "ajmal@gmail.com" && password == "Ajmal@786" ){
      match = true;  

   } else {
     match = false;
   }
  };

  //if correct login success else unsuccess.
  if( match == true ){
    alert("Admin login successfully");
    window.location.href = "admindashboard.html";
  } else {
   alert("invalid Admin credentials");
  }

  

});
