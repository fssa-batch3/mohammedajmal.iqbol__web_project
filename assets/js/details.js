
//course data JSON parse  
const course_data = JSON.parse(localStorage.getItem("course_data"));
console.log(course_data);

//url params start
const url = window.location.search;
const urlParams = new URLSearchParams(url);
const username = urlParams.get("name");
console.log(username);

// find object from matching title
const get_obj = course_data.find((event) =>  event.title === username );

console.log(get_obj);


//card create and show the card data here
let details_div;

details_div = document.createElement("div");
details_div.setAttribute("class","course-div");
details_div.innerHTML = `<div class="course-image">
           <img src=${get_obj["img"]} alt="" class="course-image">
       </div>
       <div>
       <div class="course-price">
           <p class="course-cost">${ "₹" + " " + get_obj["cost"]}</p>
           <strike class="course-oldcost">${ "₹" + " " + get_obj["old_cost"]}</strike>
           <p class="course-discount">${ 100 - ((get_obj["cost"])  / (get_obj["old_cost"]) * 100)  + " " + "% discount"  }</p>
       </div>
       <p class="days-left"><span class="days-left-span">30 days</span>&nbsp;left at this price!</p>
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


 detail_div = document.createElement("div");
 detail_div.setAttribute("class","course-detail-right");
 detail_div.innerHTML = ` <div>
        <h1 class="course-h1">Course details</h1><br>
        <h1 class="course-h1">Course Title :</h1>
        <p class="course-title">${get_obj["title"]}</p>
        <div class="course-detail-time">
        <p class="course-detail"><b>Course Timing</b>  <br><br>${get_obj["timing"]}</p>
        <p class="course-detail"><b>Course Language</b>  <br><br>${get_obj["language"]}</p>
        <p class="course-detail"><b>Students Intake</b>  <br><br>${get_obj["enrolled"]} Per Batch</p>
        <p class="course-detail"><b>Course Cost</b>  <br><br>${get_obj["cost"]}</p>
         </div>


     </div>

        <h1 class="learn-couse">What you'll learn from this course</h1>
    
        <ul class="list-learnings">
          <h2 class="list-learning">Course Description</h2>
        <p>${get_obj["Description"]}</p>
          <br>
          <h2 class="list-learning">${get_obj["top_skills1"][0]}</h2>
          <li class="list-learning">${get_obj["top_skills1"][1]}</li>
          <li class="list-learning">${get_obj["top_skills1"][2]}</li>
          <li class="list-learning">${get_obj["top_skills1"][3]}</li>
          <li class="list-learning">${get_obj["top_skills1"][4]}</li>
          <li class="list-learning">${get_obj["top_skills1"][5]}</li>
          <li class="list-learning">${get_obj["top_skills1"][6]}</li>
          <li class="list-learning">${get_obj["top_skills1"][7]}</li>
          <li class="list-learning">${get_obj["top_skills1"][8]}</li>
          <li class="list-learning">${get_obj["top_skills1"][9]}</li>
        </ul>
        

        
        
        <ul class="list-learnings">
          <br>
          <h2 class="list-learning">Highlights</h2>
          <li class="list-learning">100% worth of money</li>
          <li class="list-learning">You will get a certificate once you completed the course</li>
          <li class="list-learning">You always get 24/7 Chat Support</li>
          <li class="list-learning">Participate the Live trading session</li>
        </ul><br>
        
        
        <h1>&emsp;Start Course</h1><br>
        <button class="accordion">Beginner level-1 Module</button>
<div class="panel">
<a href="videoplayer.html?link=${get_obj["videos"]}" onclick="openFile(event)"><li class="begginer-module">Introduction</li></button>
<a href="videoplayer.html?link=${get_obj["videos"]}" onclick="openFile(event)"><li class="begginer-module">Basics about Trading</li></a>
<a href="videoplayer.html?link=${get_obj["videos"]}" onclick="openFile(event)"><li class="begginer-module">What is Stock</li></a>
<a href="videoplayer.html?link=${get_obj["videos"]}" onclick="openFile(event)"><li class="begginer-module">How to Analyze a Stock</li></a>
<a href="videoplayer.html?link=${get_obj["videos"]}" onclick="openFile(event)"><li class="begginer-module">How to setup trading account</li></a>
</div>

