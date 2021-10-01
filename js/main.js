const form = document.getElementById("form");
const email = document.getElementById("email");
const button = document.getElementById("btn");
const text = document.getElementById("text");
const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

let inputValue = "";

function validation() {

        inputValue = email.value;

        if (inputValue.match(pattern)) 
        {
            form.classList.add("valid");
            form.classList.remove("invalid");
            text.style.color = "green";
            text.innerHTML = "Your Email Address is Valid";
            text.style.fontFamily = "Josefin Sans";
            text.style.fontSize = ".75rem";
            text.style.padding = "1rem";  
        }
        else 
        {
            form.classList.remove("valid");
            form.classList.add("invalid");
            text.innerHTML = "Please provide a valid email";
            text.style.color = "#ff0000";
            text.style.fontFamily = "Josefin Sans";
            text.style.fontSize = ".75rem";
            text.style.padding = "1rem";
           
        }


    
}