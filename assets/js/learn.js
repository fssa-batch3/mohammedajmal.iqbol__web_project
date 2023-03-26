//js tabs code start
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace("active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";

  document.getElementById("default").style.display = "none";
}

//return to home tabs function
function homeon() {
  document.getElementById("default").style.display = "block";
  document.getElementById("my-courses").style.display = "none";
  document.getElementById("blogs").style.display = "none";
  document.getElementById("latest-courses").style.display = "none";
  document.getElementById("youtube-videos").style.display = "none";
  document.getElementById("free-courses").style.display = "none";
  document.getElementById("live-courses").style.display = "none";
}

//blogs data JSON
const blogs_data = [
  {
    img: "https://tradeciety.com/hubfs/Imported_Blog_Media/947cUtXZwI-HD.jpeg",
    blog_title: "How Professional Traders use..",
    blog_timing: "5 Min Read",
    blog_language: "English",
    blog_hashtag: " #finance #forex",
    blog_cost: "Read for FREE",
  },
  {
    img: "https://tradeciety.com/hubfs/Folie13.png",
    blog_title: "6 Forex Price Action Trading..",
    blog_timing: "5 Min Read",
    blog_language: "English",
    blog_hashtag: " #finance #forex",
    blog_cost: "Read for FREE",
  },
  {
    img: "https://tradeciety.com/hubfs/cuphandle%20%282%29.png",
    blog_title: "Learn How To Use The Stocha..",
    blog_timing: "5 Min Read",
    blog_language: "English",
    blog_hashtag: " #finance #money",
    blog_cost: "Read for FREE",
  },
  {
    img: "https://tradeciety.com/hubfs/Imported_Blog_Media/Stoch_MA-1.png",
    blog_title: "3 Great Reversal Strategies..",
    blog_timing: "5 Min Read",
    blog_language: "English",
    blog_hashtag: " #money #Indicator",
    blog_cost: "Read for FREE",
  },
  {
    img: "https://tradeciety.com/hubfs/XAUUSD_2023-01-11_11-36-40.png",
    blog_title: "8 must know PRICE ACTION..",
    blog_timing: "5 Min Read",
    blog_language: "English",
    blog_hashtag: " #finance #money",
    blog_cost: "Read for FREE",
  },
  {
    img: "https://tradeciety.com/hubfs/Imported_Blog_Media/OvBP_gJnU9E-HD-1.jpeg",
    blog_title: "Start Trading like a Pro with..",
    blog_timing: "5 Min Read",
    blog_language: "English",
    blog_hashtag: "#PriceAction",
    blog_cost: "Read for FREE",
  },
  {
    img: "https://tradeciety.com/hubfs/Imported_Blog_Media/aDih3RZkt9I-HD-1.jpeg",
    blog_title: "How to Trade STRONG Trends..",
    blog_timing: "5 Min Read",
    blog_language: "English",
    blog_hashtag: " #finance #money",
    blog_cost: "Read for FREE",
  },
  {
    img: "https://tradeciety.com/hubfs/Imported_Blog_Media/OY-RwsKwm2o-HD.jpeg",
    blog_title: "Ultimate free Price Action..",
    blog_timing: "5 Min Read",
    blog_language: "English",
    blog_hashtag: " #finance #money",
    blog_cost: "Read for FREE",
  },
  {
    img: "https://tradeciety.com/hubfs/Imported_Blog_Media/JDpYMDGawMI-HD.jpeg",
    blog_title: "Chart Pattern Trading – Full..",
    blog_timing: "5 Min Read",
    blog_language: "English",
    blog_hashtag: " #finance #money",
    blog_cost: "Read for FREE",
  },
  {
    img: "https://tradeciety.com/hubfs/Imported_Blog_Media/Ethcv9JS4Zs-HD.jpeg",
    blog_title: "9 best Day Trading tips to use..",
    blog_timing: "5 Min Read",
    blog_language: "English",
    blog_hashtag: " #finance #money",
    blog_cost: "Read for FREE",
  },
];

