

//when click submit event function 
let submit = document.getElementById("submit")
submit.addEventListener("click", function (e){ 
     e.preventDefault();

     
 let email = document.getElementById("otp-input").value;
 console.log(email);

 let seller_register_arr = JSON.parse(localStorage.getItem("seller_register_arr"));
 console.log(seller_register_arr);

 //find user obj
 const get_obj = seller_register_arr.find((user) => user.email === email);
 console.log(get_obj);

 //if he is already a seller means only he can reset his/her passwrod
  if(get_obj != undefined) {

   document.getElementById("verify").style.display = "block";

   // random password generate using math.random()
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


    //required params to send to seller
    let params = {from_name: "freekyajmal@gmail.com",
               to_name: email,
               message: body,
              }

//email send event
emailjs.send("service_sp6m68x","template_1veprt4",params)
.then(
      message => {
        
        
        alert(`Please Verify Your Email ( ${email} )  \n Check the Spam folder also`) 

        let msg = prompt("Enter the OTP recieved in your email");

        if (msg == null || msg == "") {
         alert("It won't be empty");
        } else {

        
        console.log(msg);

        if( msg == otpforuser ){   
            alert("Your Email has Been Successfully Verified");


 
        //email verify done 
           
           let password = prompt("Please enter your password Should Contain One letter One Symbol 8 Characters");
          
        
            console.log(get_obj);
   
            //assign new in old
             get_obj.password = password
             get_obj.confirm_password = password
  
  
             //localset
             localStorage.setItem("seller_register_arr",JSON.stringify(seller_register_arr));
             alert("Your Password has been Successfully Updated");
             window.location.href = "sellerLogin.html";
              
    

        } else {
            alert("Email Not Verified OTP Not Match");
        }

    }

    
    }
      
    )

} else {
    alert("You are Not an Existing User of freshstocks. please Register first");
    window.location.href = 'register.html';
}



  });




//back function 
  function back() {
    window.location.href = "signin.html";
  }

