function login(event) {
    event.preventDefault();

    var userEmail = document.getElementById("useremail").value;
    var userPassword = document.getElementById("userpassword").value;

    var Ls = JSON.parse(localStorage.getItem("onecurrentuser"));
    var flag = false;
    for (var i = 0;i<=Ls.length; i++) 
    {
        if (Ls[i].userEmail == userEmail && Ls[i].userPassword == userPassword) {
            flag = true;
        }
    }
    if (flag == true) {
        localStorage.setItem("onecurrentuser",JSON.stringify(Ls));
        window.location.href=`./home.html`;
        alert("login successfull")
    }
    else {
        alert("credintials not matched")
    }

}