//blogs data card create
let course_div4;
for (i = 0; i < blogs_data.length; i++) {
  course_div4 = document.createElement("div");
  course_div4.setAttribute("class", "first-course3");
  course_div4.setAttribute(
    "href",
    "details.html?name=" + blogs_data[i]["blog_title"]
  );
  course_div4.innerHTML = `<div>
                       <img class="course-img" src=${blogs_data[i]["img"]} alt="">
                   </div>
                   <div>
                       <h3 class="course-title">${blogs_data[i]["blog_title"]}</h3>
                       <div class="course-details">
                           <p class="course-timing">${blogs_data[i]["blog_timing"]}</p>
                           <p class="course-ln">${blogs_data[i]["blog_language"]}</p>
                           <p class="course-enrolled">${blogs_data[i]["blog_hashtag"]}</p>
                       </div>
                    <h3 class="course-cost">${blogs_data[i]["blog_cost"]}</h3>
                   </div> `;
  //  console.log(course_div4);

  document.querySelector(".scroll-courses-div4").append(course_div4);

  //search query for search bar code start

  let searchbar = document.getElementById("searchbar");
  const cards = document.getElementsByClassName("first-course3");

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
}

//search query for search bar code end

// All courses card create

const course_data = JSON.parse(localStorage.getItem("course_data"));

let course_div_stocks;

for (i = 0; i < course_data.length; i++) {
  course_div_stocks = document.createElement("div");
  course_div_stocks.setAttribute("class", "first-course2-stocks");
  // course_div_stocks.setAttribute("href","details.html?name=" + course_data[i]["title"]);
  let cost = "";
  let discount = "";

  if (course_data[i]["cost"] === "learn for free") {
    cost += " ";
    discount += 100;
  } else {
    cost += "₹" + " ";
    discount +=
      100 - (course_data[i]["cost"] / course_data[i]["old_cost"]) * 100;
  }
  course_div_stocks.innerHTML = `
                  <img class="bookmark-icon" id="bookmark-icon" onclick="toggle(${
                    course_data[i]["id"]
                  })" src="../assets/images/icons8-add-bookmark-50.png" alt="">
                  <div>
                                   <img class="course-img-stocks" src=${
                                     course_data[i]["img"]
                                   } alt="">
                               </div>
                               <a class="card-a" href="details.html?name=${
                                 course_data[i]["title"]
                               }">
                                   <h3 class="course-title">${
                                     course_data[i]["title"]
                                   }</h3>
                                   <div class="course-details">
                                       <p class="course-timing">${
                                         "<b>Dur :</b>" +
                                         course_data[i]["timing"]
                                       }</p>
                                       <p class="course-ln">&emsp;${
                                         "<b>Lang : </b>" +
                                         course_data[i]["language"]
                                       }</p>
                                       <p class="course-enrolled">&emsp;${
                                         "<b>Enr :</b>" +
                                         course_data[i]["enrolled"] +
                                         " " +
                                         "Enrolled"
                                       }</p>
                                   </div>
                                   <div class="flexcost">
                                    <h3 class="course-cost">${
                                      cost + " " + course_data[i]["cost"]
                                    }</h3>
                                <strike class="course-oldcost" >${
                                  "₹" + " " + course_data[i]["old_cost"]
                                }</strike>
                                <p class="course-discount" >${
                                  Math.floor(discount) + " " + "% discount"
                                }</p>
                                </div>
                               </div> `;
  console.log(course_div_stocks);

  document
    .querySelector(".scroll-courses-div-stocks")
    .append(course_div_stocks);
}

//bookmark icon toggle button function

