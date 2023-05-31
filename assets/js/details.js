let login_array = JSON.parse(localStorage.getItem("login_arr"));
console.log(login_array);

if(login_array === null){
  window.location.href = "../pages/signin.html";
}

//course data JSON parse
const course_data = JSON.parse(localStorage.getItem("course_data"));

//url params start
const url = window.location.search;
const urlParams = new URLSearchParams(url);
const username = urlParams.get("name");

// find object from matching title
const get_obj = course_data.find((event) => event.title === username);

//card create and show the card data here
let details_div;

details_div = document.createElement("div");
details_div.setAttribute("class", "course-div");
let cost = "";
let discount = "";

/* discount code if free means discount 100% if not means it will calculate
by new cost - old cost multiply by 100 */

if (get_obj["cost"] === "learn for free") {
  cost += " ";
  discount += 100;
} else {
  cost += "₹" + " ";
  discount += 100 - (get_obj["cost"] / get_obj["old_cost"]) * 100;
}
details_div.innerHTML = `
       <button class="add-to-cart" id="add-to-cart">Add to cart</button><br>
       <button id="deletecourse" class="delete">Delete from My Courses</button><br>
       <button id="deletebookmark" class="delete">Remove from Bookmark</button><br>
       <a class="full-access-para" href="">Full Lifetime Access</a>
       <div>
          <button class="share" id="share" onclick="share()">Share</button><br>
          <button class="gift"  onclick="gift()">Gift this course</button><br>
       </div>`;

document.querySelector(".course").append(details_div);

//card create and show the card data here
//course details show that we get from learn page
let detail_div;

//register array parse from local
let register = JSON.parse(localStorage.getItem("register_arr"));

//login array parse from local
let loggin = JSON.parse(localStorage.getItem("login_arr"));

//get obj from two array
const get_user_obj = register.find((event) => event.email === loggin);

//find index from the finded obj in array
let index = register.indexOf(get_user_obj);


// all js full page dynamic start

