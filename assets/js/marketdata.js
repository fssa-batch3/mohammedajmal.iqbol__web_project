

//market data front page dashboard js code start


function renderclock() {
    document.getElementById("time-li").innerText = `Dashboard Time Is : ${ moment().format('MMMM Do YYYY, h:mm:ss a') }`;

    }

    renderclock();
    setInterval(renderclock,1000)

 //get parsed data
 const registerUsers = JSON.parse(localStorage.getItem("register_arr"));
 console.log(registerUsers);


  //get parsed data
  const registerSellers = JSON.parse(localStorage.getItem("seller_register_arr"));
 console.log(registerSellers);



    var xValues = ["Total Users","Total Sellers"];
var yValues = [registerUsers.length ,registerSellers.length];
var barColors = [
"#2b5797",

"#1e7145"
];

new Chart("myChart", {
type: "doughnut",
data: {
labels: xValues,
datasets: [{
backgroundColor: barColors,
data: yValues
}]
},
options: {
title: {
display: true,
text: "No of Users / Sellers In Our Website"
}
}
});




var xValues = ["New Users Joined Past Week","New Sellers Joined Past Week"];
var yValues = [registerUsers.length ,registerSellers.length];
var barColors = [
"#2b5797",

"#1e7145"
];

new Chart("myChart1", {
type: "doughnut",
data: {
labels: xValues,
datasets: [{
backgroundColor: barColors,
data: yValues
}]
},
options: {
title: {
display: true,
text: "No of New Users / Sellers In Our Website"
}
}
});




var xValues = ["New Users Joined Past Week","New Sellers Joined Past Week"];
var yValues = [registerUsers.length ,registerSellers.length];
var barColors = [
"#2b5797",

"#1e7145"
];

new Chart("myChart2", {
type: "doughnut",
data: {
labels: xValues,
datasets: [{
backgroundColor: barColors,
data: yValues
}]
},
options: {
title: {
display: true,
text: "Web traffic in this Month"
}
}
});






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



//api data
const options = {
method: 'GET',
headers: {
'X-RapidAPI-Key': '0dbd38fc8dmsh7004146a64a1761p17226ejsnceab381ff0ef',
'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com'
}
};

const optionmovers = {
method: 'GET',
headers: {
'X-RapidAPI-Key': '0dbd38fc8dmsh7004146a64a1761p17226ejsnceab381ff0ef',
'X-RapidAPI-Host': 'bravenewcoin.p.rapidapi.com'
}
};

const optionsss = {
method: 'GET',
headers: {
'X-RapidAPI-Key': '0dbd38fc8dmsh7004146a64a1761p17226ejsnceab381ff0ef',
'X-RapidAPI-Host': 'twelve-data1.p.rapidapi.com'
}
};

const optionsssss = {
method: 'GET',
headers: {
'X-RapidAPI-Key': '0dbd38fc8dmsh7004146a64a1761p17226ejsnceab381ff0ef',
'X-RapidAPI-Host': 'twelve-data1.p.rapidapi.com'
}
};






