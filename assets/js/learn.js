//js tabs code start
function openCity(evt, cityName) {
  //try statement
  try {
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

    //catch statement
  } catch (error) {
    console.error("Error" + error);
  }
}

//return to home tabs function
function homeon() {
  //try statement
  try {
    document.getElementById("default").style.display = "block";
    document.getElementById("my-courses").style.display = "none";
    document.getElementById("blogs").style.display = "none";
    document.getElementById("latest-courses").style.display = "none";
    document.getElementById("youtube-videos").style.display = "none";
    document.getElementById("free-courses").style.display = "none";
    document.getElementById("live-courses").style.display = "none";

    //catch statement
  } catch (error) {
    console.error("Error" + error);
  }
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
                  })" src=${course_data[i]["bookmark_img"]} alt="">
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

  document
    .querySelector(".scroll-courses-div-stocks")
    .append(course_div_stocks);
}

//bookmark icon toggle button function

function toggle(id) {
  //try statement
  try {
    let get_click_obj;

    //find clicked course
    get_click_obj = course_data.find((e) => e.id === id);

    //adding key bookmark = true
    get_click_obj.bookmark = true;

    //create object to assign
    let bookmark_obj = {
      bookmark_img: "../assets/images/icons8-add-bookmark-50_bookmarked.png",
    };

    //assign this source with previous source
    let assignObj = Object.assign(get_click_obj, bookmark_obj);

    //find clicked object index
    let index = course_data.indexOf(get_click_obj);

    //assign new value to old one
    course_data[index] = assignObj;

    //set new value to localstorage
    localStorage.setItem("course_data", JSON.stringify(course_data));

    //setting bookmark array to bookmark key in user object start
    let register = JSON.parse(localStorage.getItem("register_arr"));

    let loggin = JSON.parse(localStorage.getItem("login_arr"));

    const get_user_obj = register.find((event) => event.email === loggin);

    let index1 = register.indexOf(get_user_obj);

    //user per count bookmark
    if (register[index1].bookmarks != null) {
      let bookmark_id = {
        obj: get_click_obj,
      };

      //checked it should return true
      //check for duplicates
      const already_exist_obj = register[index1].bookmarks.find(
        (e) => e.obj.id === get_click_obj.id
      );

      if (already_exist_obj === undefined) {
        // alert("this course is already purchased by you");
        let index = register.indexOf(get_user_obj);

        register[index].bookmarks.push(bookmark_id);
        localStorage.setItem("register_arr", JSON.stringify(register));

        alert("course Added to Bookmarks");
        window.location.href = "learn.html";
      } else {
        //skip part
        alert("course Already Added to Bookmarks");
        window.location.href = "learn.html";
      }
    } else {
      let bookmark_obj = [];

      let bookmark_id = {
        obj: get_click_obj,
      };

      bookmark_obj.push(bookmark_id);

      let user_obj = {
        bookmarks: bookmark_obj,
      };

      let user_id_assign = Object.assign(get_user_obj, user_obj);

      let index = register.indexOf(get_user_obj);

      register[index] = user_id_assign;

      localStorage.setItem("register_arr", JSON.stringify(register));
      alert("course Added to Bookmarks");
      window.location.href = "learn.html";
    }

    //catch statement
  } catch (error) {
    console.error("Error" + error);
  }
}

//bookmark course function end

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

// search filter start free courses

//all courses JSON data parse
const course_data_arr = JSON.parse(localStorage.getItem("course_data"));

//create object
let obj = {
  cost: "learn for free",
};

