const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0dbd38fc8dmsh7004146a64a1761p17226ejsnceab381ff0ef',
		'X-RapidAPI-Host': 'share-market-news-api-india.p.rapidapi.com'
	}
};


  // //   fetch method api call for get top movers of the market
  
  const option = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '0dbd38fc8dmsh7004146a64a1761p17226ejsnceab381ff0ef',
      'X-RapidAPI-Host': 'ms-finance.p.rapidapi.com'
    }
  };



let x;
let y;  
Promise.all([
  fetch('https://share-market-news-api-india.p.rapidapi.com/marketNews', options ),
  fetch('https://ms-finance.p.rapidapi.com/market/v2/get-movers', option )
])
.then(responses => Promise.all(responses.map(res => res.json())))
.then(data => {
  const [data1, data2] = data;
  console.log('Data 1:', data1);
  console.log('Data 2:', data2.actives);

  x = data1;
  y = data2.actives;
  create(y)
 
          //news card create
          let newsCardDiv;

          for (let i = 0; i < 211; i++) {
            
            newsCardDiv = document.createElement("div");
            newsCardDiv.setAttribute("class","news1");
            newsCardDiv.innerHTML = ` <a class="newsanker" href="${x[i]["URL"]}"><h1 class="newsh1">${x[i]["Title"]}</h1></a>
               <p class="newsp">${x[i]["Source"]}</p>`;
            // console.log(newsCardDiv);
            
            document.querySelector(".newsflex").prepend(newsCardDiv);
          }
    
    
          let newsCardDivRight;
    
    for (let i = 211; i < 411; i++) {
      
        newsCardDivRight = document.createElement("div");
        newsCardDivRight.setAttribute("class","newsright");
        newsCardDivRight.innerHTML = ` <a class="newsanker" href="${x[i]["URL"]}"><h1 class="newsh1right">${x[i]["Title"]}</h1></a>
                <p class="newspright">${x[i]["Source"]}</p>`;
    //   console.log(newsCardDivRight);
      
      document.querySelector(".overflow-rightdiv").append(newsCardDivRight);
    }

    
   
  

})
.catch(error => {
  console.error('Error:', error);
});

// let x;
// fetch('https://share-market-news-api-india.p.rapidapi.com/marketNews', options)

// 	.then((response) =>  {
//         return response.json()
//     })

// 	.then((response) => {
//         x = response

//         console.log(x)
//         create(x)
//     })
// 	.catch(err => console.error(err));


//     function create(x) {

     


// };


    //search filter
    let searchbar = document.getElementById("searchbar");
    const cards = document.getElementsByClassName("news1");

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


       //search filter
       let searchbar1 = document.getElementById("searchbar");
       const cards2 = document.getElementsByClassName("newsright");
   
      searchbar1.addEventListener("input",() => {
       for(let i=0;i<cards2.length;i++){
           const element = cards2[i]
           if(element.innerHTML.toLowerCase().includes(searchbar1.value.toLowerCase())){
              element.style.display = "block";
           } else {
             element.style.display = "none";
           }
       }
      });



             //search filter
             let searchbar2 = document.getElementById("searchbar");
             const cards3 = document.getElementsByClassName("ticker1");
         
            searchbar2.addEventListener("input",() => {
             for(let i=0;i<cards3.length;i++){
                 const element = cards3[i]
                 if(element.innerHTML.toLowerCase().includes(searchbar2.value.toLowerCase())){
                    element.style.display = "block";
                 } else {
                   element.style.display = "none";
                 }
             }
            });


  let newsSubscribeCardDiv;
    
      newsSubscribeCardDiv = document.createElement("div");
      newsSubscribeCardDiv.setAttribute("class","card");
      newsSubscribeCardDiv.innerHTML = `  <span class="card__title">Subscribe</span>
      <p class="card__content">Get fresh News about Stocks, forex,cryptocurrencies, futures, etf, mutual<br> funds delivered straight to your inbox every week.
      </p>
      <div class="card__form">
          <input placeholder="Your Email" type="text">
          <button class="sign-up"> Sign up</button>
      </div>`;
  //   console.log(newsSubscribeCardDiv);
    
    document.querySelector(".newsflex").append(newsSubscribeCardDiv);





    let newsSubscribePosterDiv;
    
    newsSubscribePosterDiv = document.createElement("div");
    newsSubscribePosterDiv.setAttribute("class","newsposter");
    newsSubscribePosterDiv.innerHTML = `<img class="newsposter1" src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/newsletter-design-template-7836c0f976008aba998cc270452cca63_screen.jpg?ts=1637034455">
    <img class="newsposter2" src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/i-stand-with-ukraine-design-template-d4d9bad833303ba857a6acfaf8ee69c0.jpg?ts=1646981076">
    <video loop autoplay muted>
     <source src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/poster-design-template-8d3259f7169a88a2b8d634381aedb7b4.mp4?ts=1664725575" type="video/mp4">
    </video>
    
    <img class="newsposter2" src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/stock-market-crash-poster-template-design-e1fe630248e6869ff0ad8dcbcca43231.jpg?ts=1637005410">
    <img class="newsposter2" src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/investing-classes-advertising-template-design-58ba43efb86707b53afa23a50de8e5d4.jpg?ts=1617288139">
    <video loop autoplay muted>
     <source src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/business%2C-strategy%2C-investments-design-template-1a62dc2adf5955b500109f54d1295c7d.mp4?ts=1671713706" type="video/mp4">
    </video>
    <img class="newsposter2" src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/money-design-template-0a28dbd398831c38b15a59b240dd384a.jpg?ts=1637009658">
    <video loop autoplay muted>
     <source src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/poster-design-template-2e4889d227972afe1b5037896a196b34.mp4?ts=1648987307" type="video/mp4">
    </video>`;
//   console.log(newsSubscribePosterDiv);
  
  document.querySelector(".newsflex").append(newsSubscribePosterDiv);






  // let y;
  // fetch('https://ms-finance.p.rapidapi.com/market/v2/get-movers', option )
  // .then((response) =>  {
  //     return response.json()
  // })
  
  // .then((response) => {
  //     y = response.actives;
  
  //     console.log(y)
  //     create(y)
  // })
  // .catch(err => console.error(err));
  //     // fetch method api call for get top movers of the market end
  
  
  function create(y) {

  //ticker card create
  let tickerDiv; 

  for (let i = 0; i < 10; i++) {
   
   tickerDiv = document.createElement("div");
   tickerDiv.setAttribute("class","ticker1");
   tickerDiv.innerHTML = `<div class="ticker-name">
   <h3 class="ticker-name-h1">${y[i]["name"]}</h3>&emsp;
   <h3>${y[i]["ticker"]}</h3>
   <p class="price-p">${y[i]["lastPrice"]}</p>
   <p class="price-percent">${y[i]["netChange"]}</p>
   <p class="price-percent">${y[i]["exchange"]}</p>
</div>
<div class="ticker-value">
  <p>${y[i]["percentNetChange"]}</p>
  <p>${y[i]["volume"]}</p>
  <p>${y[i]["performanceID"]}</p>
</div>`;


 document.querySelector(".tab").append(tickerDiv);
   
  }

  }