
//get parsed local array
let register_arr = JSON.parse(localStorage.getItem("register_arr"));
console.log(register_arr);

let login_arr = JSON.parse(localStorage.getItem("login_arr"));
console.log(login_arr);

//user object
let findUser = register_arr.find(user => user.email == login_arr);
console.log(findUser);

console.log(findUser["about_me"]);

//calculate age from dob
let birthDate = findUser["date_of_birth"];

function calculateAge(birthDate) {
  const today = new Date();
  const birth = new Date(birthDate);
  let age = today.getFullYear() - birth.getFullYear();
  const month = today.getMonth() - birth.getMonth();
  const day = today.getDate() - birth.getDate();

  if (month < 0 || (month === 0 && day < 0)) {
    age--;
  }

  return age;
}

//dynamic profile page
let section;


 section = document.createElement("section");
 section.setAttribute("class","section-head");
 section.innerHTML = `<div class="profilecontainer">
 <div>
  <img id="userprofile-img" src=${findUser["profile_pic"]} alt="">
  <button class="editbtn" id="editbtn" type="button">EDIT PROFILE</button>
  <button class="delbtn" id="delbtn" type="button">DELETE PROFILE</button>
  &nbsp;<button class="delUserProfile" id="delUserProfile" type="button">DELETE USER PROFILE PIC</button>
  &nbsp;<button class="logout" id="logout" type="button">LOG OUT</button>
 </div>
 <div class="username-city">
     <h1>${findUser["name"]}</h1>
     <p>${findUser["email"]}</p>
 </div>
</div>

<div class="section2">
<br>


</div>

<div class="section-about-head">
 <h1>About</h1>
  <div class="section-about">
     <div>
       <textarea name="about" type="text"  id="about" disabled  >${findUser["about_me"]}</textarea><br>
       <input name="about" type="text" id="address" value="${findUser["address"]}" disabled ><br>
     </div>
     <div>
       <input name="about" type="date" id="date" value="${findUser["date_of_birth"]}" disabled  ><br>
       <input name="about" type="text"id="gender" value="${findUser["gender"]}" disabled  ><br>
       <input name="editprofile" type="file" id="editprofile" /><br>
     </div>
     <div>
         <input name="about" type="number" id="number" value="${findUser["mobile_number"]}" disabled  ><br>
         <input name="age" type="number" id="age" value="${calculateAge(birthDate)}" disabled  ><br>
         <button type="submit" id="edit" name="edit">Submit</button>
     </div>

  </div>
</div>`;

document.querySelector(".header").append(section);


//profile pic name show
document.getElementById("userprofile-img").style.borderRadius = '20px';



//edit button
let editbtn = document.getElementById("editbtn");
editbtn.addEventListener("click",(event) => {
event.preventDefault();

document.getElementById("about").disabled = false;
document.getElementById("address").disabled = false;
document.getElementById("date").disabled = false;
document.getElementById("age").disabled = true;
document.getElementById("gender").disabled = false;
document.getElementById("number").disabled = false;
document.getElementById("editprofile").style.display = "block";


})


//local image to http link image
let cloudinaryData;
//file input from user local to cloud storage and link generate
const fileInput = document.getElementById('editprofile');
fileInput.addEventListener('change', () => {
  const file = fileInput.files[0];

  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', 'ml_default'); // Replace with your upload preset name
let x;
  fetch('https://api.cloudinary.com/v1_1/dwkjxihmr/auto/upload', {
    method: 'POST',
    body: formData,
  })
    .then(response => response.json())
    .then(data => {
      
      x = data;

      cloudinaryData = x.url; 
      console.log(cloudinaryData);
      
    })
    .catch(error => console.error(error));
});