function toggle(id) {
  let get_click_obj;

  //find clicked course
  get_click_obj = course_data.find((e) => e.id === id);

  //adding key bookmark = true
  get_click_obj.bookmark = true;

  console.log(get_click_obj);

  if (localStorage.getItem("bookmarks") != null) {
    //arrary already exist
    get_click_obj_arr = JSON.parse(localStorage.getItem("bookmarks"));

    //bookmark local parse array
    const bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
    console.log(bookmarks);

    //check for duplicates
    const already_exist_obj = bookmarks.find((e) => e.id === get_click_obj.id);
    console.log(already_exist_obj);

    if (already_exist_obj == undefined) {
      get_click_obj.bookmark = true;
      get_click_obj_arr.push(get_click_obj);
      localStorage.setItem("bookmarks", JSON.stringify(get_click_obj_arr));
      alert("course Added to Bookmarks");
      window.location.href = "learn.html";
    } else {
      alert("course Already Bookmarked");
      window.location.href = "learn.html";
    }
  } else {
    //create bookmark array
    let get_click_obj_arr = [];

    get_click_obj.bookmark = true;
    get_click_obj_arr.push(get_click_obj);

    localStorage.setItem("bookmarks", JSON.stringify(get_click_obj_arr));
    alert("course Added to Bookmarks");
    window.location.href = "learn.html";
  }
}

//bookmark course function end

//array JSON parse bookmarks
const bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
console.log(bookmarks);

// x global variable
let x;
for (let i = 0; i < bookmarks.length; i++) {
  if (bookmarks[i]["bookmark"] === true) {
    x = bookmarks[i];
    document.getElementById("bookmark-icon").src =
      "../assets/images/icons8-add-bookmark-50 (1).png";
    //if true bookmark added toggle
  }
}
console.log(x);

//bookamrk card create from JSON object
let bookmark_div;
for (i = 0; i < bookmarks.length; i++) {
  bookmark_div = document.createElement("a");
  bookmark_div.setAttribute("class", "first-course2-stocks");
  bookmark_div.setAttribute(
    "href",
    "details.html?name=" + bookmarks[i]["title"]
  );
  let cost = "";
  let discount = "";

  if (bookmarks[i]["cost"] === "learn for free") {
    cost += " ";
    discount += 100;
  } else {
    cost += "₹" + " ";
    discount += 100 - (bookmarks[i]["cost"] / bookmarks[i]["old_cost"]) * 100;
  }
  bookmark_div.innerHTML = `<div>
                                  <img class="course-img-stocks" src=${
                                    bookmarks[i]["img"]
                                  } alt="">
                              </div>
                              <div>
                                  <h3 class="course-title">${
                                    bookmarks[i]["title"]
                                  }</h3>
                                  <div class="course-details">
                                      <p class="course-timing">${
                                        "<b>Dur :</b>" + bookmarks[i]["timing"]
                                      }</p>
                                      <p class="course-ln">&emsp;${
                                        "<b>Lang : </b>" +
                                        bookmarks[i]["language"]
                                      }</p>
                                      <p class="course-enrolled">&emsp;${
                                        "<b>Enr :</b>" +
                                        bookmarks[i]["enrolled"] +
                                        " " +
                                        "Enrolled"
                                      }</p>
                                  </div>
                               <div class="flexcost">
                               <h3 class="course-cost">${
                                 " " + bookmarks[i]["cost"]
                               }</h3>
                               <strike class="course-oldcost" >${
                                 "₹" + " " + bookmarks[i]["old_cost"]
                               }</strike>
                               <p class="course-discount" >${
                                 Math.floor(discount) + " " + "% discount"
                               }</p>
                               </div>
                              </div> `;
  console.log(bookmark_div);

  document.querySelector(".scroll-bookmarks-div4").append(bookmark_div);
}

//bookamrk card create from JSON object end

//search query for all courses start
//search query

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

//search query for all courses end

// user profile show from user register-login

//register array parse
const register_arr = JSON.parse(localStorage.getItem("register_arr"));
console.log(register_arr);

//login array parse
const login_arr = JSON.parse(localStorage.getItem("login_arr"));
console.log(login_arr);

//check user
const get_obj = register_arr.find((event) => event.email === login_arr);
console.log(get_obj);

//img tag create in js
let user_profile;

user_profile = document.createElement("img");
user_profile.setAttribute("id", "user-profile");
user_profile.setAttribute("class", "dropbtn");
user_profile.setAttribute("onclick", "profile()");
user_profile.setAttribute("src", get_obj["profile_pic"]);
document.querySelector("#dropuser").prepend(user_profile);

// search filter start free courses

//all courses JSON data parse
const course_data_arr = JSON.parse(localStorage.getItem("course_data"));

//create object
let obj = {
  cost: "learn for free",
};

