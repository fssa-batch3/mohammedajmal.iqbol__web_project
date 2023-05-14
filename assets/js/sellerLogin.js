//seller login page js code start

let login = document.getElementById("form");
login.addEventListener("submit", (event) => {
  event.preventDefault();

  //try statement
  try {
    let seller_register_arr = JSON.parse(
      localStorage.getItem("seller_register_arr")
    );

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (email == "" && password == "") {
      alert("please fill the details");
    }

    let match = false;
    for (let i = 0; i < seller_register_arr.length; i++) {
      if (
        email == seller_register_arr[i]["email"] &&
        password == seller_register_arr[i]["password"]
      ) {
        match = true;
        localStorage.setItem(
          "seller_login_arr",
          JSON.stringify(seller_register_arr[i]["email"])
        );
        break;
      } else {
        match = false;
      }
    }

    const matched = match == true;
    if (matched) {
      alert("seller login successfully");

      let newWindow = window.open("../pages/adminCoursesAdd.html", '_blank', "noopener,noreferrer");
window.close();
newWindow.focus();
    } else {
      alert("invalid seller credentials");
    }

    //catch statement
  } catch (error) {
    console.error("Error" + error);
  }
});

//seller login page js code end
