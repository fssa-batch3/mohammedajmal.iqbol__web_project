


const quizquestions = JSON.parse(localStorage.getItem("quiz_questions_arr"));
console.log(quizquestions); 



const url = window.location.search;
const userparams = new URLSearchParams(url);
const titles = userparams.get("title");
console.log(titles);



const question = quizquestions.find(obj1 => obj1.subarrays.find(obj2 => 
  obj2.obj.find(obj3 => obj3.courseName === titles)));
  console.log(question);

  console.log(question.subarrays[0].obj);


  let findindex = quizquestions.indexOf(question);
  console.log(findindex);

  // let findquiz = quizquestions.filter((quiz) => quiz.some(obj => obj.courseName === titles));
// console.log(findquiz);

// console.log(findquiz[0]);

//  console.log(findquiz.length);


 //convert array of array of objects into array of objects using (...)
//  const flatArray = [].concat(...question.subarrays);
//  console.log(flatArray);


 let flatArr = [];

for (let i = 0; i < question.subarrays.length; i++) {
  let obj = question.subarrays[i];
  for (let key in obj) {
    let subarr = obj[key];
    for (let j = 0; j < subarr.length; j++) {
      let subobj = subarr[j];
      flatArr.push(subobj);
    }
  }
}

console.log(flatArr);