//compare object get match objects
const filtervalues = course_data_arr.filter((course) => course.cost < 1);

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
  //need change the jquerry code
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
                                "₹" + " " + filtervalues[i]["cost"]
                              }</h3>
                              <strike class="course-oldcost" >${
                                "₹" + " " + filtervalues[i]["old_cost"]
                              }</strike>
                              <p class="course-discount" >${
                                discount + " " + "% discount"
                              }</p>
                              </div>
                             </div> `;

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
// jquerry
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

//   document.querySelector(".scroll-courses-div-youtube").append(course_div5);
// }

//youtube videos tab end

// create mycourses when finished payment or when click buy course button start

//my courses start

let register = JSON.parse(localStorage.getItem("register_arr"));

let loggin = JSON.parse(localStorage.getItem("login_arr"));

const get_user_obj = register.find((event) => event.email === loggin);

//JSON data from localstorage parse
const mycourses = JSON.parse(localStorage.getItem("add-to-card"));

let index = register.indexOf(get_user_obj);

const allCourses = JSON.parse(localStorage.getItem("course_data"));

let register_array = JSON.parse(localStorage.getItem("register_arr"));

let login = JSON.parse(localStorage.getItem("login_arr"));

const get_user_objs = register_array.find((event) => event.email === login);

let index1 = register_array.indexOf(get_user_objs);

let registerbookmark = register_array[index1]["bookmarks"] ?? [];

// //bookamrk card create from JSON object
let bookmark_div;
for (i = 0; i < registerbookmark.length; i++) {
  bookmark_div = document.createElement("a");
  bookmark_div.setAttribute("class", "first-course2-stocks");
  bookmark_div.setAttribute(
    "href",
    "details.html?name=" +
      register_array[index1]["bookmarks"][i]["obj"]["title"]
  );
  let cost = "";
  let discount = "";

  if (
    register_array[index1]["bookmarks"][i]["obj"]["cost"] === "learn for free"
  ) {
    cost += " ";
    discount += 100;
  } else {
    cost += "₹" + " ";
    discount +=
      100 -
      (register_array[index1]["bookmarks"][i]["obj"]["cost"] /
        register_array[index1]["bookmarks"][i]["obj"]["old_cost"]) *
        100;
  }
  bookmark_div.innerHTML = `<div>
                                  <img class="course-img-stocks" src=${
                                    register_array[index1]["bookmarks"][i][
                                      "obj"
                                    ]["img"]
                                  } alt="">
                              </div>
                              <div>
                                  <h3 class="course-title">${
                                    register_array[index1]["bookmarks"][i][
                                      "obj"
                                    ]["title"]
                                  }</h3>
                                  <div class="course-details">
                                      <p class="course-timing">${
                                        "<b>Dur :</b>" +
                                        register_array[index1]["bookmarks"][i][
                                          "obj"
                                        ]["timing"]
                                      }</p>
                                      <p class="course-ln">&emsp;${
                                        "<b>Lang : </b>" +
                                        register_array[index1]["bookmarks"][i][
                                          "obj"
                                        ]["language"]
                                      }</p>
                                      <p class="course-enrolled">&emsp;${
                                        "<b>Enr :</b>" +
                                        register_array[index1]["bookmarks"][i][
                                          "obj"
                                        ]["enrolled"] +
                                        " " +
                                        "Enrolled"
                                      }</p>
                                  </div>
                               <div class="flexcost">
                               <h3 class="course-cost">${
                                 "₹" +
                                 " " +
                                 register_array[index1]["bookmarks"][i]["obj"][
                                   "cost"
                                 ]
                               }</h3>
                               <strike class="course-oldcost" >${
                                 "₹" +
                                 " " +
                                 register_array[index1]["bookmarks"][i]["obj"][
                                   "old_cost"
                                 ]
                               }</strike>
                               <p class="course-discount" >${
                                 Math.floor(discount) + " " + "% discount"
                               }</p>
                               </div>
                              </div> `;

  document.querySelector(".scroll-bookmarks-div4").append(bookmark_div);
}

//bookamrk card create from JSON object end

let registerArr = JSON.parse(localStorage.getItem("register_arr"));

//card create from parsed object JSON
let my_courses;

for (i = 0; i < registerArr[index]["courses"].length; i++) {
  my_courses = document.createElement("a");
  my_courses.setAttribute("class", "first-course2-stocks");
  my_courses.setAttribute(
    "href",
    "details.html?name=" + registerArr[index]["courses"][i]["obj"]["title"]
  );
  let cost = "";
  let discount = "";

  if (registerArr[index]["courses"][i]["obj"]["cost"] === "learn for free") {
    cost += " ";
    discount += 100;
  } else {
    cost += "₹" + " ";
    discount +=
      100 -
      (registerArr[index]["courses"][i]["obj"]["cost"] /
        registerArr[index]["courses"][i]["obj"]["old_cost"]) *
        100;
  }
  my_courses.innerHTML = `<div>
                             <img class="course-img-stocks" src=${
                               registerArr[index]["courses"][i]["obj"]["img"]
                             } alt="">
                             </div>
                             <div>
                                 <h3 class="course-title">${
                                   registerArr[index]["courses"][i]["obj"][
                                     "title"
                                   ]
                                 }</h3>
                                 <div class="course-details">
                                       <p class="course-timing">${
                                         "<b>Dur :</b>" +
                                         registerArr[index]["courses"][i][
                                           "obj"
                                         ]["timing"]
                                       }</p>
                                       <p class="course-ln">&emsp;${
                                         "<b>Lang : </b>" +
                                         registerArr[index]["courses"][i][
                                           "obj"
                                         ]["language"]
                                       }</p>
                                       <p class="course-enrolled">&emsp;${
                                         "<b>Enr :</b>" +
                                         registerArr[index]["courses"][i][
                                           "obj"
                                         ]["enrolled"] +
                                         " " +
                                         "Enrolled"
                                       }</p>
                                   </div>
                                 <div class="flexcost">
                                <h3 class="course-cost">${
                                  cost +
                                  " " +
                                  registerArr[index]["courses"][i]["obj"][
                                    "cost"
                                  ]
                                }</h3>
                                <strike class="course-oldcost" >${
                                  "₹" +
                                  " " +
                                  registerArr[index]["courses"][i]["obj"][
                                    "old_cost"
                                  ]
                                }</strike>
                                <p class="course-discount" >${
                                  Math.floor(discount) + " " + "% discount"
                                }</p>
                                </div>
                             </div> `;

  document.querySelector(".scroll-courses-div-mycourses").append(my_courses);
}

// create mycourses when finished payment or when click buy course button end

//google translate start

function googleTranslateElementInit() {
  const translateElement =  new google.translate.TranslateElement(
    { pageLanguage: "en" },
    "google_translate_element"
  );
  return translateElement;
}

//google translate end



   //register array parse
   const register_arr = JSON.parse(localStorage.getItem("register_arr"));
   
   //login array parse
   const login_arr = JSON.parse(localStorage.getItem("login_arr"));
   
   //check user
   const get_obj = register_arr.find((event) => event.email === login_arr);
   
   //img tag create in js
   let user_profile;
   
   user_profile = document.createElement("img");
   user_profile.setAttribute("id", "user-profile");
   user_profile.setAttribute("class", "dropbtn");
   user_profile.setAttribute("onclick", "profile()");
   user_profile.setAttribute("src", get_obj["profile_pic"]);
   document.querySelector("#dropuser").prepend(user_profile);
   
   //google translate
   function googleTranslateElementInit() {
     const translateElement = new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
     return translateElement;
   }
   