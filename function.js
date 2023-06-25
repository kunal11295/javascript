
function login(event) {
    // alert("registered successfully");
    event.preventDefault();

    var name = document.getElementById("name").value;

    var email = document.getElementById("email").value;

    var password = document.getElementById("password").value;

    var confirmpassword = document.getElementById("cpassword").value;

    if (name && email && password && confirmpassword) {
        if (password.length >= 8 && confirmpassword.length >= 8) {
            if (password == confirmpassword) {

                var ls = JSON.parse(localStorage.getItem("User")) || [];
                var flag = false;
                for (var i = 0; i < ls.length; i++) {
                    if (ls[i].useremail == email) {
                        flag = true;
                    }
                }

                if (!flag) {
                    var userdata = { name: name, email: email, paswword: password, cpassword: confirmpassword }
                    ls.push(userdata);

                    localStorage.setItem("User", JSON.stringify(ls));
                    alert("registration successfull");
                    document.getElementById("name").value = "";
                    document.getElementById("email").value = "";
                    document.getElementById("password").value = "";
                    document.getElementById("cpassword").value = "";
                }
            } else {
                console.log("password not matched");
            }
        } else {
            console.log("password should contain 8 digit");
        }
    } else {
        console.log("all fields are mandatory");
    }
}