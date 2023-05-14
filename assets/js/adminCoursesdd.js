
       
const course_data = JSON.parse(localStorage.getItem("course_data")); 

const seller_register = JSON.parse(localStorage.getItem("seller_register_arr"));
//login array parse
const seller_login = JSON.parse(localStorage.getItem("seller_login_arr"));

//check user
const get_seller_obj = seller_register.find((event) => event.email === seller_login);

//find index of seller obj
let index = seller_register.indexOf(get_seller_obj);



   //create card for seller added courses he/she can see in his/her page. 
           let course_div_stocks;
           
    for(i=0;i<seller_register[index]["sellingCourses"].length;i++){
           course_div_stocks = document.createElement("a");
           course_div_stocks.setAttribute("class","first-course2-stocks");
           course_div_stocks.setAttribute("href","../pages/adminEdit.html?id=" + seller_register[index]["sellingCourses"][i]["obj"]["id"]);
//discount formula for cost courses else 100% free.
           let cost = "";
  let discount = "";

  if (seller_register[index]["sellingCourses"][i]["obj"]["cost"] === "learn for free") {
    cost += " ";
    discount += 100;
  } else {
    cost += "₹" + " ";
    discount +=
      100 - (seller_register[index]["sellingCourses"][i]["obj"]["cost"] / seller_register[index]["sellingCourses"][i]["obj"]["old_cost"]) * 100;
  }
           course_div_stocks.innerHTML = `<div>
                            <img class="course-img-stocks" src=${seller_register[index]["sellingCourses"][i]["obj"]["img"]} alt="">
                        </div>
                        <div>
                            <h3 class="course-title">${seller_register[index]["sellingCourses"][i]["obj"]["title"]}</h3>
                            <div class="course-details">
                                <p class="course-timing">${
                                         "<b>Dur :</b>" +
                                         seller_register[index]["sellingCourses"][i]["obj"]["timing"]
                                       }</p>
                                       <p class="course-ln">&nbsp;${
                                         "<b>Lang : </b>" +
                                         seller_register[index]["sellingCourses"][i]["obj"]["language"]
                                       }</p>
                                       <p class="course-enrolled">&nbsp${
                                         "<b>Enr :</b>" +
                                         seller_register[index]["sellingCourses"][i]["obj"]["enrolled"] +
                                         " " +
                                         "Enrolled"
                                       }</p>
                            </div>
                         <div class="flexcost">
                                    <h3 class="course-cost">${
                                      cost + " " + seller_register[index]["sellingCourses"][i]["obj"]["cost"]
                                    }</h3>
                                <strike class="course-oldcost" >${
                                  "₹" + " " + seller_register[index]["sellingCourses"][i]["obj"]["old_cost"]
                                }</strike>
                                <p class="course-discount" >${
                                  Math.floor(discount) + " " + "% discount"
                                }</p>
                                </div>
                        </div> `;
     
                document.querySelector(".scroll-courses-div-stocks").append(course_div_stocks);
    
            };


        
    //register array parse
const seller_register_arr = JSON.parse(localStorage.getItem("seller_register_arr"));

//login array parse
const seller_login_arr = JSON.parse(localStorage.getItem("seller_login_arr"));

//check user
const get_obj = seller_register_arr.find((event) => event.email === seller_login_arr);

//img tag create in js for seller profile
let seller_profile;

seller_profile = document.createElement("img");
seller_profile.setAttribute("id", "user-profile");
seller_profile.setAttribute("class", "dropbtn");
seller_profile.setAttribute("style", "border-radius:50%;");
seller_profile.setAttribute("onclick", "profile()");
seller_profile.setAttribute("src", get_obj["profile_pic"]);
document.querySelector("#dropuser").prepend(seller_profile);


//google translate element
function googleTranslateElementInit() {
  const translateElement = new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
  return translateElement;
}





//search query for search bar code start
let searchbar = document.getElementById("searchbar");
  const cards = document.getElementsByClassName("first-course2-stocks");
  searchbar.addEventListener("input", () => {
    for (let i = 0; i < cards.length; i++) {
      const element = cards[i];
      if (
        element.innerHTML.toLowerCase().includes(searchbar.value.toLowerCase())
      ) {
        element.style.display = "block";
      } else {
        element.style.display = "none";
      }
    }
  });


//logout function

let logout = document.getElementById("logout");
logout.addEventListener("click",(event) => {
event.preventDefault();

let confirmlogout = confirm("Are You Sure You Want to LogOut ?");

if(confirmlogout === true ){

localStorage.removeItem("seller_login_arr");

//new tab with back option in browser.
let newWindow = window.open("../index.html", '_blank', "noopener,noreferrer");
window.close();
newWindow.focus();

}

});
