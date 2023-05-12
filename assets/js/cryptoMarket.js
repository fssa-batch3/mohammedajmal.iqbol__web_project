//crypto market page js code start

//headers and options i get from rapidapi
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5209d67708msh2b4c4487ee24df4p1a9455jsn60b60f48436e',
		'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
	}
};

//fetch api get response
  fetch(
    "https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0",
    options
  )
    .then((response) => response.json())
    .then((data) => {
      // Access the array of coins from the response object
      const coins = data.data.coins;

      // Extract the names of the coins using map()
      const coinNames = coins.map((coin) => coin);

      console.log(coinNames); // Array of coin names

      //card create
      for (let i = 0; i < 50; i++) {
        let rowdiv = document.createElement("a");
        rowdiv.setAttribute("id", "card");
        rowdiv.setAttribute("href", `${coinNames[i]["coinrankingUrl"]}`);
        rowdiv.setAttribute(
          "style",
          `background-color: ${coinNames[i]["color"]};`
        );
        const cardPrice = parseFloat(coinNames[i]["price"]).toFixed(6);
        rowdiv.innerHTML = `<label><img id="avatar" src=${coinNames[i]["iconUrl"]}></label>
  <label id="info">
    <span id="info-1">${coinNames[i]["name"]}</span>
    <span id="info-2">${coinNames[i]["symbol"]}</span>
  </label>
  <div id="content-1"> Coin Price :${cardPrice}</div>
  <div id="content-2"> Coin Rank :${coinNames[i]["rank"]}</div>`;

        document.querySelector("#rowdiv").append(rowdiv);
      }
    })
    //catch statement
    .catch((err) => console.error(err));



//crypto market page js code end