//link to watch videos
if (register[index]["courses"] !== null) {


  let arr;

  //is coursepurchased key is true then get the obj from array called register[index]["courses"]

  let findcoursepurchased = register[index]["courses"].find(
    (item) => item.obj.id === get_obj.id
  );

  //is not exist or coursepurchased is true then user will see te videos
  if (findcoursepurchased !== undefined) {
    arr = [
      get_obj["courseVideo1"],
      get_obj["courseVideo2"],
      get_obj["courseVideo3"],
      get_obj["courseVideo4"],
      get_obj["courseVideo5"],
      get_obj["courseVideo6"],
      get_obj["courseVideo7"],
      get_obj["courseVideo8"],
      get_obj["courseVideo9"],
    ];
  } else {
    //else we can't see any course videos
    arr = ["#", "#", "#", "#", "#", "#", "#", "#", "#"];
  }

  //within the arr all course videos are there

  //parse the quizquestionarr from local which contains quiz questions/options/answers
  const quizquestions = JSON.parse(localStorage.getItem("quiz_questions_arr"));

  //url params get name value
  const url = window.location.search;
  const userparams = new URLSearchParams(url);
  const titles = userparams.get("name");

  //find titles are equal if true it returns a object
  const question = quizquestions.find((obj1) =>
    obj1.subarrays.find((obj2) =>
      obj2.obj.find((obj3) => obj3.courseName === titles)
    )
  );

  // for findquiz[1] we encode array in URL Params
  // js details page fully dynamic
  //give all values to show in respective places in this page
  let heropage;

  heropage = document.createElement("div");
  heropage.setAttribute("class", "heropage");
  heropage.innerHTML = `
 <div class="breadcrumb">
 <a href="../pages/userHome.html" class="breadcrumblink">Home</a>
 <a href="../pages/learn.html" class="breadcrumblink">Learn</a>
 <a href="#" class="breadcrumblink">Details</a>
</div>

 <div class="course-details">
 <p>Course Title :</p>
    <h1>${get_obj["title"]}</h1>


    <div class="course-detail-time">
    <p><b>Course Timing</b>  <br><br>${get_obj["timing"]}</p>
    <p><b>Course Language</b>  <br><br>${get_obj["language"]}</p>
    <p><b>Students Intake</b>  <br><br>${get_obj["enrolled"]} Per Batch</p>
    <p><b>Course Cost</b>  <br><br>&emsp; ₹ ${get_obj["cost"]}</p>



    <div>
    <div class="course-price" id="course-price">
        <p><b>Course Cost</b>  <br><br>${
          cost + " " + get_obj["cost"]
        }</p><br><br>
        <p><b>Course Old Cost</b>  <br><br><strike>${
          "₹" + " " + get_obj["old_cost"]
        }</strike></p><br><br>
        <p><b>Course Discount</b>  <br><br>${
          Math.floor(discount) + " " + "% discount"
        }</p>
    </div>
    <p  id="course-days"><span><b>Days Left</b>  <br><br>30 days</span>&nbsp;left at this price!</p>

    <div class="buttons-div">

    <button class="add-to-cart" id="add-to-cart">Add to cart</button><br>
       <button id="deletecourse" class="delete">Delete from My Courses</button><br>
       <button id="deletebookmark" class="delete">Remove from Bookmark</button><br>
       <a class="full-access-para" href="">Full Lifetime Access</a>
          <button class="share" id="share" onclick="share()">Share</button><br>
          <button class="gift"  onclick="gift()">Gift this course</button><br>

       </div>
 </div>




    </div>

    <br>


    <div class="navlinks" id="navlinks">
     <a href="#about" class="link1">About</a>
     <a href="#instructor" class="link1">Instructor</a>
     <a href="#offered-by" class="link1">Offered By</a>
     <a href="#videos" class="link1">Videos</a>
     <a href="#comment" class="link1">Comments</a>
     <a href="../pages/userContact.html" class="link1">Contact</a>
    </div>



       <h1 class="learn-couse" id="about">About</h1>

       <h1 class="learn-couse">What you'll learn from this course</h1>
   
       <ul class="list-learnings">
         <h2 class="list-learning">Course Description</h2>
       <p class="course-desc">${get_obj["Description"]}</p>
         <br>
         <h2 class="list-learning">Top Skills You'll Learn</h2>
         <br>
        <div id="list-learn">
        
        </div>
       </ul>
       

       
       
       <ul class="list-learnings">
         <br>
         <h2 class="list-learning">Highlights</h2>
         <li class="list-learning">100% worth of money</li>
         <li class="list-learning">You will get a certificate once you completed the course</li>
         <li class="list-learning">You always get 24/7 Chat Support</li>
         <li class="list-learning">Participate the Live trading session</li>
       </ul><br>



       <div class="instructorcontainer">
       <p class="learn-couse" id="instructor">Instructor</p>

       <div class="instructor-div">
       <div>
         <img src="${get_obj["img"]}" alt=""  id="instruct-image"  />
       </div>
       <div class="letters-instuct">
         <a href="#" class="instruct-namelink"><h2>${
           get_obj["instructorname"]
         }</h2></a>
         <p>${get_obj["instructordesc"]}</p>
         <p>${get_obj["companycategory"]}</p>
         <p class="courses-add"><b>4</b> Courses</p>
       </div>

       </div>

       </div>





       <div class="offered-by" id="offered-by">
       <p class="learn-couse" id="about">Offered By</p>

       <div class="instructor-div">
       <div>
         <img src="${get_obj["img"]}" alt=""  id="instruct-image"  />
       </div>
       <div class="letters-instuct">
         <a href="#" class="instruct-namelink"><h2>${
           get_obj["offeredcompanyname"]
         }</h2></a>
         <p>${get_obj["offeredcompanydesc"]}</p>
         <p>${get_obj["companycategory"]}</p>
         <p class="courses-add"><b>4</b> Courses</p>
       </div>

       </div>

       </div>




       <div class="offered-by-videos" id="videos">
       <p class="learn-couse" id="about1">Videos</p>




       <button class="accordion">Beginner's Module</button>
<div class="panel">
  <a href="${
    arr[0]
  }" class="course-links" id="course-links1" target="_blank"  onclick="openFile(event)"><li class="begginer-module">${
    get_obj["courseVideoName1"]
  }</li></a><a class="quiz-btn" id="quiz1" href="">take quiz</a><br><br>
  <a href="${
    arr[1]
  }" class="course-links" id="course-links1" target="_blank" onclick="openFile(event)"><li class="begginer-module">${
    get_obj["courseVideoName2"]
  }</li></a><a class="quiz-btn" id="quiz2" href="">take quiz</a><br><br>
  <a href="${
    arr[2]
  }" class="course-links" id="course-links1" target="_blank" onclick="openFile(event)"><li class="begginer-module">${
    get_obj["courseVideoName3"]
  }</li></a><a class="quiz-btn" id="quiz3" href="">take quiz</a><br><br>
</div>

<button class="accordion">Intermediate Module</button>
<div class="panel">
<a href="${
    arr[3]
  }" class="course-links" id="course-links1" target="_blank" onclick="openFile(event)"><li class="begginer-module">${
    get_obj["courseVideoName4"]
  }</li></a><a class="quiz-btn" id="quiz4" href="">take quiz</a><br><br>
<a href="${
    arr[4]
  }" class="course-links" id="course-links1" target="_blank" onclick="openFile(event)"><li class="begginer-module">${
    get_obj["courseVideoName5"]
  }</li></a><a class="quiz-btn" id="quiz5" href="">take quiz</a><br><br>
<a href="${
    arr[5]
  }" class="course-links" id="course-links1" target="_blank" onclick="openFile(event)"><li class="begginer-module">${
    get_obj["courseVideoName6"]
  }</li></a><a class="quiz-btn" id="quiz6" href="">take quiz</a><br><br>
</div>

<button class="accordion">Advanced Module</button>
<div class="panel">
<a href="${
    arr[6]
  }" class="course-links" id="course-links1" target="_blank" onclick="openFile(event)"><li class="begginer-module">${
    get_obj["courseVideoName7"]
  }</li></a><a class="quiz-btn" id="quiz7" href="">take quiz</a><br><br>
<a href="${
    arr[7]
  }" class="course-links" id="course-links1" target="_blank" onclick="openFile(event)"><li class="begginer-module">${
    get_obj["courseVideoName8"]
  }</li></a><a class="quiz-btn" id="quiz8" href="">take quiz</a><br><br>
<a href="${
    arr[8]
  }" class="course-links" id="course-links1" target="_blank" onclick="openFile(event)"><li class="begginer-module">${
    get_obj["courseVideoName9"]
  }</li></a><a class="quiz-btn" id="quiz9" href="">take quiz</a><br><br>
</div>


       </div>




       <div class="offered-by" id="comment">
       <p class="learn-couse" id="about">Comments</p>
      
       <div class="what-you-learn">

       <span class="hint--bottom hint--rounded" aria-label="Use this textarea to Give Comments for this course"> <textarea type="text" name="comment" id="comment-input" placeholder="comment here"></textarea></span>
       <span class="hint--top hint--rounded" aria-label="Submit Your Comments"><button class="submit-comment" id="submit-comment" >Submit</button></span>
     
     <div id="new-comments">
     
           
     </div>
     
     <br>
     <br>
     <br>
     <br>
     
     </div>
     
     </div>


       </div>




`;

  //append or add this whole html (heropage) inside the (.heropage) class
  document.querySelector(".heropage").append(heropage);


  let splitval = get_obj["top_skills"].split(".");
  //list tag for top skills split loop tag create
  let listlearn;

  for(let i=0;i<splitval.length-1;i++){

  listlearn = document.createElement("li");
  listlearn.setAttribute("class","list-learning");
  listlearn.innerHTML = splitval[i];
  
  document.querySelector("#list-learn").append(listlearn);

  }
  
  // <li class="list-learning">${}</li>
  // <li class="list-learning">${get_obj["top_skills1"][1]}</li>
  // <li class="list-learning">${get_obj["top_skills1"][2]}</li>
  // <li class="list-learning">${get_obj["top_skills1"][3]}</li>
  // <li class="list-learning">${get_obj["top_skills1"][4]}</li>
  // <li class="list-learning">${get_obj["top_skills1"][5]}</li>
  // <li class="list-learning">${get_obj["top_skills1"][6]}</li>
  // <li class="list-learning">${get_obj["top_skills1"][7]}</li>
  // <li class="list-learning">${get_obj["top_skills1"][8]}</li>

  //five variables create
  let encodedArrayString;
  let encodedArrayString1;
  let encodedArrayString2;
  let encodedArrayString3;
  let encodedArrayString4;
  let encodedArrayString5;

  //coursepurchased means show quiz for courses
  for (let i = 0; i < question.subarrays.length; i++) {
    let findcoursepurchased = register[index]["courses"].find(
      (item) => item.obj.id === get_obj.id
    );

    if (findcoursepurchased !== undefined) {

      let myArray = question.subarrays[0].obj;
      let myArray1 = question.subarrays[1].obj;
      let myArray2 = question.subarrays[2].obj;
      let myArray3 = question.subarrays[3].obj;
      let myArray4 = question.subarrays[4].obj;
      let myArray5 = question.subarrays[5].obj;

      // Convert array to string
      const myArrayString = JSON.stringify(myArray);
      const myArrayString1 = JSON.stringify(myArray1);
      const myArrayString2 = JSON.stringify(myArray2);
      const myArrayString3 = JSON.stringify(myArray3);
      const myArrayString4 = JSON.stringify(myArray4);
      const myArrayString5 = JSON.stringify(myArray5);

      // Encode string for use in URL
      encodedArrayString = encodeURIComponent(myArrayString);
      encodedArrayString1 = encodeURIComponent(myArrayString1);
      encodedArrayString2 = encodeURIComponent(myArrayString2);
      encodedArrayString3 = encodeURIComponent(myArrayString3);
      encodedArrayString4 = encodeURIComponent(myArrayString4);
      encodedArrayString5 = encodeURIComponent(myArrayString5);

      //give redirect link for respective quizes.
      document.getElementById("quiz1").href =
        "quiz.html?myArray=" + encodedArrayString;
      document.getElementById("quiz2").href =
        "quiz.html?myArray=" + encodedArrayString1;
      document.getElementById("quiz3").href =
        "quiz.html?myArray=" + encodedArrayString2;
      document.getElementById("quiz4").href =
        "quiz.html?myArray=" + encodedArrayString3;
      document.getElementById("quiz5").href =
        "quiz.html?myArray=" + encodedArrayString4;
      document.getElementById("quiz6").href =
        "quiz.html?myArray=" + encodedArrayString5;
    } else {
      //coursenotpurchased means courses doesn't contain quiz.
      findquiz = ["#", "#", "#", "#", "#", "#", "#", "#", "#"];
    }
  }
} else {
  //skip part
}

