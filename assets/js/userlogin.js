

//user login page js code start



let login = document.getElementById("form");
login.addEventListener("submit",event => {
event.preventDefault();

//try statement 
try {


  let register_data = JSON.parse(localStorage.getItem("register_arr"));
 console.log(register_data);

 
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  let match = false;
  for(let i=0;i<register_data.length;i++){
   if( email == register_data[i]["email"] && password == register_data[i]["password"]){
      match = true;  
      localStorage.setItem("login_arr",JSON.stringify(register_data[i]["email"]));
      break;

   } else {
     match = false;
   }
  };

  if( match == true ){
    alert("user login successfully");
    window.location.href = "userHome.html";
  } else {
   alert("invalid user credentials")
  }

  //catch statement
} catch (error) {

  console.log("Error" + error );

}

});



//user login page js code end 

