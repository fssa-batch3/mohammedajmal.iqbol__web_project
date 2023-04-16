//addcourses page js code start


const register_arr = JSON.parse(localStorage.getItem("register_arr"));
console.log(register_arr); 


let form = document.getElementById("form");
form.addEventListener("submit", (event) => {
 event.preventDefault();


 
 let course_data =[];
  

 if(localStorage.getItem("course_data") !== null ){
    course_data = JSON.parse(localStorage.getItem("course_data"));

 let img = document.getElementById("image-url").value;
 let title = document.getElementById("course-name").value;
 let timing = document.getElementById("course-timing").value;
 let language = document.getElementById("course-language").value;
 let enrolled = document.getElementById("course-intake").value;
 let cost_type = document.getElementById("course-cost-type").value;
 let cost = document.getElementById("course-cost").value;
 let old_cost = document.getElementById("old-cost").value;
 let Description= document.getElementById("course-description").value;
 let top_skills = document.getElementById("top-skills").value;
 let courseVideo1 =  document.getElementById("video1").value;
 let courseVideo2 =  document.getElementById("video2").value;
 let courseVideo3 =  document.getElementById("video3").value;
 let courseVideo4 =  document.getElementById("video4").value;
 let courseVideo5 =  document.getElementById("video5").value;
 let courseVideo6 =  document.getElementById("video6").value;
 let courseVideo7 =  document.getElementById("video7").value;
 let courseVideo8 =  document.getElementById("video8").value;
 let courseVideo9 =  document.getElementById("video9").value;

 let courseVideoName1 =  document.getElementById("video1name").value;
 let courseVideoName2 =  document.getElementById("video2name").value;
 let courseVideoName3 =  document.getElementById("video3name").value;
 let courseVideoName4 =  document.getElementById("video4name").value;
 let courseVideoName5 =  document.getElementById("video5name").value;
 let courseVideoName6 =  document.getElementById("video6name").value;
 let courseVideoName7 =  document.getElementById("video7name").value;
 let courseVideoName8 =  document.getElementById("video8name").value;
 let courseVideoName9 =  document.getElementById("video9name").value;
 let top_skills1 = top_skills.split(".");
 // let videos = base64String.slice(1,20);
 let bookmark_img = "../assets/images/icons8-add-bookmark-50.png";
 let id= Date.now();
 let date1 = new Date();
 let datestring = date1.toDateString();
 datestring.slice(4,);


    let course_obj = {
     img,title,timing,language,enrolled,cost_type,cost,old_cost,Description,top_skills1,courseVideo1,courseVideo2,courseVideo3,courseVideo4,courseVideo5,courseVideo6,courseVideo7,courseVideo8,courseVideo9,courseVideoName1,courseVideoName2,courseVideoName3,courseVideoName4,courseVideoName5,courseVideoName6,courseVideoName7,courseVideoName8,courseVideoName9,id,datestring,bookmark_img
 };









 const seller_register_arr = JSON.parse(localStorage.getItem("seller_register_arr"));
 console.log(seller_register_arr); 
 
 const seller_login_arr = JSON.parse(localStorage.getItem("seller_login_arr"));
 console.log(seller_login_arr);
 
 let find_seller_obj = seller_register_arr.find((event) => event.email === seller_login_arr);
 console.log(find_seller_obj);
 
 let index = seller_register_arr.indexOf(find_seller_obj);
 console.log(index);



   //courses add to seller object inside array

   if( seller_register_arr[index].sellingCourses != null ) {   
 
    let courses_id = {
         "obj" : course_obj,
    } 

// find object from match id
const varobj = seller_register_arr[index]['sellingCourses'].find((e) => e.obj.title === course_obj.title );
console.log(varobj);

//checked it should return true

   if( varobj === undefined ){
    
    // alert("this course is already purchased by you");
    seller_register_arr[index].sellingCourses.push(courses_id);
    localStorage.setItem("seller_register_arr",JSON.stringify(seller_register_arr));
    //skip this part
   
    course_data.push(course_obj);
    console.log(course_data);
   
    const add_data = JSON.stringify(course_data);
    localStorage.setItem("course_data",add_data);
    
       alert("course added to my courses");

   } else {
    //skip part
    alert("you already added this course to my courses");
    
   } 

} else {
  let course_obj = [];

  let courses_id = {
         "obj" : course_obj,
    } 
  
  course_obj.push(courses_id);
          
  let user_obj = {
  "sellingCourses" : course_obj,
  };

  let user_id_assign = Object.assign(find_seller_obj,user_obj);
  console.log(user_id_assign);
  
  let index1 = seller_register_arr.indexOf(find_seller_obj);
  console.log(index1);
  
  seller_register_arr[index] = user_id_assign;
  
  localStorage.setItem("seller_register_arr",JSON.stringify(seller_register_arr));

  alert("course added to my courses");
  
}











 } else {

 let img = document.getElementById("image-url").value;
 let title = document.getElementById("course-name").value;
 let timing = document.getElementById("course-timing").value;
 let language = document.getElementById("course-language").value;
 let enrolled = document.getElementById("course-intake").value;
 let cost_type = document.getElementById("course-cost-type").value;
 let cost = document.getElementById("course-cost").value;
 let old_cost = document.getElementById("old-cost").value;
 let Description= document.getElementById("course-description").value;
 let top_skills = document.getElementById("top-skills").value;
 let courseVideo1 =  document.getElementById("video1").value;
 let courseVideo2 =  document.getElementById("video2").value;
 let courseVideo3 =  document.getElementById("video3").value;
 let courseVideo4 =  document.getElementById("video4").value;
 let courseVideo5 =  document.getElementById("video5").value;
 let courseVideo6 =  document.getElementById("video6").value;
 let courseVideo7 =  document.getElementById("video7").value;
 let courseVideo8 =  document.getElementById("video8").value;
 let courseVideo9 =  document.getElementById("video9").value;

 let courseVideoName1 =  document.getElementById("video1name").value;
 let courseVideoName2 =  document.getElementById("video2name").value;
 let courseVideoName3 =  document.getElementById("video3name").value;
 let courseVideoName4 =  document.getElementById("video4name").value;
 let courseVideoName5 =  document.getElementById("video5name").value;
 let courseVideoName6 =  document.getElementById("video6name").value;
 let courseVideoName7 =  document.getElementById("video7name").value;
 let courseVideoName8 =  document.getElementById("video8name").value;
 let courseVideoName9 =  document.getElementById("video9name").value;
 let top_skills1 = top_skills.split(".");
 // let videos = base64String.slice(1,20);
 let bookmark_img = "../assets/images/icons8-add-bookmark-50.png";
 let id= Date.now();
 let date1 = new Date();
 let datestring = date1.toDateString();
 datestring.slice(4,);
 


     let course_obj = {
     img,title,timing,language,enrolled,cost_type,cost,old_cost,Description,top_skills1,courseVideo1,courseVideo2,courseVideo3,courseVideo4,courseVideo5,courseVideo6,courseVideo7,courseVideo8,courseVideo9,courseVideoName1,courseVideoName2,courseVideoName3,courseVideoName4,courseVideoName5,courseVideoName6,courseVideoName7,courseVideoName8,courseVideoName9,id,datestring,bookmark_img
 };

 course_data.push(course_obj);

 const add_data = JSON.stringify(course_data);
 localStorage.setItem("course_data",add_data);
 
 }







 window.location.href = "../pages/adminCoursesAdd.html";
 





});





//addcourses page js code end