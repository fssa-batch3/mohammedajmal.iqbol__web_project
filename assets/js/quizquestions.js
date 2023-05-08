




//quiz js dynamic questions input 18 input boxes
for(let i=0;i<18;i++) {

    let div; 
    
      div = document.createElement("div");
      div.setAttribute("id",`coursequiz1question${i+1}label`);
      div.innerHTML = `
      <br><label for="image-url" class="product-label">CourseQuizQuestion${i+1}</label>
            <br><input name="image-url" class="image-url" id="coursequiz1question${i+1}"  placeholder="Quiz Option Question" type="text" value="What is trading ?" />
      
            <br><br><label for="image-url" class="product-label">CourseQuiz1Options</label>
            <br><input name="image-url" class="image-url" id="coursequiz${i+1}option1" placeholder="Quiz Option 1" type="text" value="buy sell of goods" />
            <br><input name="image-url" class="image-url" id="coursequiz${i+1}option2" placeholder="Quiz Option 2" type="text" value="buy sell of sweets" />
            <br><input name="image-url" class="image-url" id="coursequiz${i+1}option3" placeholder="Quiz Option 3" type="text" value="changing the old money into new" />
            <br><br><label for="image-url" class="product-label">CourseQuiz1Answers</label>
            <br><input name="image-url" class="image-url" id="coursequiz1answer${i+1}"  placeholder="Quiz Answer" type="text" value="buy sell of goods" />
      `;
    
    
      document.querySelector(".form").append(div);
    
    };
    
    //submit buttton
    let button = document.createElement("button");
    button.setAttribute("class","submit");
    button.setAttribute("id","btn");
    button.setAttribute("type","submit");
    button.innerText= "Submit";
    
    document.querySelector(".form").append(button);



    // add to localstorage
    //submit buttton event

    let submit = document.getElementById("form");
    submit.addEventListener("submit",(event) => {
    event.preventDefault();

    //new array
    const values = [];

    //18 input values
    for (let i = 0; i < 18; i++) {

        const question = document.querySelector(`#coursequiz1question${i+1}`).value;
        const option1 = document.querySelector(`#coursequiz${i+1}option1`).value;
        const option2 = document.querySelector(`#coursequiz${i+1}option2`).value;
        const option3 = document.querySelector(`#coursequiz${i+1}option3`).value;
        const answer = document.querySelector(`#coursequiz1answer${i+1}`).value;
  

        const seller_register_arr = JSON.parse(localStorage.getItem("seller_register_arr"));
console.log(seller_register_arr); 


//urlparams get title
const url = window.location.search;
const userparams = new URLSearchParams(url);
const titles = userparams.get("title");
console.log(titles);

for(let i=0;i<seller_register_arr.length;i++){

let find_seller_obj = seller_register_arr[i].sellingCourses.find((event) => event.obj.title === titles );
console.log(find_seller_obj);

console.log(find_seller_obj);

}
     //object inside correct position ques , options , answer
     let obj = {
        question,
        option : [ option1 ,option2 ,option3 ],
        answer,
        courseName : titles,
     };

     //push obj into array
     values.push(obj);
  
    }
    console.log(values);

    const quiz_questions_arr = JSON.parse(localStorage.getItem("quiz_questions_arr"));
    console.log(quiz_questions_arr);
    
    //if not null
  if(quiz_questions_arr !== null ){

    //parse existing one
    newArray = JSON.parse(localStorage.getItem("quiz_questions_arr")); 
    
    let slicedArray;
    let subarrays = [];

    //change 18 obj into 6 arr contains 3 obj each
        for (let i = 0; i < values.length; i += 3) {
      slicedArray = values.slice(i, i + 3);

      let slidedarr = {
        "obj" : slicedArray,
      };

      subarrays.push(slidedarr);
      
    }

    let newArrays = {
      subarrays
    };

    newArray.push(newArrays);
    
    console.log(newArray);
 
    localStorage.setItem("quiz_questions_arr",JSON.stringify(newArray));
    window.location.href = "../pages/adminCoursesAdd.html";

  } else {

    //if arr is null create new arr
    let newArray = [];

    let slicedArray;
    let subarrays = [];
    for (let i = 0; i < values.length; i += 3) {
      slicedArray = values.slice(i, i + 3);

      let slidedarr = {
        "obj" : slicedArray,
      };

      subarrays.push(slidedarr);
      
    }

    let newArrays = {
      subarrays
    };

    //push obj into arr
    newArray.push(newArrays);

    
    console.log(newArray);
 
    localStorage.setItem("quiz_questions_arr",JSON.stringify(newArray));
    window.location.href = "../pages/adminCoursesAdd.html";


  }
    



    });

   