let password = document.querySelector(".password");
let showPassword = document.querySelector(".show-password");

showPassword.addEventListener("click", function(event) {
    event.preventDefault();
    if (password.type == "password") {
        password.type = 'text';
        showPassword.src = "eye-close.png"
    } else{
        password.type = "password";
        showPassword.src = "eye-open.png"
    }
});