//editquizquestions array parse from local
const quizquestions = JSON.parse(localStorage.getItem("quiz_questions_arr"));

//url get title from tab location.search
const url = window.location.search;
const userparams = new URLSearchParams(url);
const titles = userparams.get("title");

//find quiz using titles from url if match returns a object
const question = quizquestions.find((obj1) =>
  obj1.subarrays.find((obj2) =>
    obj2.obj.find((obj3) => obj3.courseName === titles)
  )
);

//find index of the returned object
let findindex = quizquestions.indexOf(question);

//new array
let flatArr = [];

//make 6 seperate arrays inside that 3 objects quizes into 18 objects in an array.
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

//loop for to place the old values of respective quiz
for (let i = 0; i < 18; i++) {
  let div;

  div = document.createElement("div");
  div.setAttribute("id", `coursequiz1question${i + 1}label`);
  div.innerHTML = `
      <br><label for="image-url" class="product-label">CourseQuizQuestion${
        i + 1
      }</label>
            <br><input name="image-url" class="image-url" id="coursequiz1question${
              i + 1
            }" value="${
    flatArr[i]["question"]
  }" placeholder="Quiz Option Question" type="text">
      
            <br><br><label for="image-url" class="product-label">CourseQuiz1Options</label>
            <br><input name="image-url" class="image-url" id="coursequiz${
              i + 1
            }option1" value="${
    flatArr[i]["option"][0]
  }" placeholder="Quiz Option 1" type="text">
            <br><input name="image-url" class="image-url" id="coursequiz${
              i + 1
            }option2" value="${
    flatArr[i]["option"][1]
  }" placeholder="Quiz Option 2" type="text">
            <br><input name="image-url" class="image-url" id="coursequiz${
              i + 1
            }option3" value="${
    flatArr[i]["option"][2]
  }" placeholder="Quiz Option 3" type="text">
            <br><br><label for="image-url" class="product-label">CourseQuiz1Answers</label>
            <br><input name="image-url" class="image-url" id="coursequiz1answer${
              i + 1
            }" value="${
    flatArr[i]["answer"]
  }" placeholder="Quiz Answer" type="text">
      `;

  document.querySelector(".form").append(div);
}

//new button for edit
let button = document.createElement("button");
button.setAttribute("class", "submit");
button.setAttribute("id", "btn");
button.setAttribute("type", "submit");
button.innerText = "Submit";

document.querySelector(".form").append(button);

//button to delete the quiz
let button1 = document.createElement("button");
button1.setAttribute("class", "submit");
button1.setAttribute("id", "btn-delete");
button1.setAttribute("type", "submit");
button1.innerText = "Delete";

document.querySelector(".form").append(button1);

// add to localstorage
// new editing values get from seller when seller click submit
let submit = document.getElementById("form");
submit.addEventListener("submit", (event) => {
  event.preventDefault();

  // const values = [];
  const quizquestions = JSON.parse(localStorage.getItem("quiz_questions_arr"));

  if (question !== null) {
    let newarr = [];

    for (let i = 0; i < flatArr.length; i++) {
      const question = document.querySelector(
        `#coursequiz1question${i + 1}`
      ).value;
      const option1 = document.querySelector(
        `#coursequiz${i + 1}option1`
      ).value;
      const option2 = document.querySelector(
        `#coursequiz${i + 1}option2`
      ).value;
      const option3 = document.querySelector(
        `#coursequiz${i + 1}option3`
      ).value;
      const answer = document.querySelector(`#coursequiz1answer${i + 1}`).value;

      //get new vlaues and push into object
      let obj = {
        question,
        option: [option1, option2, option3],
        answer,
        courseName: titles,
      };

      newarr.push(obj);

    }

    let slicedArray;
    let subarrays = [];
    //make 18 object into 6 seperate arrays inside that 3 objects quizes.
    for (let i = 0; i < newarr.length; i += 3) {
      slicedArray = newarr.slice(i, i + 3);

      let slidedarr = {
        obj: slicedArray,
      };

      subarrays.push(slidedarr);
    }

    let newArrays = {
      subarrays,
    };

    //  newArray.push(newArrays);

    quizquestions[findindex] = newArrays;

    //local set

    localStorage.setItem("quiz_questions_arr", JSON.stringify(quizquestions));

    window.location.href = "../pages/adminCoursesAdd.html";
  } else {
    for (let i = 0; i < 18; i++) {
      const question = document.querySelector(
        `#coursequiz1question${i + 1}`
      ).value;
      const option1 = document.querySelector(
        `#coursequiz${i + 1}option1`
      ).value;
      const option2 = document.querySelector(
        `#coursequiz${i + 1}option2`
      ).value;
      const option3 = document.querySelector(
        `#coursequiz${i + 1}option3`
      ).value;
      const answer = document.querySelector(`#coursequiz1answer${i + 1}`).value;

      let obj = {
        question,
        option: [option1, option2, option3],
        answer,
        courseName: titles,
      };

      let editobj = flatArr[i];

      //  values.push(obj);

      let assign = Object.assign(editobj, obj);

      flatArr[i] = assign;

      const chunkSize = 3;
      const result = [];

      for (let i = 0; i < flatArr.length; i += chunkSize) {
        result.push(flatArr.slice(i, i + chunkSize));
      }
      // localStorage.setItem("quiz_questions_arr",JSON.stringify(result));
    }
  }
});

// add to localstorage

let submit1 = document.getElementById("btn-delete");
submit1.addEventListener("click", (event) => {
  event.preventDefault();

  const quizquestions = JSON.parse(localStorage.getItem("quiz_questions_arr"));

  const url = window.location.search;
  const userparams = new URLSearchParams(url);
  const titles = userparams.get("title");

  const question = quizquestions.find((obj1) =>
    obj1.subarrays.find((obj2) =>
      obj2.obj.find((obj3) => obj3.courseName === titles)
    )
  );

  let findindex = quizquestions.indexOf(question);

  //delete the index from array
  quizquestions.splice(findindex, 1);

  //local set removed object new array
  localStorage.setItem("quiz_questions_arr", JSON.stringify(quizquestions));
  confirm("Are You Sure You Want to Delete this Quiz");
  alert("Quiz Removed from Your Course");
  window.location.href = "../pages/adminCoursesAdd.html";
});