<button class="accordion">Beginner level-2 Module</button>
<div class="panel">
<a href="${get_obj["videos"]}" ><li class="begginer-module">Introduction</li></a>
<a href="${get_obj["videos"]}" ><li class="begginer-module">Basics about Trading</li></a>
<a href="${get_obj["videos"]}" ><li class="begginer-module">What is Stock</li></a>
<a href="${get_obj["videos"]}" ><li class="begginer-module">How to Analyze a Stock</li></a>
<a href="${get_obj["videos"]}" ><li class="begginer-module">How to setup trading account</li></a>
</div>

<button class="accordion">Beginner level-3 Module</button>
<div class="panel">
<a href="${get_obj["videos"]}" ><li class="begginer-module">Introduction</li></a>
<a href="${get_obj["videos"]}" ><li class="begginer-module">Basics about Trading</li></a>
<a href="${get_obj["videos"]}" ><li class="begginer-module">What is Stock</li></a>
<a href="${get_obj["videos"]}" ><li class="begginer-module">How to Analyze a Stock</li></a>
<a href="${get_obj["videos"]}" ><li class="begginer-module">How to setup trading account</li></a>
</div>
<button class="accordion">Intermediate Module</button>
<div class="panel">
<a href="${get_obj["videos"]}" ><li class="begginer-module">Introduction</li></a>
<a href="${get_obj["videos"]}" ><li class="begginer-module">Basics about Trading</li></a>
<a href="${get_obj["videos"]}" ><li class="begginer-module">What is Stock</li></a>
<a href="${get_obj["videos"]}" ><li class="begginer-module">How to Analyze a Stock</li></a>
<a href="${get_obj["videos"]}" ><li class="begginer-module">How to setup trading account</li></a>
</div>

<button class="accordion">Advanced Module</button>
<div class="panel">
<a href="#" ><li class="begginer-module">Introduction</li></a>
<a href="#" ><li class="begginer-module">Basics about Trading</li></a>
<a href="#" ><li class="begginer-module">What is Stock</li></a>
<a href="#" ><li class="begginer-module">How to Analyze a Stock</li></a>
<a href="#" ><li class="begginer-module">How to setup trading account</li></a>
</div>

<button class="accordion">Expert Module</button>
<div class="panel">
<a href="#" ><li class="begginer-module">Introduction</li></a>
<a href="#" ><li class="begginer-module">Basics about Trading</li></a>
<a href="#" ><li class="begginer-module">What is Stock</li></a>
<a href="#" ><li class="begginer-module">How to Analyze a Stock</li></a>
<a href="#" ><li class="begginer-module">How to setup trading account</li></a><br>
</div>

