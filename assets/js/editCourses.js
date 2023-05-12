//edit courses page js code start

//urlParams get id from url
const url = window.location.search;
const userparams = new URLSearchParams(url);
const id = parseInt(userparams.get("id"));
console.log(id);

//parse array from local
const course_data = JSON.parse(localStorage.getItem("course_data"));
console.log(course_data);
const get_obj = course_data.find((Reg) => Reg.id == id);
console.log(get_obj);

//get values from seller for new editing courses
let img = document.getElementById("image-url");
let title = document.getElementById("course-name");
let timing = document.getElementById("course-timing");
let language = document.getElementById("course-language");
let enrolled = document.getElementById("course-intake");
let cost_type = document.getElementById("course-cost-type");
let cost = document.getElementById("course-cost");
let old_cost = document.getElementById("old-cost");
let Description = document.getElementById("course-description");
let top_skills = document.getElementById("top-skills");
let instructorname = document.getElementById("instructor-name");
let instructordesc = document.getElementById("instructor-desc");
let companycategory = document.getElementById("company-category");
let offeredcompanyname = document.getElementById("offeredcompany-name");
let offeredcompanydesc = document.getElementById("offeredcompany-desc");
let courseVideo1 = document.getElementById("video1");
let courseVideo2 = document.getElementById("video2");
let courseVideo3 = document.getElementById("video3");
let courseVideo4 = document.getElementById("video4");
let courseVideo5 = document.getElementById("video5");
let courseVideo6 = document.getElementById("video6");
let courseVideo7 = document.getElementById("video7");
let courseVideo8 = document.getElementById("video8");
let courseVideo9 = document.getElementById("video9");

let courseVideoName1 = document.getElementById("video1name");
let courseVideoName2 = document.getElementById("video2name");
let courseVideoName3 = document.getElementById("video3name");
let courseVideoName4 = document.getElementById("video4name");
let courseVideoName5 = document.getElementById("video5name");
let courseVideoName6 = document.getElementById("video6name");
let courseVideoName7 = document.getElementById("video7name");
let courseVideoName8 = document.getElementById("video8name");
let courseVideoName9 = document.getElementById("video9name");
title.disabled = true;

//showing old values for seller in input
img.value = get_obj["img"];
title.value = get_obj["title"];
timing.value = get_obj["timing"];
language.value = get_obj["language"];
enrolled.value = get_obj["enrolled"];
cost_type.value = get_obj["cost_type"];
cost.value = get_obj["cost"];
old_cost.value = get_obj["old_cost"];
Description.value = get_obj["Description"];
top_skills.value = get_obj["top_skills"];
instructorname.value = get_obj["instructorname"];
instructordesc.value = get_obj["instructordesc"];
companycategory.value = get_obj["companycategory"];
offeredcompanyname.value = get_obj["offeredcompanyname"];
offeredcompanydesc.value = get_obj["offeredcompanydesc"];
courseVideo1.value = get_obj["courseVideo1"];
courseVideo2.value = get_obj["courseVideo2"];
courseVideo3.value = get_obj["courseVideo3"];
courseVideo4.value = get_obj["courseVideo4"];
courseVideo5.value = get_obj["courseVideo5"];
courseVideo6.value = get_obj["courseVideo6"];
courseVideo7.value = get_obj["courseVideo7"];
courseVideo8.value = get_obj["courseVideo8"];
courseVideo9.value = get_obj["courseVideo9"];

courseVideoName1.value = get_obj["courseVideoName1"];
courseVideoName2.value = get_obj["courseVideoName2"];
courseVideoName3.value = get_obj["courseVideoName3"];
courseVideoName4.value = get_obj["courseVideoName4"];
courseVideoName5.value = get_obj["courseVideoName5"];
courseVideoName6.value = get_obj["courseVideoName6"];
courseVideoName7.value = get_obj["courseVideoName7"];
courseVideoName8.value = get_obj["courseVideoName8"];
courseVideoName9.value = get_obj["courseVideoName9"];