//enter button js
//comment will go when user press enter key
let input = document.getElementById("comment-input");
input.addEventListener("keypress", (event) => {
  try {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("submit-comment").click();
    }

    //catch statement
  } catch (error) {
    console.error("Error" + error);
  }
});

// video or image file reader code end

//heropage start

let heropage2;

heropage2 = document.createElement("div");
heropage2.setAttribute("class", "heropage2");
heropage2.innerHTML = `
   <img src=${get_obj["img"]} alt="" id="course-image">
  `;

document.querySelector(".heropage").append(heropage2);

//check ID is already exist
//course will go to mycourses
//add to cart  function start
let addtocart = document.getElementById("add-to-cart");
addtocart.addEventListener("click", (cart) => {
  cart.preventDefault();

  try {
    // check if else by cost
    if (get_obj["cost"] != "0") {
      alert("You have to make Payment to Access the Course");
      // window.location.href = "coursePayment.html?name=" + username;
      let newWindow = window.open(`coursePayment.html?name=${username}`,"noopener,noreferrer");
      window.close();
      newWindow.focus();
    } else {
      let registerArr = JSON.parse(localStorage.getItem("register_arr"));

      let loggin = JSON.parse(localStorage.getItem("login_arr"));

      const get_user_obj = registerArr.find((event) => event.email === loggin);

      let index = registerArr.indexOf(get_user_obj);

      //find index
      let index1 = registerArr.indexOf(get_user_obj);

      //add to card user

      const register_arr = JSON.parse(localStorage.getItem("register_arr"));

      if (register_arr[index].courses != null) {
        let courses_id = {
          obj: get_obj,
          isCoursePurchased: true,
        };


        // };

        // find object from match id
        const varobj = register_arr[index]["courses"].find(
          (e) => e.obj.id === get_obj.id
        );

        //checked it should return true

        if (varobj === undefined) {
          // alert("this course is already purchased by you");
          registerArr[index].courses.push(courses_id);

          //email send to User that he bought the course

          let body = `

                  Thank You For Your Purchase!
                  
                  Dear User,
                  
                  Thank you for purchasing our trading course, [course name]. We're excited to help you learn and grow in your trading journey.
                  
                  You can access your course material by logging in to your account on our website. If you have any questions or issues, please don't hesitate to reach out to us at [support email].
                  
                  Course Image - ${get_obj["img"]}
                  
                  Course Title - ${get_obj["title"]}
                  Course Timing - ${get_obj["timing"]}
                  Course Cost Type - ${get_obj["cost_type"]}
                  Course Cost - ${get_obj["cost"]}
                  Course Old Cost - ${get_obj["old_cost"]}
                  Course Language - ${get_obj["language"]}
                  Course Instructor Name - ${get_obj["instructorname"]}
                  Course Instructor Description - ${get_obj["instructordesc"]}
                  Course Offered Company Name - ${get_obj["offeredcompanyname"]}
                  Course Offered Company Description - ${get_obj["offeredcompanydesc"]}

                  Click the Course Link to Access Now - ${window.location} 
                  
        
                 
                     `;

          let params = {
            from_name: "freekyajmal@gmail.com",
            to_name: "freekyajmal@gmail.com",
            // message: "test",
            Course_Image: get_obj["img"],
            Course_title: get_obj["title"],
            Course_timing: get_obj["timing"],
            Course_cost_type: get_obj["cost_type"],
            Course_cost: get_obj["cost"],
            Course_old_cost: get_obj["old_cost"],
            Course_language: get_obj["language"],
            Course_instructor_name: get_obj["instructorname"],
            Course_instructor_desc: get_obj["instructordesc"],
            Course_offered_company_name: get_obj["offeredcompanyname"],
            Course_offered_company_desc: get_obj["offeredcompanydesc"],
            Course_link: window.location,
          };
let x;
          emailjs
            .send("service_sp6m68x", "template_uo2qcla", params)
            .then((message) => {
              x = message;
            })
            .catch((err) => console.error(err));

          localStorage.setItem("register_arr", JSON.stringify(registerArr));
          //skip this part

          alert("course added to my courses");

          //email send to User that he bought the course
        } else {
          //skip part
          alert("you already added this course to my courses");
        }
      } else {
        let course_obj = [];

        let courses_id = {
          obj: get_obj,
          isCoursePurchased: true,
        };

        course_obj.push(courses_id);

        let user_obj = {
          courses: course_obj,
        };

        let user_id_assign = Object.assign(get_user_obj, user_obj);

        let index1 = registerArr.indexOf(get_user_obj);

        registerArr[index] = user_id_assign;

        //email send to User that he bought the course

        let body = `

                  Thank You For Your Purchase!
                  
                  Dear User,
                  
                  Thank you for purchasing our trading course, [course name]. We're excited to help you learn and grow in your trading journey.
                  
                  You can access your course material by logging in to your account on our website. If you have any questions or issues, please don't hesitate to reach out to us at [support email].
                  
                  Course Image - ${get_obj["img"]}
                  
                  Course Title - ${get_obj["title"]}
                  Course Timing - ${get_obj["timing"]}
                  Course Cost Type - ${get_obj["cost_type"]}
                  Course Cost - ${get_obj["cost"]}
                  Course Old Cost - ${get_obj["old_cost"]}
                  Course Language - ${get_obj["language"]}
                  Course Instructor Name - ${get_obj["instructorname"]}
                  Course Instructor Description - ${get_obj["instructordesc"]}
                  Course Offered Company Name - ${get_obj["offeredcompanyname"]}
                  Course Offered Company Description - ${get_obj["offeredcompanydesc"]}

                  Click the Course Link to Access Now - ${window.location} 
                  
        
                 
                     `;

        let params = {
          from_name: "freekyajmal@gmail.com",
          to_name: "freekyajmal@gmail.com",
          // message: "test",
          Course_Image: get_obj["img"],
          Course_title: get_obj["title"],
          Course_timing: get_obj["timing"],
          Course_cost_type: get_obj["cost_type"],
          Course_cost: get_obj["cost"],
          Course_old_cost: get_obj["old_cost"],
          Course_language: get_obj["language"],
          Course_instructor_name: get_obj["instructorname"],
          Course_instructor_desc: get_obj["instructordesc"],
          Course_offered_company_name: get_obj["offeredcompanyname"],
          Course_offered_company_desc: get_obj["offeredcompanydesc"],
          Course_link: window.location.href,
        };
let y;
        emailjs
          .send("service_sp6m68x", "template_uo2qcla", params)
          .then((message) => {
            y = message;
          })
          .catch((err) => console.error(err));

        localStorage.setItem("register_arr", JSON.stringify(registerArr));
      }

      window.location.href = "learn.html";
    }

    //catch statement
  } catch (error) {
    console.error("Error" + error);
  }
});

