//parse arr from local
const register_arr = JSON.parse(localStorage.getItem("register_arr"));

const login_arr = JSON.parse(localStorage.getItem("login_arr"));

const get_obj = register_arr.find(event => event.email === login_arr);

//user profile show in navbar
let user_profile;


user_profile = document.createElement("img");
user_profile.setAttribute("id", "user-profile");
user_profile.setAttribute("class", "dropbtn");
user_profile.setAttribute("onclick", "profile()");
user_profile.setAttribute("src", get_obj["profile_pic"]);
document.querySelector("#dropuser").prepend(user_profile);


//payment add course 

const course_data = JSON.parse(localStorage.getItem("course_data"));

const mycourses = JSON.parse(localStorage.getItem("add-to-card"));

//url params get name from url
const url = window.location.search;
const urlParams = new URLSearchParams(url);
const username = urlParams.get("name");

//check url and course title
const get_course_obj = course_data.find((event) => event.title === username);


//when user click this paybtn. payment event will happen and this function will run
const pay_btn = document.getElementById("paybtn");
pay_btn.addEventListener("click", (event) => {
    event.preventDefault();



    let register = JSON.parse(localStorage.getItem("register_arr"));


    let loggin = JSON.parse(localStorage.getItem("login_arr"));

    //user obj find from reg login arr 
    const get_user_obj = register.find((event) => event.email === loggin);

    //find index from the user obj
    let index = register.indexOf(get_user_obj);

    const mycourses = JSON.parse(localStorage.getItem("add-to-card"));

     //if not null means this code will happen
    if (localStorage.getItem("payment_arr") !== null ?? []) {
        payment_arr = JSON.parse(localStorage.getItem("payment_arr"));

        let card_number = document.getElementById("cardnumber").value;
        let expiry_month = document.getElementById("month").value;
        let expiry_year = document.getElementById("year").value;
        let security_code = document.getElementById("securitycode").value;
        let payment_id = Date.now();

        //obj inside set this values
        let payment_obj = {
            card_number, expiry_month, expiry_year, security_code, payment_id
        };

        //push this obj to array
        payment_arr.push(payment_obj);


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


        //required params are given to send email via emailjs.com 
        let params = {
            from_name: "freekyajmal@gmail.com",
            to_name: "freekyajmal@gmail.com",
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

        }
let x;
        //email send event
        emailjs.send("service_sp6m68x", "template_uo2qcla", params)
            .then(message => {

                x = message

            })
            //catch block catches an error
            .catch(err => console.error(err));


    //set to local by this name payment_arr
        localStorage.setItem("payment_arr", JSON.stringify(payment_arr));



    }

    //if array is null below will happen 
    else {

        //new array create without pushing
        let payment_arr = [];

        let card_number = document.getElementById("cardnumber").value;
        let expiry_month = document.getElementById("month").value;
        let expiry_year = document.getElementById("year").value;
        let security_code = document.getElementById("securitycode").value;
        let payment_id = Date.now();


        //set values to obj
        let payment_obj = {
            card_number, expiry_month, expiry_year, security_code, payment_id
        };

        //push obj into array
        payment_arr.push(payment_obj);



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


            // email send params 
        let params = {
            from_name: "freekyajmal@gmail.com",
            to_name: "freekyajmal@gmail.com",
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

        }
let y;
        //email send event 
        emailjs.send("service_sp6m68x", "template_uo2qcla", params)
            .then(message => {

               y = message;

            })
            .catch(err => console.error(err));


        //set into loal
        localStorage.setItem("payment_arr", JSON.stringify(payment_arr));



    }




    //after course payment it is added to user mycourses
    if (register[index].courses != null) {

        let courses_id = {
            "obj": get_course_obj,
            "isCoursePurchased": true,
        }



        //checked it should return true
        const existobj = register[index].courses.find((event) => event["obj"]["id"] === get_course_obj["id"]);


       //if this course not in that array means it will show undefined
        if (existobj === undefined) {


            register[index].courses.push(courses_id);
            localStorage.setItem("register_arr", JSON.stringify(register));
            alert("this course is added to mycourses");
        } else {
            //skip this part
            alert("this course is already added");
        }

    } else {

        //if array null means below will happen 

        //new array create
        let course_obj = [];

        let courses_id = {
            "obj": get_course_obj,
        }

        course_obj.push(courses_id);

        let user_obj = {
            "courses": course_obj,
        };

        let user_id_assign = Object.assign(get_user_obj, user_obj);

        let index = register.indexOf(get_user_obj);

        register[index] = user_id_assign;

        //set to local
        localStorage.setItem("register_arr", JSON.stringify(register));

    }

    window.location.href = "learn.html";


});
