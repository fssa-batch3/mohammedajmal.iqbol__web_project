
//get seller email from urlparams
let url = window.location.search;
let urlParams = new URLSearchParams(url);
let email = urlParams.get("email");
console.log(email);


//this event will happen when seller clicks submit
let submit = document.getElementById("submit")
submit.addEventListener("click", function (e) {
  e.preventDefault();


  document.getElementById("otp-input").style.display = "block";
  document.getElementById("verify").style.display = "block";


  //generate random otp for seller
  let randomArray = new Uint32Array(1);
  window.crypto.getRandomValues(randomArray);
  let otpforuser = randomArray[0] % 900000 + 100000;
  console.log(otpforuser);

  //body content of the email
  let body = `

Dear [${email}],

Thank you for signing up for an account on freshstocks. To complete your account registration, please use the following One-Time Password (OTP) to verify your account:

Please Use this OTP to Verify [${otpforuser}]

Please note that this OTP is valid for 5 minutes only. If you do not use it within this time frame, you will need to request a new OTP.

To enter the OTP, please follow these steps:

Go to the registration page on our website.
Enter your email address and password.
When prompted for the OTP, enter the code provided above.
Click "Verify" to complete your account registration.
If you have any questions or concerns, please do not hesitate to contact us at ${'freekyajmal@gmail.com'}.

Thank you for choosing freshstocks.

`;

//required params to send email to seller
  let params = {
    from_name: "freekyajmal@gmail.com",
    to_name: email,
    message: body,
  }

  //email send event
  emailjs.send("service_sp6m68x", "template_uo2qcla", params)
    .then(
      message => {

         //alerting the user
        alert(`Please Verify Your Email ( ${email} )  \n Check the Spam folder also`)


//verify user using his/her otp received in email
        let verify = document.getElementById("verify");
        verify.addEventListener("click", (event) => {
          event.preventDefault();

          let otpinput = document.getElementById("otp-input").value;
          console.log(otpinput);

          //if verified success if not unsuccess
          if (otpinput == otpforuser) {
            alert("Your Email has Been Successfully Verified");
            window.location.href = "sellerLogin.html";
          } else {
            alert("Email Not Verified OTP Not Match");
          }

        });

      }

    );



});




//back function
function back() {
  window.location.href = "sellerRegister.html";
}