// share and gift div display none
document.getElementById("share-div").style.display = "none";
document.getElementById("gift-div").style.display = "none";
document.getElementById("edit-comment").style.display = "none";

// share div display block
function share() {
  document.querySelector(".course-container").style.opacity = "0.7";
  document.querySelector("body").style.backgroundColor = "black";
  document.getElementById("share-div").style.display = "block";
  document.getElementById("share-div").style.opacity = "1";
}

// share and gift div link window location show
document.getElementById("link-input").value = window.location;
document.getElementById("link-input1").value = window.location;

// share div back
function back() {
  document.getElementById("share-div").style.display = "none";
  document.querySelector(".course-container").style.opacity = "1";
  document.querySelector("body").style.backgroundColor = "#F6F8FC";
}

// gift div display block
function gift() {
  document.querySelector(".course-container").style.opacity = "0.7";
  document.querySelector("body").style.backgroundColor = "black";
  document.getElementById("gift-div").style.display = "block";
  document.getElementById("gift-div").style.opacity = "1";
}

// gift div back
function giftback() {
  document.getElementById("gift-div").style.display = "none";
  document.querySelector(".course-container").style.opacity = "1";
  document.querySelector("body").style.backgroundColor = "#F6F8FC";
}

//delete course from my courses when clicking a button

