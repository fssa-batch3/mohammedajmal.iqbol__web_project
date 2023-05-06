//user login password compare

let password = document.getElementById("password");

let hashedpassword;
password.addEventListener(
  "input",
  (userInputPassword, saltAndHashedPassword) => {

    let register_data = JSON.parse(localStorage.getItem("register_arr"));
    console.log(register_data);
    
    let datasall;
    // if( event.key === 'Enter' ){
    for (let i = 0; i < register_data.length; i++) {
      datasall = register_data[i]["password"];
    }

    console.log(datasall);
    // function encryptPassword(password) {
    let passwordval = document.getElementById("password").value;
    console.log(passwordval);

    try {
      const saltAndHashedPassword = datasall;
      // Split the stored salt and hashed password
      const [salt, storedHash] = saltAndHashedPassword.split(" ");

      // Hash the user input password with the stored salt
      const hashedPassword = CryptoJS.SHA256(
        passwordval + CryptoJS.enc.Hex.parse(salt)
      );

      console.log(hashedPassword.toString() === storedHash);

      hashedpassword = hashedPassword.toString() === storedHash;

      console.log(hashedpassword);
      // Compare the hashed user input password with the stored hash
      return hashedPassword.toString() === storedHash;
    } catch (error) {
      console.error("Error comparing password:", error);
      throw error;
    }
    // }

    // };
  }
);

//user login page js code start

let login = document.getElementById("form");
login.addEventListener("submit", (event) => {
  event.preventDefault();

  //try statement
  try {
    let register_data = JSON.parse(localStorage.getItem("register_arr"));
    console.log(register_data);

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let match = false;
    for (let i = 0; i < register_data.length; i++) {
      if (email == register_data[i]["email"] && hashedpassword === true) {
        match = true;
        localStorage.setItem(
          "login_arr",
          JSON.stringify(register_data[i]["email"])
        );
        break;
      } else {
        match = false;
      }
    }

    if (match == true) {
      alert("user login successfully");
      window.location.href = "userHome.html";
    } else {
      alert("invalid user credentials");
    }

    //catch statement
  } catch (error) {
    console.log("Error" + error);
  }
});

//user login page js code end
