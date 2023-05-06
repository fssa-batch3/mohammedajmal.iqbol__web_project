//stock market data page js code start

//api data

//try statement

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "0dbd38fc8dmsh7004146a64a1761p17226ejsnceab381ff0ef",
      "X-RapidAPI-Host": "alpha-vantage.p.rapidapi.com",
    },
  };
  
  let newticker = document.getElementById("submit");
newticker.addEventListener("click",(event) => {
event.preventDefault();



try{
const data = getData();
return data;
} catch (err){
  console.error(err);
}

});


//stock market data page js code end



async function getData() {
  try{
   //try block
   let tickervalue = document.getElementById("search").value;
   console.log(tickervalue);

   let response = await fetch(`https://alpha-vantage.p.rapidapi.com/query?interval=5min&function=TIME_SERIES_INTRADAY&symbol=${tickervalue}&datatype=json&output_size=compact`,options)
   let data = await response.json()

   let x = data["Time Series (5min)"];

   const labels = Object.keys(x).reverse();
   const prices = Object.values(x)
     .map((item) => parseFloat(item["4. close"]))
     .reverse();
   const ctx = document.getElementById("myChart").getContext("2d");
   new Chart(ctx, {
     type: "line",
     data: {
       labels: labels,
       datasets: [
         {
           label: `${tickervalue} Stock Price`,
           data: prices,
           // backgroundColor: "#E9FCD4", // Customize chart appearance
           // borderColor: "rgba(75, 192, 192, 1)",
           backgroundColor: "rgba(78, 115, 223, 0.2)",
 borderColor: "rgba(78, 115, 223, 1)",
 pointBackgroundColor: "rgba(78, 115, 223, 1)",
 pointBorderColor: "#fff",
 pointHoverBackgroundColor: "#fff",
 pointHoverBorderColor: "rgba(78, 115, 223, 1)",
           borderWidth: 0,
         },
       ],
     },
     options: {
       responsive: true,
       scales: {
         x: {
           display: true,
           title: "Time",
         },
         y: {
           display: true,
           title: "Price",
         },
       },
     },
   });
 





  } catch(err) {
    //catch block when error occured
    console.error( "Error" + err);
  }

}
