
//email send to user for contact using API



//email send event function
let submit = document.getElementById("submit");
submit.addEventListener("submit", function (e) {
  e.preventDefault();
  
  let email = document.getElementById("email").value;
  
  let message = document.getElementById("message").value;

//required params to send email
let params = {from_name: "freekyajmal@gmail.com",
               to_name: email,
               message: `Hello ${email}This Is Your Message ${message}Thank You Conacting Us.`,}

               //email send event
emailjs.send("service_sp6m68x","template_uo2qcla",params)
.then((res) => {
  alert("We will contact You Soon");
}) 
.catch((err) =>{
  console.error(err);
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
  
      const login_arr = JSON.parse(localStorage.getItem("login_arr"));
  
      //find user obj from two arr parsed from local
      const get_obj = register_arr.find( event => event.email === login_arr);
       
  

      if(get_obj !== undefined) {


        let div;

        div = document.createElement("div");
        div.setAttribute("class","topnav");
        div.setAttribute("id","myTopnav");
        div.innerHTML = `

        <a href="../index.html" class="active"><img class="nav-logo" src="../assets/images/Screenshot 2023-02-11 021952.png"
            alt=""></a>
        <div class="navlinks">
          <a href="javascript:void(0);" style="font-size:15px;" class="icon" onclick="myFunction()">&#9776;</a>
          <a href="../pages/about.html" class="navlink">About</a>
          <a href="../pages/market.html" class="navlink">Market</a>
          <a href="../pages/live_trading.html" class="navlink">Trade</a>
          <a href="../pages/learn.html" class="navlink">Learn</a>
          <a href="../pages/userContact.html" class="navlink">Contact</a>
          <a class="notificationimg" href="#language"> <div id="google_translate_element" id="lang"></div></a>
          <a class="notificationimg" href="userContact.html"><img class="notificationimage" src="../assets/images/icons8-online-support-50.png" alt=""></a>
          <a id="form" class="user-profile" href="userprofile.html">
    
          </a>
        </div> `;
        
        document.querySelector("body").prepend(div);

              //user profile show
              let user_profile;
  
  
              user_profile = document.createElement("img");
              user_profile.setAttribute("id","user-profile");
              user_profile.setAttribute("src", get_obj["profile_pic"]);
              document.querySelector("#form").append(user_profile);

      } else {


        let div2;

        div2 = document.createElement("div");
        div2.setAttribute("class","topnav");
        div2.setAttribute("id","myTopnav");
        div2.innerHTML = `

        <a href="../index.html" class="active"><img class="nav-logo" src="../assets/images/Screenshot 2023-02-11 021952.png"
        alt=""></a>
    <div class="navlinks">
      <a href="javascript:void(0);" style="font-size:15px;" class="icon" onclick="myFunction()">&#9776;</a>
      <a href="../pages/about.html" class="navlink">About</a>
      <a href="../pages/market.html" class="navlink">Market</a>
      <a href="#" class="navlink">Trade</a>
      <a href="#" class="navlink">Learn</a>
      <a href="../pages/contact.html" class="navlink">Contact</a>
      <a class="login1" href="#contact">
        <div class="notification">
          <form action="../pages/user_personas.html"><button class="login" alt="">Log In</button></form>
        </div>
      </a>
      <a class="login2" href="#contact">
        <div class="notification">
          <form action="../pages/user_personas.html"><button class="registration" alt="">FREE TRIAL</button></form>
        </div>
      </a>
    </div> `;
        
        document.querySelector("body").prepend(div2);
      }

  
  
  //google translate
  function googleTranslateElementInit() {
    try{

    const translateElement = new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
    return translateElement;

    } catch (err) {
       console.error(err)
      }
      
  }
  