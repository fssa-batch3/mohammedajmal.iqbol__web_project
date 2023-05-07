
//email send to user for contact using API


let message = document.getElementById("message").value;
console.log(message);

//email send event function
let submit = document.getElementById("submit");
submit.addEventListener("submit", function (e) {
  e.preventDefault();


  let email = document.getElementById("email").value;
console.log(email); 



//required params to send email
let params = {from_name: "freekyajmal@gmail.com",
               to_name: email,
               message: `Hello ${email}This Is Your Message ${message}Thank You Conacting Us.`,}

               //email send event
emailjs.send("service_sp6m68x","template_uo2qcla",params)
.then((res) => {
  console.log(res);
  alert("We will contact You Soon");
}) 
.catch((err) =>{
  console.log(err);
})
      

});


//navbar responsive code
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

 
      const register_arr = JSON.parse(localStorage.getItem("register_arr"));
      console.log(register_arr);
  
      const login_arr = JSON.parse(localStorage.getItem("login_arr"));
      console.log(login_arr);
  
      //find user obj from two arr parsed from local
      const get_obj = register_arr.find( event => event.email === login_arr);
      console.log(get_obj);
       
  
      //user profile show
        let user_profile;
  
  
        user_profile = document.createElement("img");
        user_profile.setAttribute("id","user-profile");
        user_profile.setAttribute("src", get_obj["profile_pic"]);
        document.querySelector("#form").append(user_profile);
  
  
  //google translate
  function googleTranslateElementInit() {
    const translateElement = new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
    return translateElement;
  }
  