for(let i=0;i<18;i++) {
  
    let div; 
    
      div = document.createElement("div");
      div.setAttribute("id",`coursequiz1question${i+1}label`);
      div.innerHTML = `
      <br><label for="image-url" class="product-label">CourseQuizQuestion${i+1}</label>
            <br><input name="image-url" class="image-url" id="coursequiz1question${i+1}" value="${flatArr[i]["question"]}" placeholder="Quiz Option Question" type="text">
      
            <br><br><label for="image-url" class="product-label">CourseQuiz1Options</label>
            <br><input name="image-url" class="image-url" id="coursequiz${i+1}option1" value="${flatArr[i]["option"][0]}" placeholder="Quiz Option 1" type="text">
            <br><input name="image-url" class="image-url" id="coursequiz${i+1}option2" value="${flatArr[i]["option"][1]}" placeholder="Quiz Option 2" type="text">
            <br><input name="image-url" class="image-url" id="coursequiz${i+1}option3" value="${flatArr[i]["option"][2]}" placeholder="Quiz Option 3" type="text">
            <br><br><label for="image-url" class="product-label">CourseQuiz1Answers</label>
            <br><input name="image-url" class="image-url" id="coursequiz1answer${i+1}" value="${flatArr[i]["answer"]}" placeholder="Quiz Answer" type="text">
      `;
    
    
      document.querySelector(".form").append(div);
    
    };
    
    let button = document.createElement("button");
    button.setAttribute("class","submit");
    button.setAttribute("id","btn");
    button.setAttribute("type","submit");
    button.innerText= "Submit";
    
    document.querySelector(".form").append(button);


    let button1 = document.createElement("button");
    button1.setAttribute("class","submit");
    button1.setAttribute("id","btn-delete");
    button1.setAttribute("type","submit");
    button1.innerText= "Delete";
    
    document.querySelector(".form").append(button1);



    // add to localstorage

    let submit = document.getElementById("form");
    submit.addEventListener("submit",(event) => {
    event.preventDefault();

    // const values = [];
    const quizquestions = JSON.parse(localStorage.getItem("quiz_questions_arr"));
    console.log(quizquestions); 

    if(question !== null){

        let newarr = [];

    for (let i = 0; i < flatArr.length; i++) {

        const question = document.querySelector(`#coursequiz1question${i+1}`).value;
        const option1 = document.querySelector(`#coursequiz${i+1}option1`).value;
        const option2 = document.querySelector(`#coursequiz${i+1}option2`).value;
        const option3 = document.querySelector(`#coursequiz${i+1}option3`).value;
        const answer = document.querySelector(`#coursequiz1answer${i+1}`).value;

        let obj = {
            question,
            option : [ option1 ,option2 ,option3 ],
            answer,
            courseName : titles,
         };



         newarr.push(obj);
         console.log(obj);
         console.log(newarr);


        }




         let slicedArray;
         let subarrays = [];
         for (let i = 0; i < newarr.length; i += 3) {
           slicedArray = newarr.slice(i, i + 3);
     
           let slidedarr = {
             "obj" : slicedArray,
           };
     
           subarrays.push(slidedarr);
           
         }
     
         let newArrays = {
           subarrays
         };
     
        //  newArray.push(newArrays);
     
         
         console.log(subarrays);

       console.log(findindex);

        quizquestions[findindex] = newArrays;

// //       //local set

localStorage.setItem("quiz_questions_arr",JSON.stringify(quizquestions));

 window.location.href = "../pages/adminCoursesAdd.html"; 






    
        //  values.push(obj);
      
        // let assign = Object.assign(flatArr[i],newarr[i]);
        // console.log(assign);

 
//         flatArr[i] = assign;
//         console.log(flatArr);
//         console.log(flatArr[i]);

//         const quizquestions = JSON.parse(localStorage.getItem("quiz_questions_arr"));
// console.log(quizquestions); 



// const url = window.location.search;
// const userparams = new URLSearchParams(url);
// const titles = userparams.get("title");
// console.log(titles);





// let slicedArray;
// let subarrays = [];

// for (let i = 0; i < flatArr.length; i +=3) {

//   slicedArray = flatArr.slice(i, i + 3);

//   let slidedarr = {
//     "obj" : slicedArray,
//   };

//   subarrays.push(slidedarr);
  
// }

// let newArrays = {
//   subarrays
// }

// console.log(newArrays);

// let assigns = Object.assign(question,newArrays);
// console.log(assigns);

  
// console.log(quizquestions);
// //questions


// // console.log(question.subarrays[0].obj);
// console.log(assigns);




  
  
//   let findindex = quizquestions.indexOf(question);
//   console.log(findindex);

//   quizquestions[findindex] = assigns;



   


 



    }  else {


        for (let i = 0; i < 18; i++) {

            const question = document.querySelector(`#coursequiz1question${i+1}`).value;
            const option1 = document.querySelector(`#coursequiz${i+1}option1`).value;
            const option2 = document.querySelector(`#coursequiz${i+1}option2`).value;
            const option3 = document.querySelector(`#coursequiz${i+1}option3`).value;
            const answer = document.querySelector(`#coursequiz1answer${i+1}`).value;
    
            let obj = {
                question,
                option : [ option1 ,option2 ,option3 ],
                answer,
                courseName : titles,
             };
    
             let editobj = flatArr[i];
        
            //  values.push(obj);
          
            let assign = Object.assign(editobj,obj);
            console.log(assign);
    
            flatArr[i] = assign;
            console.log(flatArr);
    
    
    const chunkSize = 3;
    const result = [];
    
    for (let i = 0; i < flatArr.length; i += chunkSize) {
      result.push(flatArr.slice(i, i + chunkSize));
    }
    
    console.log(result);

    


    
    // localStorage.setItem("quiz_questions_arr",JSON.stringify(result));

    }


}

        // alert("Quiz Edited Successfully");
        // window.location.href = "../pages/adminCoursesAdd.html";

        // console.log(values);




//         const seller_register_arr = JSON.parse(localStorage.getItem("seller_register_arr"));
// console.log(seller_register_arr); 

// const quiz_questions_arr = JSON.parse(localStorage.getItem("quiz_questions_arr"));
// console.log(quiz_questions_arr); 


// const url = window.location.search;
// const userparams = new URLSearchParams(url);
// const titles = userparams.get("title");
// console.log(titles);

// for(let i=0;i<flatArray.length;i++){

// let find_seller_obj = flatArray.filter((event) => event.courseName === titles );
// console.log(find_seller_obj);

// let findindex = flatArray.indexOf(find_seller_obj);
// console.log(findindex);

// }
    
    

    //  console.log(question);

    


    // let newArray = [];    
    // for (let i = 0; i < values.length; i += 3) {
    //   let slicedArray = values.slice(i, i + 3);
    //   newArray.push(slicedArray);
    // }
    
    // console.log(newArray);
    

//    localStorage.setItem("quiz_questions_arr",JSON.stringify(newArray));
//    window.location.href = "../pages/adminCoursesAdd.html";



    });

    
        // add to localstorage

        let submit1 = document.getElementById("btn-delete");
        submit1.addEventListener("click",(event) => {
        event.preventDefault();


const quizquestions = JSON.parse(localStorage.getItem("quiz_questions_arr"));
console.log(quizquestions); 

const url = window.location.search;
const userparams = new URLSearchParams(url);
const titles = userparams.get("title");
console.log(titles);


const question = quizquestions.find(obj1 => obj1.subarrays.find(obj2 => 
  obj2.obj.find(obj3 => obj3.courseName === titles)));
  console.log(question);

  console.log(question.subarrays[0].obj);


  let findindex = quizquestions.indexOf(question);
  console.log(findindex);


quizquestions.splice(findindex,1);

console.log(quizquestions);

 localStorage.setItem("quiz_questions_arr",JSON.stringify(quizquestions));
 confirm("Are You Sure You Want to Delete this Quiz");
 alert("Quiz Removed from Your Course");
 window.location.href = "../pages/adminCoursesAdd.html";


        });
