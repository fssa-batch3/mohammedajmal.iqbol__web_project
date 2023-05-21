
//get arr from local
const register_arr = JSON.parse(localStorage.getItem("register_arr"));

const login_arr = JSON.parse(localStorage.getItem("login_arr"));


if(login_arr === null){
  window.location.href = "../pages/signin.html";
}

const get_obj = register_arr.find( event => event.email === login_arr);

//show user profile
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