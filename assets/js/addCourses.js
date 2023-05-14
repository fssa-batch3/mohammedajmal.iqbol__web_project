//addcourses page js code start

//register array parsed from local
const register_arr = JSON.parse(localStorage.getItem("register_arr"));

let cloudinaryData;
//file input from user local to cloud storage and link generate
const fileInput = document.getElementById("image-url");
fileInput.addEventListener("change", () => {
  const file = fileInput.files[0];

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "ml_default");
   // Replace with your upload preset name

  fetch("https://api.cloudinary.com/v1_1/dwkjxihmr/auto/upload", {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      cloudinaryData = data.url;
    })
    .catch((error) => console.error(error));
});

//form submit event start
//seller can add courses when he/she submit the form with valid details
let form = document.getElementById("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  //new array create
  let course_data = [];

  //if this array already have value then parse the old one from local
  if (localStorage.getItem("course_data") !== null) {
    course_data = JSON.parse(localStorage.getItem("course_data"));

    //for adding new course these are course details we get from user.
    let img = cloudinaryData;
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
    let top_skills1 = top_skills.split(".");
    let bookmark_img = "../assets/images/icons8-add-bookmark-50.png";
    let id = Date.now();

    /* create new course object within that pushing all details for courses 
   we get from user */

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
      top_skills1,
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
      bookmark_img,
      instructorname,
      instructordesc,
      companycategory,
      offeredcompanyname,
      offeredcompanydesc,
    };

    //seller register array parse from local
    const seller_register_arr = JSON.parse(
      localStorage.getItem("seller_register_arr")
    );

    //seller login array parse from local
    const seller_login_arr = JSON.parse(
      localStorage.getItem("seller_login_arr")
    );

    //find now loggedin object using two arrays
    let find_seller_obj = seller_register_arr.find(
      (event) => event.email === seller_login_arr
    );
    //find index for logged in user from register array
    let index = seller_register_arr.indexOf(find_seller_obj);

    //courses add to seller object inside array

    if (seller_register_arr[index].sellingCourses != null) {
      //in course obj we have obj key contains one object
      let courses_id = {
        obj: course_obj,
      };

      // find object from match id
      const varobj = seller_register_arr[index]["sellingCourses"].find(
        (e) => e.obj.title === course_obj.title
      );

      //checked it should return undefined

      if (varobj === undefined) {
        seller_register_arr[index].sellingCourses.push(courses_id);
        localStorage.setItem(
          "seller_register_arr",
          JSON.stringify(seller_register_arr)
        );

        //puh obj into array
        course_data.push(course_obj);

        //making array to stringify
        const add_data = JSON.stringify(course_data);
        //set array to local in course_data key.
        localStorage.setItem("course_data", add_data);

        //alerting user
        alert("course added to my courses");

        const sellercoursedata = JSON.parse(
          localStorage.getItem("seller_register_arr")
        );

        //find this course
        let findcoursedata = sellercoursedata[index].sellingCourses.find(
          (item) => item.obj.title
        );


        //href anker redirect to quiz page + its title URLParams
        window.location.href = "../pages/quizquestions.html?title=" + title;
      } else {
        //skip part
        alert("you already added this course to my courses");
      }
    } else {
      //if varobj !== undefined means
      //new array
      let course_obj = [];

      //new object
      let courses_id = {
        obj: course_obj,
      };

      //push obj into array
      course_obj.push(courses_id);

      //set that array into one key called sellingCourses
      //  and set the key to one obj
      let user_obj = {
        sellingCourses: course_obj,
      };

      //assign object new in old
      let user_id_assign = Object.assign(find_seller_obj, user_obj);

      //find the index of older obj from the array
      let index1 = seller_register_arr.indexOf(find_seller_obj);

      //assigning the new in old
      seller_register_arr[index] = user_id_assign;

      //set the array with new values
      localStorage.setItem(
        "seller_register_arr",
        JSON.stringify(seller_register_arr)
      );

      //alerting the user
      alert("course added to my courses");

      //seller register array parse from local
      const sellercoursedata = JSON.parse(
        localStorage.getItem("seller_register_arr")
      );

      //same like above find this object
      let findcoursedata = sellercoursedata[index].sellingCourses.find(
        (item) => item.obj.title
      );


      //href anker redirect to quiz page + its title URLParams
      window.location.href = `../pages/quizquestions.html?title=${title}`;
    }
  } else {
    //getting values for courses from seller
    let img = document.getElementById("image-url").value;
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
    let top_skills1 = top_skills.split(".");
    let bookmark_img = "../assets/images/icons8-add-bookmark-50.png";
    let id = Date.now();

    //pushing all course details into object
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
      top_skills1,
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
      bookmark_img,
      instructorname,
      instructordesc,
      companycategory,
      offeredcompanyname,
      offeredcompanydesc,
    };

    //pushing obj into array
    course_data.push(course_obj);

    let courses_id = {
      obj: course_obj,
    };

    const seller_register_arr = JSON.parse(
      localStorage.getItem("seller_register_arr")
    );

    const seller_login_arr = JSON.parse(
      localStorage.getItem("seller_login_arr")
    );

    //find seller obj
    let find_seller_obj = seller_register_arr.find(
      (event) => event.email === seller_login_arr
    );

    //find seller obj index from array
    let index = seller_register_arr.indexOf(find_seller_obj);

    //push obj into array
    seller_register_arr[index].sellingCourses.push(courses_id);

    //set courses in first user obj inside array
    localStorage.setItem(
      "seller_register_arr",
      JSON.stringify(seller_register_arr)
    );

    //set courses in second course_data array
    const add_data = JSON.stringify(course_data);
    localStorage.setItem("course_data", add_data);

    //alerting user
    alert("course added to my courses");

    const sellercoursedata = JSON.parse(
      localStorage.getItem("seller_register_arr")
    );

    //find this course.
    let findcoursedata = sellercoursedata[index].sellingCourses.find(
      (item) => item.obj.title
    );

    //href anker redirect to quiz adding page using URLParams title
    window.location.href = "../pages/quizquestions.html?title=" + title;
  }
});

//addcourses page js code end