`;
  
        document.querySelector(".what-you-learn").append(detail_div);


     



//add to cart  function start
let addtocart = document.getElementById("add-to-cart");
addtocart.addEventListener("click",(cart) => {
cart.preventDefault();

// add to card array JSON parse
const addtocard_arr = JSON.parse(localStorage.getItem("add-to-card"));
console.log(addtocard_arr);
console.log(get_obj);

// find object from match id
const varobj = addtocard_arr.find((e) => e.id === get_obj.id );
    console.log(varobj);

// check if else by cost
if(get_obj["cost"] != "learn for free"){
  alert("You have to make Payment to Access the Course");
  window.location.href = "coursePayment.html?name="+ username;
} else {



    //  alert("course already added");
    
    
    if(localStorage.getItem("add-to-card") !== null ){
      
      addtocartarr = JSON.parse(localStorage.getItem("add-to-card"));
      
   if(varobj == undefined ){
    
    addtocartarr.push(get_obj);
    addtocart.innerHTML = "Course Added";
    console.log(addtocartarr);

localStorage.setItem("add-to-card",JSON.stringify(addtocartarr));
  window.location.href = "learn.html";
   } else {
    alert("course already added");
    window.location.href = "learn.html";

   }
      // addtocartarr.push(get_obj);

      
  

} else {

  let addtocartarr = [];
  

      addtocartarr.push(get_obj);

      addtocart.innerHTML = "Course Added";

  
  localStorage.setItem("add-to-card",JSON.stringify(addtocartarr));
  
}




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

//JSON parse mycourses
const mycourses = JSON.parse(localStorage.getItem("add-to-card")); 
console.log(mycourses);


// URL Params
const urls = window.location.search;
const urlparams = new URLSearchParams(urls);
const usernames = urlParams.get("name");
console.log(usernames);


//find clicked course by find method
const get_mycourses = mycourses.find((course) => course.title === usernames );
console.log(get_mycourses);


// delete course eventlistener when click
let delete_mycourses = document.getElementById("deletecourse");
delete_mycourses.addEventListener("click",(deletecourse) => {
deletecourse.preventDefault();

// find clicked index from mycourses array
const index = mycourses.indexOf(get_mycourses);
console.log(index);

// confirm message when click delete button
let msg = confirm("Are you sure You want to delete this course from My Courses");
if(msg != true ){
return false;
} else {

    //if message == true do this
mycourses.splice(index,1);
localStorage.setItem("add-to-card",JSON.stringify(mycourses));
window.location.href = "learn.html";

}


});



//delete course from bookmarks


//bookmark JSON parse from localstorage
const bookmark = JSON.parse(localStorage.getItem("bookmarks"));
console.log(bookmark);

//find bookmarrk object by title
const get_bookmark = bookmark.find((course) => course.title === usernames );
console.log(get_bookmark);


// delete bookmark from bookmark tab
let delete_bookmark = document.getElementById("deletebookmark");

//delete bookmark when click button
delete_bookmark.addEventListener("click",(deletecourse) => {
deletecourse.preventDefault();

// find index by match object from bookmark
const index = bookmark.indexOf(get_bookmark);
console.log(index);

//confirm message to remove bookmark
let msg = confirm("Are you sure You want to Remove this course from Your Bookmarks");
if(msg != true ){
return false;
} else {

    //if message true then do this
bookmark.splice(index,1);
localStorage.setItem("bookmarks",JSON.stringify(bookmark));
window.location.href = "learn.html";
}


});

// parse register array JSON
const register_arr = JSON.parse(localStorage.getItem("register_arr"));
 console.log(register_arr);

 // parse login array JSON
 const login =JSON.parse(localStorage.getItem("login_arr"));
console.log(login);

// get user profile from user login
const get_objs = register_arr.find((Reg) => login == Reg["email"] );
console.log(get_objs);

document.getElementById("user-profile").src = get_objs.profile_pic;

//  console.log(get_objs.email);


// comment array parse JSON
const comment = JSON.parse(localStorage.getItem("comments"));

// comment card create when clicks 
let createcomment = document.getElementById("submit-comment");
createcomment.addEventListener("click", event => {
event.preventDefault();


const comment_input = document.getElementById("comment-input").value;
console.log(comment_input);



const comment_value = document.getElementById("comment-letters");

// if array not null do this
if(localStorage.getItem("comments") != null ){
comment_arr = JSON.parse(localStorage.getItem("comments"));

let comment_input = document.getElementById("comment-input").value;
let comment_id = Date.now();
let user_id = get_objs.user_id;

let comment_obj = {
comment_input, comment_id , user_id
};


//push obj into arr
comment_arr.push(comment_obj);

//local set comments
localStorage.setItem("comments",JSON.stringify(comment_arr));
location.reload();

} else {

    //else create an array
const comment_arr = [];

let comment_input = document.getElementById("comment-input").value;
let comment_id = Date.now();
let user_id = get_objs.user_id;

let comment_obj = {
comment_input, comment_id , user_id
};

//comment push
comment_arr.push(comment_obj);

//localstorage set comments
localStorage.setItem("comments",JSON.stringify(comment_arr));

}

});




// comment card create
let comment_div;
let comment_p;

for(let i=0;i<comment.length;i++){


 
 comment_div = document.createElement("div");
 comment_div.setAttribute("class","comment-1");
 comment_div.setAttribute("id","comment-1");

  //user id same means edit delete button display block
  if( comment[i]["user_id"] === get_objs.user_id  ){
    comment_div.innerHTML = `<div class="comment-img">
    <img class="profile-img_block" id="profile-pic" src=${get_objs.profile_pic}>
    <p class="comment-letters" id="comment-letters">${comment[i]["comment_input"]}</p>
    <button class="comment-edit-delete1_block" id="comment-edit-delete1" onclick="edit(${comment[i]["comment_id"]})">Edit</button>
    <button class="comment-edit-delete3" id="comment-edit-delete3">Edited</button>
    <button class="comment-edit-delete2_block" id="comment-edit-delete2" onclick="deletecomment(${comment[i]["comment_id"]})">Delete</button>
    </div>`;
    // onclick=`+comment[i]["comment_id"]+`
    console.log(comment[i]["comment_input"]);


} 

else{
 //user id same means edit delete button display none
comment_div.innerHTML = `<div class="comment-img">
    <img class="profile-img_block" id="profile-pic" src="">
    <p class="comment-letters" id="comment-letters">${comment[i]["comment_input"]}</p>
    <button class="comment-edit-delete1_none" id="comment-edit-delete1" onclick="edit(${comment[i]["comment_id"]})">Edit</button>
    <button class="comment-edit-delete3" id="comment-edit-delete3">Edited</button>
    <button class="comment-edit-delete2_none" id="comment-edit-delete2" onclick="deletecomment(${comment[i]["comment_id"]})">Delete</button>
    </div>`;

  }

document.querySelector("#new-comments").append(comment_div);

};


//if else for show comments
console.log(comment);

let editObj;
//edit function new popup div
function edit(a) {
document.querySelector(".course-container").style.opacity = "0.7";
document.querySelector("body").style.backgroundColor = "black";
 document.getElementById("edit-comment").style.display = "block";
 document.getElementById("edit-comment").style.opacity = "1";
 console.log(a);
 const get_editobj = comment.find((e) => e.comment_id === a );
console.log(get_editobj);
console.log(get_editobj["comment_input"]);

const input = document.getElementById("comment-edit");
input.value = get_editobj["comment_input"];

//  console.log(input);

// return get_editobj;
editObj = get_editobj;




}

function backedit() {
document.getElementById("edit-comment").style.display = "none";
document.querySelector(".course-container").style.opacity = "1";
document.querySelector("body").style.backgroundColor = "#F6F8FC";
}



// function after click submit button 
function submitedit() {


// editSubmit(editObj);
let comment_input = document.getElementById("comment-edit").value;
let comment_id = editObj["comment_id"];
let user_id = editObj["user_id"];

const obj = {
  comment_input,comment_id,user_id
};

console.log(obj);

let edit_assign = Object.assign(editObj,obj);
console.log(edit_assign);

const index = comment.indexOf(editObj);
console.log(index);


comment[index] = edit_assign;

localStorage.setItem("comments", JSON.stringify(comment));


location.reload();



};

// to get return vslue from edit function
function editSubmit(editObj){
console.log(editObj);
}


// delete comment function when click delete button
function deletecomment(a) {

const get_editobj = comment.find((e) => e.comment_id === a );
console.log(get_editobj);

const index = comment.indexOf(get_editobj); 
console.log(index);

comment.splice(index,1);

localStorage.setItem("comments",JSON.stringify(comment));

location.reload();


};





//enter button js
let input = document.getElementById("comment-input");
input.addEventListener("keypress", (event) => {

if( event.key === "Enter"){
  event.preventDefault();
  document.getElementById("submit-comment").click();
}

}); 



//openfile function 
// to read user local file or video or image
        //file video reader
    let openFile = function(event) {
  let input = event.target;

  let reader = new FileReader();
  reader.onload = function(){
    let dataURL = reader.result;
    let output = document.getElementById('video');
    let output2 = document.getElementById('video1');
    output.src = dataURL;
    output2.src = dataURL;
  };
  reader.readAsDataURL(input.files[0]);
};

// video or image file reader code end


// accordian code function start
var acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

// accordian code function end