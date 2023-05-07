//navbar responsive function
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

     //arr parsed from local
      const register_arr = JSON.parse(localStorage.getItem("register_arr"));
      console.log(register_arr);
  
      const login_arr = JSON.parse(localStorage.getItem("login_arr"));
      console.log(login_arr);
  
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