// URL Params
const urls = window.location.search;
const urlparams = new URLSearchParams(urls);
const usernames = urlParams.get("name");

// delete course eventlistener when click
let delete_mycourses = document.getElementById("deletecourse");
delete_mycourses.addEventListener("click", (deletecourse) => {
  deletecourse.preventDefault();

  try {
    //JSON parse mycourses
    let register = JSON.parse(localStorage.getItem("register_arr"));

    let loggin = JSON.parse(localStorage.getItem("login_arr"));

    const get_user_obj = register.find((event) => event.email === loggin);

    let indexx = register.indexOf(get_user_obj);

    //find clicked course by find method
    const get_mycourses = register[indexx].courses.find(
      (course) => course.obj.title === usernames
    );

    // find clicked index from mycourses array
    let index = register[indexx].courses.indexOf(get_mycourses);

    //find index
    let index1 = register.indexOf(get_user_obj);

    //courses id splice find object

    // confirm message when click delete button
    let msg = confirm(
      "Are you sure You want to delete this course from My Courses"
    );

    const msgConfirmed = msg !== true;

    if (msgConfirmed) {
      return false;
    } else {
  
      let getObjs = register[index1].courses.find(
        (event) => event.obj.id === get_mycourses.obj.id
      );

      let findValIndex = register[index1].courses.indexOf(getObjs);

      register[index1].courses.splice(findValIndex, 1);
      localStorage.setItem("register_arr", JSON.stringify(register));

      alert("Course Removed to My Courses");
    }

    window.location.href = "learn.html";

    //catch statement
  } catch (error) {
    console.error("Error" + error);
  }
});