//compare object get match objects
const filtervalues = course_data_arr.filter(
  (course) => course.cost === obj.cost
);
console.log(filtervalues);

// free courses card create
let course_div_freecourses;

for (i = 0; i < filtervalues.length; i++) {
  course_div_freecourses = document.createElement("a");
  course_div_freecourses.setAttribute("class", "first-course2-stocks");
  course_div_freecourses.setAttribute(
    "href",
    "details.html?name=" + filtervalues[i]["title"]
  );
  let discount = 100;
  course_div_freecourses.innerHTML = `<div>
                                 <img class="course-img-stocks" src=${
                                   filtervalues[i]["img"]
                                 } alt="">
                             </div>
                             <div>
                                 <h3 class="course-title">${
                                   filtervalues[i]["title"]
                                 }</h3>
                                 <div class="course-details">
                                     <p class="course-timing">${
                                       "<b>Dur :</b>" +
                                       filtervalues[i]["timing"]
                                     }</p>
                                     <p class="course-ln">&emsp;${
                                       "<b>Lang : </b>" +
                                       filtervalues[i]["language"]
                                     }</p>
                                     <p class="course-enrolled">&emsp;${
                                       "<b>Enr :</b>" +
                                       filtervalues[i]["enrolled"] +
                                       " " +
                                       "Enrolled"
                                     }</p>
                                 </div>
                              <div class="flexcost">
                              <h3 class="course-cost">${
                                " " + filtervalues[i]["cost"]
                              }</h3>
                              <strike class="course-oldcost" >${
                                "₹" + " " + filtervalues[i]["old_cost"]
                              }</strike>
                              <p class="course-discount" >${
                                discount + " " + "% discount"
                              }</p>
                              </div>
                             </div> `;
  //  console.log(course_div_freecourses);

  document.querySelector(".scroll-courses-div").append(course_div_freecourses);
}

// search filter end free courses

//free courses card create end

// search filter start live courses

//create object
let live_obj = {
  timing: "live",
};

//compare object
const filtervalue = course_data_arr.filter(
  (course) => course.timing === live_obj.timing
);
console.log(filtervalue);

//create card live courses
let course_div_livecourses;

for (i = 0; i < filtervalue.length; i++) {
  course_div_livecourses = document.createElement("a");
  course_div_livecourses.setAttribute("class", "first-course2-stocks");
  course_div_livecourses.setAttribute(
    "href",
    "details.html?name=" + filtervalue[i]["title"]
  );
  let cost = "";
  let discount = "";

  if (filtervalue[i]["cost"] === "learn for free") {
    cost += " ";
    discount += 100;
  } else {
    cost += "₹" + " ";
    discount +=
      100 - (course_data[i]["cost"] / course_data[i]["old_cost"]) * 100;
  }
  course_div_livecourses.innerHTML = `<div>
                                   <img class="course-img-stocks" src=${
                                     filtervalue[i]["img"]
                                   } alt="">
                               </div>
                               <div>
                                   <h3 class="course-title">${
                                     filtervalue[i]["title"]
                                   }</h3>
                                   <div class="course-details">
                                         <p class="course-timing">${
                                           "<b>Dur :</b>" +
                                           filtervalue[i]["timing"]
                                         }</p>
                                         <p class="course-ln">&emsp;${
                                           "<b>Lang : </b>" +
                                           filtervalue[i]["language"]
                                         }</p>
                                         <p class="course-enrolled">&emsp;${
                                           "<b>Enr :</b>" +
                                           filtervalue[i]["enrolled"] +
                                           " " +
                                           "Enrolled"
                                         }</p>
                                     </div>
                                   <div class="flexcost">
                                  <h3 class="course-cost">${
                                    cost + " " + filtervalue[i]["cost"]
                                  }</h3>
                                  <strike class="course-oldcost" >${
                                    "₹" + " " + filtervalue[i]["old_cost"]
                                  }</strike>
                                  <p class="course-discount" >${
                                    discount + " " + "% discount"
                                  }</p>
                                  </div>
                               </div> `;
  //  console.log(course_div_stocks);

  document
    .querySelector(".scroll-courses-div-videos")
    .append(course_div_livecourses);
}