//edit done
let editedbtn = document.getElementById("edit");
editedbtn.addEventListener("click",(event) => {
event.preventDefault();

let datas;
if(cloudinaryData !== undefined){
  datas = cloudinaryData;
} else {
  datas = findUser["profile_pic"];
}

document.getElementById("about").disabled = true;
document.getElementById("address").disabled = true;
document.getElementById("date").disabled = true;
document.getElementById("age").disabled = true;
document.getElementById("gender").disabled = true;
document.getElementById("number").disabled = true;
document.getElementById("editprofile").style.display = "none";


let about_me = document.getElementById("about").value;
let address = document.getElementById("address").value;
let date_of_birth = document.getElementById("date").value;
let gender = document.getElementById("gender").value;
let mobile_number = document.getElementById("number").value;
let profile_pic = datas;


let newUserObj = {
    about_me,
    address,
    date_of_birth,
    gender,
    mobile_number,
    profile_pic
}; 

  let assignUserObj = Object.assign(findUser,newUserObj);
  console.log(assignUserObj);

  let index = register_arr.indexOf(findUser);
  console.log(index);


  register_arr[index] = assignUserObj;


  localStorage.setItem("register_arr",JSON.stringify(register_arr));

  alert("Profile Edited Successsfully");

  location.reload();
//   window.location.href = "../index2.html";
});


//delete user profile
//edit done
let delbtn = document.getElementById("delbtn");
delbtn.addEventListener("click",(event) => {
event.preventDefault();

let msg = confirm("Are you sure You want to Delete Your User Profile");

if(msg === true) {

    let index = register_arr.indexOf(findUser);
    console.log(index);

    register_arr.splice(index,1);

    localStorage.setItem("register_arr",JSON.stringify(register_arr));

    alert("UserProfile Successfully Deleted");

    let newWindow = window.open("../index.html","_blank","noopener,noreferrer");
    window.close();
    newWindow.focus();

}

});




//delete user profile
let deleteUserProfile = document.getElementById("delUserProfile");
deleteUserProfile.addEventListener("click", (event) => {
  event.preventDefault();

  //try statement start
  try {

    let new_obj = {
      profile_pic: `https://ui-avatars.com/api/?name=${findUser["name"]}&background=random`,
    };
  console.log(new_obj.profile_pic);
    //assign data
    let assign_data = Object.assign(findUser, new_obj);

    console.log(assign_data);

    let index = register_arr.indexOf(findUser);
    console.log(index);

    
    register_arr[index] = assign_data;

    localStorage.setItem("register_arr", JSON.stringify(register_arr));
    alert("your changes have been changed");
    location.reload();

    //catch catches the error
  } catch (error) {
    console.error("Error" + error);
  }
});




const fileInput1 = document.getElementById('editprofile');
const loadingDiv = document.getElementById("loading");
const body = document.getElementById("body");
const container = document.getElementById("container");

fileInput1.addEventListener("change", function() {
  loadingDiv.style.display = "block"; // Show loading div
  body.style.backgroundColor = "white";
  container.style.backgroundColor = "white";
  setTimeout(function() {
    loadingDiv.style.display = "none"; // Hide loading div after 5 seconds
    body.style.backgroundColor = "white";
    container.style.backgroundColor = "white";
  }, 4500);
});



//logout function

let logout = document.getElementById("logout");
logout.addEventListener("click",(event) => {
event.preventDefault();

let confirmlogout = confirm("Are You Sure You Want to LogOut ?");

if(confirmlogout === true ){

localStorage.removeItem("login_arr");

//new tab with back option in browser.
let newWindow = window.open("../index.html", "noopener,noreferrer");
window.close();
newWindow.focus();

}

});


// {/* <div class="followlist">
//  <div class="followcount-title">
//      <p>&nbsp;10</p>
//      <p class="follows-title">Todo's</p>
//  </div>

//  <div class="followcount-title">
//      <p>2500</p>
//      <p class="follows-title">Followers</p>
//  </div>

//  <div class="followcount-title">
//      <p>5110</p>
//      <p class="follows-title">Following</p>
//  </div>

// </div> */}