//delete course from bookmarks

// delete bookmark from bookmark tab
let delete_bookmark = document.getElementById("deletebookmark");

//delete bookmark when click button
delete_bookmark.addEventListener("click", (deletecourse) => {
  deletecourse.preventDefault();

  try {
    //bookmark JSON parse from localstorage
    let register = JSON.parse(localStorage.getItem("register_arr"));

    let loggin = JSON.parse(localStorage.getItem("login_arr"));

    const get_user_obj = register.find((event) => event.email === loggin);

    let index1 = register.indexOf(get_user_obj);

    //find bookmarrk object by title
    const get_bookmark = register[index1].bookmarks.find(
      (course) => course.obj.title === usernames
    );

    //find bookmark obj with course_data
    const get_course = course_data.find((course) => course.title === usernames);

    // find index by match object from course_data
    const course_index = course_data.indexOf(get_course);

    // find index by match object from bookmark
    const index = register[index1].bookmarks.indexOf(get_bookmark);

    //confirm message to remove bookmark
    let msg = confirm(
      "Are you sure You want to Remove this course from Your Bookmarks"
    );

    const msgConfirmed = msg !== true;
    if (msgConfirmed) {
      return false;
    } else {
      //find index
      let index1 = register.indexOf(get_user_obj);

      //remove bookmark id from bookmark key in user object

      let getObjs = register[index1].bookmarks.find(
        (event) => event.obj.id === get_bookmark.obj.id
      );

      let findValIndex = register[index1].bookmarks.indexOf(getObjs);

      register[index1].bookmarks.splice(index, 1);
      localStorage.setItem("register_arr", JSON.stringify(register));

      //if message true then do this
      // bookmark.splice(index,1);
      // localStorage.setItem("bookmarks",JSON.stringify(bookmark));

      let bookmark_obj = {
        bookmark_img: "../assets/images/icons8-add-bookmark-50.png",
      };

      //assign this source with previous source
      let assignObj = Object.assign(get_course, bookmark_obj);

      //assign new value to old one
      course_data[course_index] = assignObj;

      //set new value to localstorage
      localStorage.setItem("course_data", JSON.stringify(course_data));

      window.location.href = "learn.html";
    }

    //catch statement
  } catch (error) {
    console.error("Error" + error);
  }
});

