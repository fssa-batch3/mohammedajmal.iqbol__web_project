
//email send to user for contact using API


let message = document.getElementById("message").value;
console.log(message);

let submit = document.getElementById("submit");
submit.addEventListener("submit", function (e) {
  e.preventDefault();


  //get email value
  let email = document.getElementById("email").value;
console.log(email); 


//required params to send email via emailjs.com
let params = {from_name: "freekyajmal@gmail.com",
               to_name: email,
               message: `Hello ${email}This Is Your Message ${message}Thank You Conacting Us.`,}

//email send event
emailjs.send("service_sp6m68x","template_uo2qcla",params)
.then((res) => {
  console.log(res);
  alert("We will contact You Soon");
}) 
.catch((err) =>{
  console.log(err);
})
      

});


//navbar responsive code
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}