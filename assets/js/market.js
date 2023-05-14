           //userprofile show


           const register_arr = JSON.parse(localStorage.getItem("register_arr"));
       
           const login_arr = JSON.parse(localStorage.getItem("login_arr"));
       
           const get_obj = register_arr.find( event => event.email === login_arr);
            
       //user profile
             let user_profile;
       
       
             user_profile = document.createElement("img");
             user_profile.setAttribute("id","user-profile");
             user_profile.setAttribute("class","dropbtn");
             user_profile.setAttribute("onclick","profile()");
             user_profile.setAttribute("src", get_obj["profile_pic"]);
             document.querySelector("#dropuser").prepend(user_profile);
          
       
             //api call for stocks
       
             const url = "https://www.alphavantage.co/query?function=MARKET_STATUS&apikey=XQJN6X4YXV76D14M";
        let x ;
        let parseD ;
        fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((parsedData) => {
       
            x = parsedData.markets;
       
           createtag(x)
       
       
       
        })
       
       .catch((err) => {
           console.error(err + "OOps Something went wrong..!!");
       });
       
       
       
             //card create
       function createtag(x) {
             for(let i=0;i<=20;i++){
               default_div = document.createElement("div");
             default_div.setAttribute("class","cards");
             default_div.innerHTML = `
             <div class="cards-inner-div">
               <h1>${x[i]["market_type"]}</h1>
               <p><b>Current_Status : </b>&emsp;${x[i]["current_status"]}</p>
               <p><b>Local_Close :</b>&emsp;&emsp;${x[i]["local_close"]}</p>
               <p><b>Local_Open :</b>&emsp;&emsp;${x[i]["local_open"]}</p>
               <p><b>Primary_Exchanges : </b>&emsp;${x[i]["primary_exchanges"]}</p>
               <p><b>Region : </b>&emsp;&emsp;${x[i]["region"]}</p>
               </div>
             `;
       
             document.querySelector("#default").append(default_div);
             }
           };
       
       
       
           //search filter
           let searchbar = document.getElementById("searchbar");
           const cards = document.getElementsByClassName("cards");
       
          searchbar.addEventListener("input",() => {
           for(let i=0;i<cards.length;i++){
               const element = cards[i]
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
       