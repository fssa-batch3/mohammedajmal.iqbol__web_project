//forex market page js code start

//api call new

const options = {
  //method GET 
  method: "GET",
  //headers from rapidAPI 
  headers: {
    "X-RapidAPI-Key": "0dbd38fc8dmsh7004146a64a1761p17226ejsnceab381ff0ef",
    "X-RapidAPI-Host": "currency-conversion-and-exchange-rates.p.rapidapi.com",
  },
};

//try statement
  let x;
  let y;
  //fetch method request
  fetch(
    "https://currency-conversion-and-exchange-rates.p.rapidapi.com/latest?from=USD&to=EUR%2CGBP",
    options
  )
     //.then rewsponse get from api
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

      x = response;

      y = response.rates;

      console.log(y);

      //card create from api call
      for (let i = 0; i < 150; i++) {
        let values = Object.keys(y)[i];

        let rowdiv = document.createElement("div");
        rowdiv.setAttribute("class", "notifications-container");
        rowdiv.setAttribute("id", "first-card");
        rowdiv.innerHTML = `  <div id="ticker-div">
                                  <p  id="ticker-title">Base Currency : ${x.base}</p>
                                  <p id="ticker-title2">Curreny to Convert :  ${values}</p>
                                  <p id="ticker-title3">Currency Pair : ${x.base}/${values}</p>
                                  <p id="ticker-price">Currency Price : ${y[values]}</p>
                                 </div>
                            
                                    
                                  
                                </div>`;

        document.querySelector("#rowcardsdiv").append(rowdiv);
      }
    })
    //catch statement
    .catch((err) => console.error(err));


//search query for search bar code start
let searchbar = document.getElementById("searchbar");
const cards = document.getElementsByClassName("notifications-container");
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

//forex market page js code end
