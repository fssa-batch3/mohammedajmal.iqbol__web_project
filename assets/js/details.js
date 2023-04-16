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
let cost = "";
let discount = "";

if (get_obj["cost"] === "learn for free") {
  cost += " ";
  discount += 100;
} else {
  cost += "₹" + " ";
  discount +=
    100 - (get_obj["cost"] / get_obj["old_cost"]) * 100;
};
details_div.innerHTML = `<div class="course-image">
           <img src=${get_obj["img"]} alt="" class="course-image">
       </div>
       <div>
       <div class="course-price">
           <p class="course-cost">${ cost + " " + get_obj["cost"]}</p>
           <strike class="course-oldcost">${ "₹" + " " + get_obj["old_cost"]}</strike>
           <p class="course-discount">${ Math.floor(discount) + " " + "% discount"  }</p>
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



let register = JSON.parse(localStorage.getItem("register_arr"));
 console.log(register);

 let loggin = JSON.parse(localStorage.getItem("login_arr"));
 console.log(loggin);

 const get_user_obj = register.find((event) => event.email === loggin);
 console.log(get_user_obj);

 let index = register.indexOf(get_user_obj);
 console.log(index);

//  for(let i=0;i<register[index]["courses"].length;i++){

  

//  }

     

        console.log(get_obj);



        //check ID is already exist

//add to cart  function start
let addtocart = document.getElementById("add-to-cart");
addtocart.addEventListener("click",(cart) => {
cart.preventDefault();


  try {


// check if else by cost
if(get_obj["cost"] != "0" ){
  alert("You have to make Payment to Access the Course");
  window.location.href = "coursePayment.html?name="+ username;
} else {

  let registerArr = JSON.parse(localStorage.getItem("register_arr"));
  console.log(registerArr);

  let loggin = JSON.parse(localStorage.getItem("login_arr"));
  console.log(loggin);

  const get_user_obj = registerArr.find((event) => event.email === loggin);
  console.log(get_user_obj);

  let index = registerArr.indexOf(get_user_obj);
  console.log(index);

  //find index 
  let index1 = registerArr.indexOf(get_user_obj);
  console.log(index1);




      //add to card user 

      const register_arr = JSON.parse(localStorage.getItem("register_arr"));
console.log(register_arr);




       
      if( register_arr[index].courses != null ) {   
 
        let courses_id = {
             "obj" : get_obj,
             "isCoursePurchased" : true,
        } 
    
    //     //check match is true / false
    //     let objMatch = false;
    //   for(let i=0;i< mycourses.length;i++){
    //   for(let j = 0; j < register_arr[index].courses.length; j++ ){
    //   if( mycourses[i]["id"] !== register_arr[index].courses[j]["id"] ){
        
    //     //check mycourses === register/courses array
    //     objMatch = true;
    
    //   } 
    // }
    
    console.log(get_obj);
    // };

    // find object from match id
const varobj = register_arr[index]['courses'].find((e) => e.obj.id === get_obj.id );
console.log(varobj);
    
    //checked it should return true
    
       if( varobj === undefined ){
        
        // alert("this course is already purchased by you");
        registerArr[index].courses.push(courses_id);
        localStorage.setItem("register_arr",JSON.stringify(registerArr));
        //skip this part
       
           alert("course added to my courses");

       } else {
        //skip part
        alert("you already added this course to my courses");
        
       } 
    
    } else {
      let course_obj = [];
    
      let courses_id = {
             "obj" : get_obj,
             "isCoursePurchased" : true,
        } 
      
      course_obj.push(courses_id);
              
      let user_obj = {
      "courses" : course_obj,
      };
    
      let user_id_assign = Object.assign(get_user_obj,user_obj);
      console.log(user_id_assign);
      
      let index1 = registerArr.indexOf(get_user_obj);
      console.log(index1);
      
      registerArr[index] = user_id_assign;
      
      localStorage.setItem("register_arr",JSON.stringify(registerArr));

      alert("course added to my courses");
      
    }
    

       window.location.href = "learn.html";

}


  

    //catch statement
}  catch (error) {

  console.log("Error" + error);

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
console.log(usernames);


// console.log(register[index1]);

// delete course eventlistener when click
let delete_mycourses = document.getElementById("deletecourse");
delete_mycourses.addEventListener("click",(deletecourse) => {
deletecourse.preventDefault();


 try {


//JSON parse mycourses
let register = JSON.parse(localStorage.getItem("register_arr")); 
console.log(register);

let loggin = JSON.parse(localStorage.getItem("login_arr")); 
console.log(loggin);

const get_user_obj = register.find((event) => event.email === loggin);
console.log(get_user_obj);


let indexx = register.indexOf(get_user_obj);
console.log(indexx);

//find clicked course by find method
const get_mycourses = register[indexx].courses.find((course) => course.obj.title === usernames );
console.log(get_mycourses);

// find clicked index from mycourses array
let index = register[indexx].courses.indexOf(get_mycourses);
console.log(index);


//find index 
let index1 = register.indexOf(get_user_obj);
console.log(index1);

//courses id splice find object




// confirm message when click delete button
let msg = confirm("Are you sure You want to delete this course from My Courses");
if(msg != true ){
return false;
} else {


  

// let user_obj = {
//   "user_id" : null,
// };

// let user_id_assign = Object.assign(get_obj,user_obj);
// console.log(user_id_assign);

// let index = course_data.indexOf(get_obj);
// console.log(index);

// course_data[index] = user_id_assign;

// localStorage.setItem("course_data",JSON.stringify(course_data));

// register[index1].courses.splice(index1,1);

    // //if message == true do this
    // mycourses.splice(index,1);
    // localStorage.setItem("add-to-card",JSON.stringify(mycourses));
   
    

  let getObjs = register[index1].courses.find((event) => event.obj.id === get_mycourses.obj.id );
  console.log(getObjs);


  let findValIndex = register[index1].courses.indexOf(getObjs);
  console.log(findValIndex);

  register[index1].courses.splice(findValIndex,1);
  localStorage.setItem("register_arr",JSON.stringify(register));




  alert("Course Removed to My Courses");


}






window.location.href = "learn.html";



   //catch statement
}  catch (error) {

  console.log("Error" + error);

}

});






//delete course from bookmarks




// delete bookmark from bookmark tab
let delete_bookmark = document.getElementById("deletebookmark");

//delete bookmark when click button
delete_bookmark.addEventListener("click",(deletecourse) => {
deletecourse.preventDefault();

 try {

//bookmark JSON parse from localstorage
let register = JSON.parse(localStorage.getItem("register_arr"));
console.log(register);


let loggin = JSON.parse(localStorage.getItem("login_arr")); 
console.log(loggin);

const get_user_obj = register.find((event) => event.email === loggin);
console.log(get_user_obj);

let index1 = register.indexOf(get_user_obj);
console.log(index1);

//find bookmarrk object by title
const get_bookmark = register[index1].bookmarks.find((course) => course.obj.title === usernames );
console.log(get_bookmark);

//find bookmark obj with course_data
const get_course = course_data.find((course) => course.title === usernames );
console.log(get_course);


// find index by match object from course_data
const course_index = course_data.indexOf(get_course);
console.log(course_index);

// find index by match object from bookmark
const index = register[index1].bookmarks.indexOf(get_bookmark);
console.log(index);

//confirm message to remove bookmark
let msg = confirm("Are you sure You want to Remove this course from Your Bookmarks");
if(msg != true ){
return false;
} else {

//find index 
let index1 = register.indexOf(get_user_obj);
console.log(index1);

//remove bookmark id from bookmark key in user object 

let getObjs = register[index1].bookmarks.find((event) => event.obj.id === get_bookmark.obj.id );
console.log(getObjs);


let findValIndex = register[index1].bookmarks.indexOf(getObjs);
console.log(findValIndex);

register[index1].bookmarks.splice(index,1);
localStorage.setItem("register_arr",JSON.stringify(register));




//if message true then do this
// bookmark.splice(index,1);
// localStorage.setItem("bookmarks",JSON.stringify(bookmark));


let bookmark_obj = {
  bookmark_img : "../assets/images/icons8-add-bookmark-50.png",
};

//assign this source with previous source
let assignObj = Object.assign(get_course,bookmark_obj);
console.log(assignObj);

//assign new value to old one
course_data[course_index] = assignObj;

//set new value to localstorage
localStorage.setItem("course_data",JSON.stringify(course_data));

window.location.href = "learn.html";


}

  //catch statement
}  catch (error) {

  console.log("Error" + error);

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





// comment card create when clicks 
let createcomment = document.getElementById("submit-comment");
createcomment.addEventListener("click", event => {
event.preventDefault();

try {


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
let comment_arr = [];

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

  //catch statement
}  catch (error) {

  console.log("Error" + error);

}

});




// comment card create
let comment_div;
let comment_p;

// comment array parse JSON
const comment = JSON.parse(localStorage.getItem("comments"));


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

  try {

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


  //catch statement
}  catch (error) {

  console.log("Error" + error);

}



}

function backedit() {

  try {

document.getElementById("edit-comment").style.display = "none";
document.querySelector(".course-container").style.opacity = "1";
document.querySelector("body").style.backgroundColor = "#F6F8FC";

  //catch statement
}  catch (error) {

  console.log("Error" + error);

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

  //catch statement
}  catch (error) {

  console.log("Error" + error);

}



};

// to get return vslue from edit function
function editSubmit(editObj){
console.log(editObj);
}


// delete comment function when click delete button
function deletecomment(a) {

  try {

const get_editobj = comment.find((e) => e.comment_id === a );
console.log(get_editobj);

const index = comment.indexOf(get_editobj); 
console.log(index);

comment.splice(index,1);

localStorage.setItem("comments",JSON.stringify(comment));

location.reload();

   //catch statement
}  catch (error) {

  console.log("Error" + error);

}


};


//link to watch videos
if(register[index]["courses"] !== null){

  console.log("hii");

  let detail_div;

  let arr;
  
let findcoursepurchased = register[index]["courses"].filter((item) => item.isCoursePurchased === true);
console.log(findcoursepurchased);

  if(findcoursepurchased.length !== 0 ){
       
    arr = [get_obj["courseVideo1"],get_obj["courseVideo2"],get_obj["courseVideo3"],get_obj["courseVideo4"],get_obj["courseVideo5"],get_obj["courseVideo6"],get_obj["courseVideo7"],get_obj["courseVideo8"],get_obj["courseVideo9"]];
    console.log(arr);

  } else {
  
    arr = ["#","#","#","#","#","#","#","#","#"];
    console.log(arr);

  }

  console.log(arr);


  

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
        <button class="accordion">Beginner's Module</button>
<div class="panel">
<a class="course-links" id="course-links1"  href="${arr[0]}" onclick="openFile(event)"><li class="begginer-module">${get_obj["courseVideoName1"]}</li></button>
<a class="course-links" href="${arr[1]}" target="_blank" onclick="openFile(event)"><li class="begginer-module">${get_obj["courseVideoName2"]}</li></a>
<a class="course-links" href="${arr[2]}" target="_blank" onclick="openFile(event)"><li class="begginer-module">${get_obj["courseVideoName3"]}</li></a>
</div>

<button class="accordion">Intermediate Module</button>
<div class="panel">
<a class="course-links" href="${arr[3]}"  target="_blank" ><li class="begginer-module">${get_obj["courseVideoName4"]}</li></a>
<a class="course-links" href="${arr[4]}"  target="_blank" ><li class="begginer-module">${get_obj["courseVideoName5"]}</li></a>
<a class="course-links" href="${arr[5]}"  target="_blank" ><li class="begginer-module">${get_obj["courseVideoName6"]}</li></a>
</div>

<button class="accordion">Advanced Module</button>
<div class="panel">
<a class="course-links" href="${arr[6]}"  target="_blank" ><li class="begginer-module">${get_obj["courseVideoName7"]}</li></a>
<a class="course-links" href="${arr[7]}"  target="_blank" ><li class="begginer-module">${get_obj["courseVideoName8"]}</li></a>
<a class="course-links" href="${arr[8]}"  target="_blank" ><li class="begginer-module">${get_obj["courseVideoName9"]}</li></a>
</div>


`;

  
        document.querySelector(".what-you-learn").append(detail_div);


        

} else {
  console.log("bii");
}















//enter button js
let input = document.getElementById("comment-input");
input.addEventListener("keypress", (event) => {

  try {

if( event.key === "Enter"){
  event.preventDefault();
  document.getElementById("submit-comment").click();
}

   //catch statement
}  catch (error) {

  console.log("Error" + error);

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

    try {

    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }

      //catch statement
}  catch (error) {

  console.log("Error" + error);

}

  });
}

// accordian code function end