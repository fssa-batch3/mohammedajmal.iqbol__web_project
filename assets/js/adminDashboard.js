//for clock running for second by second live
function renderclock() {
    document.getElementById("time-li").innerText = `Admin Dashboard Today Is : ${ moment().format('MMMM Do YYYY, h:mm:ss a') }`;

    }

    //one second run setinterval 1s = 1000
    renderclock();
    setInterval(renderclock,1000)

 //get parsed data
 const registerUsers = JSON.parse(localStorage.getItem("register_arr"));
 console.log(registerUsers);


  //get parsed data
  const registerSellers = JSON.parse(localStorage.getItem("seller_register_arr"));
 console.log(registerSellers);


//show total users and sellers in chart
    var xValues = ["Total Users","Total Sellers"];
var yValues = [registerUsers.length ,registerSellers.length];
var barColors = [
"#2b5797",

"#1e7145"
];

const myChart = new Chart("myChart", {
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



//show how many users and sellers joined past week
var xValues = ["New Users Joined Past Week","New Sellers Joined Past Week"];
var yValues = [registerUsers.length ,registerSellers.length];
var barColors = [
"#2b5797",

"#1e7145"
];

const myChart1 = new Chart("myChart1", {
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



//new and sellers users joined past week
var xValues = ["New Users Joined Past Week","New Sellers Joined Past Week"];
var yValues = [registerUsers.length ,registerSellers.length];
var barColors = [
"#2b5797",

"#1e7145"
];

const myChart2 = new Chart("myChart2", {
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