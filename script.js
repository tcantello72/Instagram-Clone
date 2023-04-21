const button = document.getElementById("login-button");
let userid = document.getElementById("username-input");

button.addEventListener("click", function ()
    {
        let useridstorge = userid.ariaValueMax;
        console.log(userid);
        userid.value = "";
        window.location.href = "./feed.html";
    })