// parse register array JSON
const register_arr = JSON.parse(localStorage.getItem("register_arr"));

// parse login array JSON
const login = JSON.parse(localStorage.getItem("login_arr"));

// get user profile from user login
const get_objs = register_arr.find((Reg) => login == Reg["email"]);

document.getElementById("dropusers").src = get_objs.profile_pic;

// comment card create when clicks
let createcomment = document.getElementById("submit-comment");
createcomment.addEventListener("click", (event) => {
  event.preventDefault();

  try {
    const comment_input = document.getElementById("comment-input").value;

    // if array not null do this
    if (localStorage.getItem("comments") != null) {
      comment_arr = JSON.parse(localStorage.getItem("comments"));

      let comment_input = document.getElementById("comment-input").value;
      let comment_id = Date.now();
      let comment_pic = get_objs.profile_pic;
      let course_id = get_obj.id;
      let comment_time = moment().calendar();
      let course_title = get_obj.title;
      let user_id = get_objs.user_id;

      let comment_obj = {
        comment_input,
        comment_id,
        user_id,
        comment_pic,
        course_id,
        course_title,
        comment_time,
      };

      //push obj into arr
      comment_arr.push(comment_obj);

      //local set comments
      localStorage.setItem("comments", JSON.stringify(comment_arr));
      location.reload();
    } else {
      //else create an array
      let comment_arr = [];

      let comment_input = document.getElementById("comment-input").value;
      let comment_id = Date.now();
      let comment_pic = get_objs.profile_pic;
      let course_id = get_obj.id;
      let comment_time = moment().calendar();
      let course_title = get_obj.title;
      let user_id = get_objs.user_id;

      let comment_obj = {
        comment_input,
        comment_id,
        user_id,
        comment_pic,
        course_id,
        course_title,
        comment_time,
      };

      //comment push
      comment_arr.push(comment_obj);

      //localstorage set comments
      localStorage.setItem("comments", JSON.stringify(comment_arr));
      location.reload();
    }

    //catch statement
  } catch (error) {
    console.error("Error" + error);
  }
});

// comment card create
let comment_div;
let comment_p;

// comment array parse JSON
const comment = JSON.parse(localStorage.getItem("comments")) ?? [];

