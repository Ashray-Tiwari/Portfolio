const navbarBurger = document.querySelector(".navbar-burger");
const navbarLinks = document.querySelector(".navbar-links");

navbarBurger.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

function sendEmail(){
    Email.send({
Host : "smtp.elasticemail.com",
Username : "ashraytiwari519@gmail.com",
Password : "B4E676E6F93F22103223B7158F3E27B6D61D",
To : "ashraytiwari519@gmail.com",
From : document.getElementById("email").value,
Subject : "This is the subject",
Body : "Name: " + document.getElementById("name").value 
+ "<br> Email: "+document.getElementById("email").value
+ "<br> Phone no: "+document.getElementById("phone").value
+ "<br> Message: "+document.getElementById("message").value

}).then(
message => alert("Message sent successfully")
);
  }