let cloudinaryData;
//file input from user local to cloud storage and link generate
const fileInput = document.getElementById('image-file');
fileInput.addEventListener('change', () => {
  const file = fileInput.files[0];

  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', 'ml_default'); // Replace with your upload preset name

  fetch('https://api.cloudinary.com/v1_1/dwkjxihmr/auto/upload', {
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


//edit course details when edit form is submitted
let form = document.getElementById("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();


  let datas;
  if(cloudinaryData !== undefined){
    datas = cloudinaryData;
  } else {
    datas = get_obj["img"];
  }
  console.log(datas);

  //try statement
  try {
    //get new values for courses from seller
    let img = datas;
    let title = document.getElementById("course-name").value;
    let timing = document.getElementById("course-timing").value;
    let language = document.getElementById("course-language").value;
    let enrolled = document.getElementById("course-intake").value;
    let cost_type = document.getElementById("course-cost-type").value;
    let cost = document.getElementById("course-cost").value;
    let old_cost = document.getElementById("old-cost").value;
    let Description = document.getElementById("course-description").value;
    let top_skills = document.getElementById("top-skills").value;
    let instructorname = document.getElementById("instructor-name").value;
    let instructordesc = document.getElementById("instructor-desc").value;
    let companycategory = document.getElementById("company-category").value;
    let offeredcompanyname = document.getElementById(
      "offeredcompany-name"
    ).value;
    let offeredcompanydesc = document.getElementById(
      "offeredcompany-desc"
    ).value;
    let courseVideo1 = document.getElementById("video1").value;
    let courseVideo2 = document.getElementById("video2").value;
    let courseVideo3 = document.getElementById("video3").value;
    let courseVideo4 = document.getElementById("video4").value;
    let courseVideo5 = document.getElementById("video5").value;
    let courseVideo6 = document.getElementById("video6").value;
    let courseVideo7 = document.getElementById("video7").value;
    let courseVideo8 = document.getElementById("video8").value;
    let courseVideo9 = document.getElementById("video9").value;

    let courseVideoName1 = document.getElementById("video1name").value;
    let courseVideoName2 = document.getElementById("video2name").value;
    let courseVideoName3 = document.getElementById("video3name").value;
    let courseVideoName4 = document.getElementById("video4name").value;
    let courseVideoName5 = document.getElementById("video5name").value;
    let courseVideoName6 = document.getElementById("video6name").value;
    let courseVideoName7 = document.getElementById("video7name").value;
    let courseVideoName8 = document.getElementById("video8name").value;
    let courseVideoName9 = document.getElementById("video9name").value;

    //push to object
    let course_obj = {
      img,
      title,
      timing,
      language,
      enrolled,
      cost_type,
      cost,
      old_cost,
      Description,
      top_skills,
      courseVideo1,
      courseVideo2,
      courseVideo3,
      courseVideo4,
      courseVideo5,
      courseVideo6,
      courseVideo7,
      courseVideo8,
      courseVideo9,
      courseVideoName1,
      courseVideoName2,
      courseVideoName3,
      courseVideoName4,
      courseVideoName5,
      courseVideoName6,
      courseVideoName7,
      courseVideoName8,
      courseVideoName9,
      id,
      instructorname,
      instructordesc,
      companycategory,
      offeredcompanyname,
      offeredcompanydesc,
    };

    const seller_register_arr = JSON.parse(
      localStorage.getItem("seller_register_arr")
    );
    console.log(seller_register_arr);

    const seller_login_arr = JSON.parse(
      localStorage.getItem("seller_login_arr")
    );
    console.log(seller_login_arr);

    let find_seller_obj = seller_register_arr.find(
      (event) => event.email === seller_login_arr
    );
    console.log(find_seller_obj);

    let indexx = seller_register_arr.indexOf(find_seller_obj);
    console.log(indexx);

    let a = seller_register_arr[indexx]["sellingCourses"];

    let findid = a.find((event) => event.obj.id === id);
    console.log(findid);

    //find index from obj in array
    let findindex = a.indexOf(findid);
    console.log(findindex);

    //find index
    let index = course_data.indexOf(get_obj);
    console.log(index);

    //replace new values on old values
    course_data[index] = course_obj;

    let course_id = {
      obj: course_obj,
    };

    a[findindex] = course_id;

    //set to Localstorage
    localStorage.setItem("course_data", JSON.stringify(course_data));
    localStorage.setItem(
      "seller_register_arr",
      JSON.stringify(seller_register_arr)
    );
    alert("you have successfully updated your course");
    location.reload();

    //redirect to quiz questions by title
    window.location.href = "../pages/editquizquestions.html?title=" + title;

    //catch statement
  } catch (error) {
    console.log("Error" + error);
  }
});

// edit course end

//delete course

let removeUser = document.getElementById("delete");
removeUser.addEventListener("click", (event) => {
  event.preventDefault();

  try {
    const seller_register_arr = JSON.parse(
      localStorage.getItem("seller_register_arr")
    );
    console.log(seller_register_arr);

    const seller_login_arr = JSON.parse(
      localStorage.getItem("seller_login_arr")
    );
    console.log(seller_login_arr);

    let find_seller_obj = seller_register_arr.find(
      (event) => event.email === seller_login_arr
    );
    console.log(find_seller_obj);

    let indexx = seller_register_arr.indexOf(find_seller_obj);
    console.log(indexx);

    //find clicked course by find method
    const get_mycourses = seller_register_arr[indexx].sellingCourses.find(
      (course) => course.obj.id === id
    );
    console.log(get_mycourses);

    let index = course_data.indexOf(get_obj);
    console.log(index);

    let msg = confirm("are you sure you want to delete");
    if (msg !== true) {
      return false;
    } else {
      course_data.splice(index, 1);
      localStorage.setItem("course_data", JSON.stringify(course_data));

      //find delete obj from user obj key set array
      let getObjs = seller_register_arr[indexx].sellingCourses.find(
        (event) => event.obj.id === get_mycourses.obj.id
      );
      console.log(getObjs);

      //find index for that obj
      let findValIndex =
        seller_register_arr[indexx].sellingCourses.indexOf(getObjs);
      console.log(findValIndex);

      //delete from the array
      seller_register_arr[indexx].sellingCourses.splice(findValIndex, 1);
      localStorage.setItem(
        "seller_register_arr",
        JSON.stringify(seller_register_arr)
      );

      //redirect to seller homepage
      window.location.href = "../pages/adminCoursesAdd.html";
    }

    //catch statement
  } catch (error) {
    console.log("Error" + error);
  }
});

//edit courses page js code end