let findcomments = comment.filter(
  (event) => event.course_title === get_obj.title
);

// if(findcomments === null){
//   return
// }else{}

for (let i = 0; i < findcomments.length; i++) {
  comment_div = document.createElement("div");
  comment_div.setAttribute("class", "comment-1");
  comment_div.setAttribute("id", "comment-1");

  //user id same means edit delete button display block
  if (findcomments[i]["user_id"] === get_objs.user_id) {
    comment_div.innerHTML = `<div class="comment-img">
    <img class="profile-img_block" id="profile-pic" src=${get_objs.profile_pic}>
    <p class="comment-letters" id="comment-letters">${findcomments[i]["comment_input"]}</p>
    &emsp;<p class="datenow">${findcomments[i]["comment_time"]}</p>
    <button class="comment-edit-delete1_block" id="comment-edit-delete1" onclick="edit(${findcomments[i]["comment_id"]})">Edit</button>
    <button class="comment-edit-delete2_block" id="comment-edit-delete2" onclick="deletecomment(${findcomments[i]["comment_id"]})">Delete</button>
    </div>`;
    // onclick=`+comment[i]["comment_id"]+`
  } else {
    //user id same means edit delete button display none
    comment_div.innerHTML = `<div class="comment-img">
    <img class="profile-img_block" id="profile-pic" src="">
    <p class="comment-letters" id="comment-letters">${findcomments[i]["comment_input"]}</p>
    &emsp;<p class="datenow">${findcomments[i]["comment_time"]}</p>
    <button class="comment-edit-delete1_none" id="comment-edit-delete1" onclick="edit(${findcomments[i]["comment_id"]})">Edit</button>
    <button class="comment-edit-delete2_none" id="comment-edit-delete2" onclick="deletecomment(${findcomments[i]["comment_id"]})">Delete</button>
    </div>`;
  }

  document.querySelector("#new-comments").append(comment_div);
}

//if else for show comments

let editObj;
//edit function new popup div
function edit(a) {
  try {
    document.querySelector(".course-container").style.opacity = "1";
    document.querySelector(".what-you-learn").style.backgroundColor = "black";
    document.getElementById("edit-comment").style.display = "block";
    document.getElementById("edit-comment").style.marginTop = "2600px";
    document.getElementById("edit-comment").style.width = "500px";
    document.getElementById("edit-comment").style.opacity = "1";
    const get_editobj = comment.find((e) => e.comment_id === a);
    

    const input = document.getElementById("comment-edit");
    input.value = get_editobj["comment_input"];

    // return get_editobj;
    editObj = get_editobj;

    //catch statement
  } catch (error) {
    console.error("Error" + error);
  }
}

function backedit() {
  try {
    document.getElementById("edit-comment").style.display = "none";
    document.querySelector(".course-container").style.opacity = "1";
    document.querySelector(".what-you-learn").style.backgroundColor = "white";

    //catch statement
  } catch (error) {
    console.error("Error" + error);
  }
}

// function after click submit button
function submitedit() {
  try {
    // editSubmit(editObj);
    let comment_input = document.getElementById("comment-edit").value;
    let comment_id = editObj["comment_id"];
    let user_id = editObj["user_id"];

    const obj = {
      comment_input,
      comment_id,
      user_id,
    };


    let edit_assign = Object.assign(editObj, obj);

    const index = comment.indexOf(editObj);

    comment[index] = edit_assign;

    localStorage.setItem("comments", JSON.stringify(comment));

    location.reload();

    //catch statement
  } catch (error) {
    console.error("Error" + error);
  }
}

// to get return vslue from edit function
function editSubmit(editObj) {
}

// delete comment function when click delete button
function deletecomment(a) {
  try {
    const get_editobj = comment.find((e) => e.comment_id === a);

    const index = comment.indexOf(get_editobj);

    comment.splice(index, 1);

    localStorage.setItem("comments", JSON.stringify(comment));

    location.reload();

    //catch statement
  } catch (error) {
    console.error("Error" + error);
  }
}

// accordian code function start
let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    try {
      this.classList.toggle("active");
      let panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }

      //catch statement
    } catch (error) {
      console.error("Error" + error);
    }
  });
}

// accordian code function end
