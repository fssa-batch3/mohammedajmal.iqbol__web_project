let login_array = JSON.parse(localStorage.getItem("login_arr"));
console.log(login_array);

if(login_array === null){
  window.location.href = "../pages/signin.html";
}
          

            //get arr from local
           const register_arr = JSON.parse(localStorage.getItem("register_arr"));
       
           const login_arr = JSON.parse(localStorage.getItem("login_arr"));
       
           const get_obj = register_arr.find( event => event.email === login_arr);
            
            //userprofile show
             let user_profile;
       
       
             user_profile = document.createElement("img");
             user_profile.setAttribute("id","user-profile");
             user_profile.setAttribute("class","dropbtn");
             user_profile.setAttribute("onclick","profile()");
             user_profile.setAttribute("src", get_obj["profile_pic"]);
             document.querySelector("#dropuser").prepend(user_profile);
          
          
       
           //  api call stock market search
       
       const urls = "https://api.twelvedata.com/exchanges";
       
       let y;
       fetch(urls)
       .then((response) => {
         return response.json();
       })
       .then((parsedData) => {
           y = parsedData.data;

          createtags(y)
       })
       
       .catch((err) => {
          console.error(err + "OOps Something went wrong..!!");
       });
       
       
       
            //card create
       function createtags(y) {
            for(let i=0;i<=500;i++){
              next_div = document.createElement("div");
            next_div.setAttribute("class","cardsforex");
            next_div.innerHTML = `
            <div class="cards-innerforex-div">
              <h1 class="heading-card">${y[i]["name"]}</h1>
              <p><b>Code : </b>&emsp;${y[i]["code"]}</p>
              <p><b>Country : </b>&emsp;${y[i]["country"]}</p>
              <p><b>Timezone :</b>&emsp;&emsp;${y[i]["timezone"]}</p>
              </div>
            `;
       
            document.getElementById("forex").append(next_div);
            }
          };
       
          //searchbar function
          let searchbar = document.getElementById("searchbar");
           const cards = document.getElementsByClassName("cardsforex");
       
          searchbar.addEventListener("input",() => {
           for(let i=0;i<cards.length;i++){
            const element = cards[i];
            if(element.innerHTML.toLowerCase().includes(searchbar.value.toLowerCase())){
                element.style.display = "block";
            } else {
             element.style.display = "none";
            }
           }
          });
       
       
    //google translate
       function googleTranslateElementInit() {
         const translateElement = new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
         return translateElement;
       }
       