//search filter end live courses

//search filter start latest courses

//card create latest courses from last four uploaded for loop
let course_div_latestcourses;

for (i = course_data_arr.length - 1; i < course_data_arr.length; i++) {
  course_div_latestcourses = document.createElement("a");
  course_div_latestcourses.setAttribute("class", "first-course2-stocks");
  course_div_latestcourses.setAttribute(
    "href",
    "details.html?name=" + course_data_arr[i]["title"]
  );
  let cost = "";
  let discount = "";

  if (course_data_arr[i]["cost"] === "learn for free") {
    cost += " ";
    discount += 100;
  } else {
    cost += "₹" + " ";
    discount +=
      100 - (course_data[i]["cost"] / course_data[i]["old_cost"]) * 100;
  }
  course_div_latestcourses.innerHTML = `<div>
                                 <img class="course-img-stocks" src=${
                                   course_data_arr[i]["img"]
                                 } alt="">
                             </div>
                             <div>
                                 <h3 class="course-title">${
                                   course_data_arr[i]["title"]
                                 }</h3>
                                 <div class="course-details">
                                       <p class="course-timing">${
                                         "<b>Dur :</b>" +
                                         course_data_arr[i]["timing"]
                                       }</p>
                                       <p class="course-ln">&emsp;${
                                         "<b>Lang : </b>" +
                                         course_data_arr[i]["language"]
                                       }</p>
                                       <p class="course-enrolled">&emsp;${
                                         "<b>Enr :</b>" +
                                         course_data_arr[i]["enrolled"] +
                                         " " +
                                         "Enrolled"
                                       }</p>
                                   </div>
                                 <div class="flexcost">
                                <h3 class="course-cost">${
                                  cost + " " + course_data_arr[i]["cost"]
                                }</h3>
                                <strike class="course-oldcost" >${
                                  "₹" + " " + course_data_arr[i]["old_cost"]
                                }</strike>
                                <p class="course-discount" >${
                                  Math.floor(discount) + " " + "% discount"
                                }</p>
                                </div>
                             </div> `;
  //  console.log(course_div_latestcourses);

  document
    .querySelector(".scroll-courses-div5")
    .append(course_div_latestcourses);
}

//search filter end latest courses

//youtube videos tab start

// youtube video JSON data

// const videos_data = [
//   {
//     source: "https://www.youtube.com/embed/dV00JxVDBd",
//     video_title: "How to Start Trading Stocks..",
//     video_creator: "Ricky Gutierezz",
//     video_language: "English",
//     video_hashtag: " #finance #forex",
//   },
//   {
//     source: "https://www.youtube.com/embed/tDmMOzNgTHI",
//     video_title: "How to learn Day Trading..",
//     video_creator: "The Urban Fight",
//     video_language: "English",
//     video_hashtag: " #finance #forex",
//   },
//   {
//     source: "https://www.youtube.com/embed/eynxyoKgpng",
//     video_title: "Learn to do Technical Ana..",
//     video_creator: "The Trading Channel",
//     video_language: "English",
//     video_hashtag: " #finance #money",
//   },
//   {
//     source: "https://www.youtube.com/embed/9-LagvSLbOA",
//     video_title: "How To Read Stock Charts..",
//     video_creator: "Learn App",
//     video_language: "English",
//     video_hashtag: " #money #Indicator",
//   },
//   {
//     source: "https://www.youtube.com/embed/hEUALimWs7E",
//     video_title: "The best CandleSticks Pat..",
//     video_creator: "The Trading Channel",
//     video_language: "English",
//     video_hashtag: " #finance #money",
//   },
//   {
//     source: "https://www.youtube.com/embed/MSzOocvljqc",
//     video_title: "What is Support & Resistance..",
//     video_creator: "The Trading Channel",
//     video_language: "English",
//     video_hashtag: "#PriceAction",
//   },
//   {
//     source: "https://www.youtube.com/embed/p7HKvqRI_Bo",
//     video_title: "How does the market work..",
//     video_creator: "TedED",
//     video_language: "English",
//     video_hashtag: " #finance #money",
//   },
//   {
//     source: "https://www.youtube.com/embed/CMQLdJa64Wk",
//     video_title: "How do investors choose..",
//     video_creator: "TedED",
//     video_language: "English",
//     video_hashtag: " #finance #money",
//   },
//   {
//     source: "https://www.youtube.com/embed/5Hah_jffaHg",
//     video_title: "Learn about Short Sell..",
//     video_creator: "CA Rachana Ranade",
//     video_language: "English",
//     video_hashtag: " #finance #money",
//   },
//   {
//     source: "https://www.youtube.com/embed/5hnyb78_sMc",
//     video_title: "What is Futures and Options..",
//     video_creator: "5 Min Read",
//     video_language: "English",
//     video_hashtag: " #finance #money",
//   },
// ];