let x;
let y;  
let z;  
let a;  
let b;  
let c;  
let d; 
let e;  
let f;  
let g;  
let h;  
let i;  
let j;  
Promise.all([
fetch('https://alpha-vantage.p.rapidapi.com/query?interval=5min&function=TIME_SERIES_INTRADAY&symbol=MSFT&datatype=json&output_size=compact', options ),
fetch('https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=BTC&market=USD&apikey=XQJN6X4YXV76D14M' ),
fetch('https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=BTC&market=CNY&apikey=XQJN6X4YXV76D14M' ),
fetch('https://www.alphavantage.co/query?function=WTI&interval=monthly&apikey=XQJN6X4YXV76D14M'),
fetch('https://api.twelvedata.com/logo?symbol=AAPL&apikey=b078605a87aa49e1921e6797102c2271' ),
fetch('https://api.twelvedata.com/logo?symbol=FRSH&apikey=b078605a87aa49e1921e6797102c2271' ),
fetch('https://api.twelvedata.com/logo?symbol=AMZN&apikey=b078605a87aa49e1921e6797102c2271' ),
fetch('https://api.twelvedata.com/logo?symbol=TSLA&apikey=b078605a87aa49e1921e6797102c2271' ),
fetch('https://api.twelvedata.com/price?symbol=AAPL&apikey=b078605a87aa49e1921e6797102c2271' ),
fetch('https://api.twelvedata.com/price?symbol=FRSH&apikey=b078605a87aa49e1921e6797102c2271' ),
fetch('https://api.twelvedata.com/price?symbol=AMZN&apikey=b078605a87aa49e1921e6797102c2271' ),
fetch('https://api.twelvedata.com/price?symbol=TSLA&apikey=b078605a87aa49e1921e6797102c2271' )
])
.then(responses => Promise.all(responses.map(res => res.json())))
.then(data => {
const [data1, data2 ,data3 ,data4 ,data5 ,data6 ,data7, data8 ,data9 ,data10 ,data11 ,data12] = data;
console.log('Data 1:', data1["Time Series (5min)"]);
console.log('Data 2:', data2["Time Series (Digital Currency Daily)"]);
console.log('Data 3:', data3["Time Series (Digital Currency Daily)"]);
console.log('Data 4:', data4["data"]);
console.log('Data 5:', data5);
console.log('Data 6:', data6);
console.log('Data 7:', data7);
console.log('Data 8:', data8);
console.log('Data 9:', data9);
console.log('Data 10:', data10);
console.log('Data 11:', data11);
console.log('Data 12:', data12);

x = data1["Time Series (5min)"];
y = data2["Time Series (Digital Currency Daily)"];
z = data3['Time Series (Digital Currency Daily)'];
a = data4["data"];
b = data4;
c = data5;
d = data6;
e = data7;
f = data8;
g = data9;
h = data10;
i = data11;
j = data12;



// create(y)






const labels = Object.keys(x).reverse();
const prices = Object.values(x).map(item => parseFloat(item["4. close"])).reverse();
const ctx = document.getElementById('lineChart').getContext('2d');
new Chart(ctx, {
type: 'line',
data: {
  labels: labels,
  datasets: [{
    label: 'MSFT Stock Price',
    data: prices,
    backgroundColor: '#E9FCD4', // Customize chart appearance
    borderColor: 'rgba(75, 192, 192, 1)',
    borderWidth: 0
  }]
},
options: {
  responsive: true,
  scales: {
    x: {
      display: true,
      title: 'Time'
    },
    y: {
      display: true,
      title: 'Price'
    }
  }
}
});



//forex data api show

const label = Object.keys(y).reverse();
const datas = Object.values(y).map(item => parseFloat(item["4a. close (USD)"])).reverse();
console.log(label);
console.log(datas);

const ctx1 = document.getElementById('optionMoversChart').getContext('2d');
        new Chart(ctx1, {
            type: 'bar',
            data: {
                labels: label,
                datasets: [{
                    label: 'Volume Gainers BTC-USD',
                    data: datas,
                    backgroundColor: 'rgba(75, 192, 192, 0.2)', // Set desired background color
                    borderColor: 'rgba(75, 192, 192, 1)', // Set desired border color
                    borderWidth: 1 // Set desired border width
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });



//api data call cryptos
// const pricesss = data3['Time Series (Digital Currency Daily)'];
const labelsss = Object.keys(z).reverse(); // Get the dates and reverse the order for chronological display
const valuesss = Object.keys(z).map(date => parseFloat(date['4b. close (CNY)'])); // Get the closing prices as values

// const exchangeRate = data3['Realtime Currency Exchange Rate']['5. Exchange Rate'];


const ctx2 = document.getElementById('cryptoChart').getContext('2d');

// Create a chart using Chart.js

new Chart(ctx2, {
type: 'line', // Use 'line' for a line chart
data: {
    labels: labelsss,
    datasets: [{
        label: 'Bitcoin Price (CNY)',
        data: valuesss,
        backgroundColor: 'rgba(75, 192, 192, 0.2)', // You can customize the appearance of the chart
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        fill: true
    }]
},
options: {
    responsive: true,
    scales: {
        y: {
            beginAtZero: false
        }
    }
}
});








//crude oil api 


const crudelabels = [];
const crudevalues = [];
for (let i = 0; i < a.length; i++) {

crudelabels.push(a[i]["date"]);
crudevalues.push(a[i]["value"]);

}
console.log(crudelabels);
console.log(crudevalues);
// Get the dates and reverse the order for chronological display

const ctx3 = document.getElementById('crudeChart').getContext('2d');
new Chart(ctx3, {
type: 'line', // Use 'line' for a line chart
data: {
    labels: crudelabels.reverse(),
    datasets: [{
        label: 'WTI Crude Oil Price (USD)',
        data: crudevalues.reverse(),
        backgroundColor: 'rgba(75, 192, 192, 0.2)', // You can customize the appearance of the chart
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        fill: true
    }]
},
options: {
    responsive: true,
    scales: {
        y: {
            beginAtZero: false
        }
    }
}
});







//api call front card

let rowdiv = document.createElement("div");
rowdiv.setAttribute("class","notifications-container");
rowdiv.setAttribute("id","first-card");
rowdiv.innerHTML = `  <div class="logo-title">
                          <img class="ticker-logo" id="ticker-logo" src=${data5["url"]} alt="">
                          <h1 class="ticker-title" id="ticker-title">${data5["meta"]["symbol"]}</h1>
                        </div>
                        <div>
                          <h1 class="ticker-price">Price<br><span id="ticker-price"> $${data9["price"]}</span></h1>
                        </div>`;


document.querySelector("#row").append(rowdiv);


let rowdiv1 = document.createElement("div");
rowdiv1.setAttribute("class","notifications-container");
rowdiv1.setAttribute("id","second-card");
rowdiv1.innerHTML = `  <div class="logo-title">
                          <img class="ticker-logo" id="ticker-logo" src=${data6["url"]} alt="">
                          <h1 class="ticker-title" id="ticker-title">${data6["meta"]["symbol"]}</h1>
                        </div>
                        <div>
                          <h1 class="ticker-price">Price<br><span id="ticker-price"> $${data10["price"]}</span></h1>
                        </div>`;


document.querySelector("#row").append(rowdiv1);

let rowdiv2 = document.createElement("div");
rowdiv2.setAttribute("class","notifications-container");
rowdiv2.setAttribute("id","third-card");
rowdiv2.innerHTML = `  <div class="logo-title">
                          <img class="ticker-logo" id="ticker-logo" src=${data7["url"]} alt="">
                          <h1 class="ticker-title" id="ticker-title">${data7["meta"]["symbol"]}</h1>
                        </div>
                        <div>
                          <h1 class="ticker-price">Price<br><span id="ticker-price"> $${data11["price"]}</span></h1>
                        </div>`;


document.querySelector("#row").append(rowdiv2);

let rowdiv3 = document.createElement("div");
rowdiv3.setAttribute("class","notifications-container");
rowdiv3.setAttribute("id","last-card");
rowdiv3.innerHTML = `  <div class="logo-title">
                          <img class="ticker-logo" id="ticker-logo" src=${data8["url"]} alt="">
                          <h1 class="ticker-title" id="ticker-title">${data8["meta"]["symbol"]}</h1>
                        </div>
                        <div>
                          <h1 class="ticker-price">Price<br><span id="ticker-price"> $${data12["price"]}</span></h1>
                        </div>`;


document.querySelector("#row").append(rowdiv3);







})
.catch(error => {
console.error('Error:', error);
});




//market data front page dashboard js code end