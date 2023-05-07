//seller profile page js code start

let seller_profile;

seller_profile = document.createElement("div");
seller_profile.setAttribute("class", "row");
seller_profile.innerHTML = ` 
<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xs-offset-0 col-sm-offset-0 col-md-offset-3 col-lg-offset-3 toppad">
<div class="panel panel-primary">
  <div class="panel-heading">
    <h1>Seller Profile</h1>
    <span class="hint--bottom hint--info hint--rounded" aria-label="User Name"><input type="text" class="panel-title" id="panel-title" disabled /></span>
  </div>&emsp;
  <form class="panel-body" id="form">
    <div class="row">
      <div class="col-md-3 col-lg-3 " > <span class="hint--bottom hint--info hint--rounded" aria-label="User Profile"><img alt="User Pic" id="profile-pic"  class="img-circle img-responsive"></span>
        </div>
      <div class=" col-md-9 col-lg-9 " id="form"><br><br>
        <table class="table table-user-information">
          <tbody>
            <tr>
              <td>Age :</td>
              <td><input  id="panel-age" type="number" disabled ></td>
            </tr>
            <tr>
              <td>About Me:</td>
              <td><input id="panel-about" type="text" disabled ></td>
            </tr>
            <tr>
              <td>Date of Birth</td>
              <td id="panel-dob"></td>
            </tr>
            <tr>
              <tr>
                <td>Gender</td>
                <td ><input id="panel-gender" type="text" disabled ></td>
              </tr>
              <tr>
                <td>Home Address</td>
                <td>Street in, State</td>
              </tr>
              <tr>
                <td>Email</td>
                <td><input  id="panel-email" type="email" disabled ></td>
              </tr>
              <td>Phone Number</td>
              <td><input  id="panel-number" type="number" disabled >
              </td>
            </tr>
            <tr>
                <td id="panel-editprofile">New Profile Link</td>
                <td><input  id="panel-editprofile1" type="file" required /></td>
              </tr>
            <tr>
              <td><span class="hint--bottom hint--info hint--rounded" aria-label="Edit Profile"><button type="button"  class="edit" id="edit" >Edit</button></span></td>
              <td><span class="hint--bottom hint--info hint--rounded" aria-label="Delete Profile"><button type="submit" class="delete" id="delete">Delete</button></span></td>
            </tr>
            <tr>
              <td><span class="hint--bottom hint--info hint--rounded" aria-label="Edited Done"><button type="button"  class="edit" id="done" onsubmit="edit()" >Done</button></span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </form>
</div>
</div>
     `;

document.querySelector(".container").append(seller_profile);

const seller_register_arr = JSON.parse(
  localStorage.getItem("seller_register_arr")
);
console.log(seller_register_arr);
const seller_login = JSON.parse(localStorage.getItem("seller_login_arr"));
console.log(seller_login);

let get_obj = seller_register_arr.find((Reg) => seller_login == Reg["email"]);

console.log(get_obj);

const username = document.getElementById("panel-title");
const age = document.getElementById("panel-age");
const profile_pic = document.getElementById("profile-pic");
const about_me = document.getElementById("panel-about");
const date_of_birth = document.getElementById("panel-dob");
const gender = document.getElementById("panel-gender");
const email = document.getElementById("panel-email");
const phone_number = document.getElementById("panel-number");

username.value = get_obj["name"];
age.value = get_obj["age"];
profile_pic.src = get_obj["profile_pic"];
about_me.value = get_obj["about_me"];
date_of_birth.innerHTML = get_obj["date_of_birth"];
gender.value = get_obj["gender"];
email.value = get_obj["email"];
phone_number.value = get_obj["mobile_number"];

document.getElementById("done").style.display = "none";

//read finished

//edit user

let edit = document.getElementById("edit");
edit.addEventListener("click", (event) => {
  event.preventDefault();

  try {
    document.getElementById("panel-title").disabled = false;
    document.getElementById("panel-age").disabled = false;
    document.getElementById("profile-pic").disabled = false;
    document.getElementById("panel-about").disabled = false;
    document.getElementById("panel-dob").disabled = false;
    document.getElementById("panel-gender").disabled = false;
    document.getElementById("panel-email").disabled = true;
    document.getElementById("panel-number").disabled = false;
    document.getElementById("done").style.display = "block";
    document.getElementById("panel-editprofile").style.display = "block";
    document.getElementById("panel-editprofile1").style.display = "block";

    //catch statement
  } catch (error) {
    console.log("Error" + error);
  }
});