// card create for videos tab section

// let course_div5;
// for (i = 0; i < videos_data.length; i++) {
//   course_div5 = document.createElement("div");
//   course_div5.setAttribute("class", "first-course3");
//   course_div5.setAttribute(
//     "href",
//     "details.html?name=" + videos_data[i]["video_title"]
//   );
//   course_div5.innerHTML = `<div>
//       <iframe class="course-img" width="560" height="315" src=${videos_data[i]["source"]}  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
//                  </div>
//                  <div>
//                      <h3 class="course-title">${videos_data[i]["video_title"]}</h3>
//                      <div class="course-details-videos">
//                          <p class="course-timing">${videos_data[i]["video_creator"]}</p>
//                         <div class="course-details">
//                          <p class="course-ln">${videos_data[i]["video_language"]}</p>
//                         &emsp; <p class="course-enrolled">${videos_data[i]["video_hashtag"]}</p>
//                      </div>
//                      </div>
//                  </div> `;
//   //  console.log(course_div5);

//   document.querySelector(".scroll-courses-div-youtube").append(course_div5);
// }

//youtube videos tab end

// create mycourses when finished payment or when click buy course button start

//my courses start

//JSON data from localstorage parse
const mycourses = JSON.parse(localStorage.getItem("add-to-card"));
console.log(mycourses);

//card create from parsed object JSON
let my_courses;

for (i = 0; i < mycourses.length; i++) {
  my_courses = document.createElement("a");
  my_courses.setAttribute("class", "first-course2-stocks");
  // console.log(mycourses[i]["title"]);
  my_courses.setAttribute("href", "details.html?name=" + mycourses[i]["title"]);
  let cost = "";
  let discount = "";

  if (mycourses[i]["cost"] === "learn for free") {
    cost += " ";
    discount += 100;
  } else {
    cost += "₹" + " ";
    discount +=
      100 - (course_data[i]["cost"] / course_data[i]["old_cost"]) * 100;
  }
  my_courses.innerHTML = `<div>
                             <img class="course-img-stocks" src=${
                               mycourses[i]["img"]
                             } alt="">
                             </div>
                             <div>
                                 <h3 class="course-title">${
                                   mycourses[i]["title"]
                                 }</h3>
                                 <div class="course-details">
                                       <p class="course-timing">${
                                         "<b>Dur :</b>" + mycourses[i]["timing"]
                                       }</p>
                                       <p class="course-ln">&emsp;${
                                         "<b>Lang : </b>" +
                                         mycourses[i]["language"]
                                       }</p>
                                       <p class="course-enrolled">&emsp;${
                                         "<b>Enr :</b>" +
                                         mycourses[i]["enrolled"] +
                                         " " +
                                         "Enrolled"
                                       }</p>
                                   </div>
                                 <div class="flexcost">
                                <h3 class="course-cost">${
                                  cost + " " + mycourses[i]["cost"]
                                }</h3>
                                <strike class="course-oldcost" >${
                                  "₹" + " " + mycourses[i]["old_cost"]
                                }</strike>
                                <p class="course-discount" >${
                                  discount + " " + "% discount"
                                }</p>
                                </div>
                             </div> `;
  //  console.log(my_courses);

  document.querySelector(".scroll-courses-div-mycourses").append(my_courses);
}

// create mycourses when finished payment or when click buy course button end