//local image to http link image
let cloudinaryData;
//file input from user local to cloud storage and link generate
const fileInput = document.getElementById('panel-editprofile1');
fileInput.addEventListener('change', () => {
  const file = fileInput.files[0];

  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', 'whd23pts'); // Replace with your upload preset name

  fetch('https://api.cloudinary.com/v1_1/dvgctptr1/auto/upload', {
    method: 'POST',
    body: formData,
  })
    .then(response => response.json())
    .then(data => {
      
      console.log(data)

      cloudinaryData = data.url; 
      console.log(cloudinaryData); 
      
    })
    .catch(error => console.error(error));
});




let done = document.getElementById("done");
done.addEventListener("click", (event) => {
  event.preventDefault();

  try {
    document.getElementById("panel-title").disabled = true;
    document.getElementById("panel-age").disabled = true;
    document.getElementById("profile-pic").disabled = true;
    document.getElementById("panel-about").disabled = true;
    document.getElementById("panel-dob").disabled = true;
    document.getElementById("panel-gender").disabled = true;
    document.getElementById("panel-email").disabled = true;
    document.getElementById("panel-number").disabled = true;
    document.getElementById("done").style.display = "none";

    //  let name = document.getElementById("panel-title").value;
    let age = document.getElementById("panel-age").value;
    // let profile_pic = document.getElementById("profile-pic").value;
    let about_me = document.getElementById("panel-about").value;
    // let date_of_birth = document.getElementById("panel-dob").value;
    let gender = document.getElementById("panel-gender").value;
    let email = document.getElementById("panel-email").value;
    let mobile_number = document.getElementById("panel-number").value;
    let profile_pic = cloudinaryData;

    let new_obj = {
      age,
      about_me,
      gender,
      email,
      mobile_number,
      profile_pic,
    };

    console.log("hi");


      //assign data
      let assign_data = Object.assign(get_obj, new_obj);
      console.log(assign_data);

      let index = seller_register_arr.indexOf(get_obj);
      console.log(index);

      seller_register_arr[index] = assign_data;

      localStorage.setItem(
        "seller_register_arr",
        JSON.stringify(seller_register_arr)
      );
      alert("your changes have been changed");
      location.reload();


    //catch statement
  } catch (error) {
    console.log("Error" + error);
  }
});

//delete user profile
let deleteUserProfile = document.getElementById("delUserProfile");
console.log(deleteUserProfile);
deleteUserProfile.addEventListener("click", (event) => {
  event.preventDefault();

  //try statement start
  try {
    let seller_register = JSON.parse(
      localStorage.getItem("seller_register_arr")
    );
    let seller_login = JSON.parse(localStorage.getItem("seller_login_arr"));

    let get_seller_obj = seller_register.find(
      (event) => event.email === seller_login
    );
    console.log(get_seller_obj);

    console.log(get_seller_obj["name"]);
    let new_obj = {
      profile_pic: `https://ui-avatars.com/api/?name=${get_seller_obj["name"]}&background=random`,
    };

    console.log("hi");

    //assign data
    let assign_data = Object.assign(get_seller_obj, new_obj);
    console.log(assign_data);

    let index = seller_register.indexOf(get_seller_obj);
    console.log(index);

    seller_register[index] = assign_data;

    localStorage.setItem(
      "seller_register_arr",
      JSON.stringify(seller_register)
    );
    alert("your changes have been changed");
    location.reload();

    //catch catches the error
  } catch (error) {
    console.log("Error" + error);
  }
});

//delete user

let clear = document.getElementById("delete");

clear.addEventListener("click", (event) => {
  event.preventDefault();

  try {
    let index = seller_register_arr.indexOf(get_obj);
    //  console.log(index);
    //  let index1 = login.indexOf(get_obj);
    let msg = confirm("are you sure you want to delete");
    if (msg != true) {
      return false;
    } else {
      seller_register_arr.splice(index, 1);
      //  login.splice(index1,1);
      localStorage.setItem(
        "seller_register_arr",
        JSON.stringify(seller_register_arr)
      );
      window.location.href = "sellerRegister.html";
    }

    //catch statement
  } catch (error) {
    console.log("Error" + error);
  }
});

//seller profile page js code end
