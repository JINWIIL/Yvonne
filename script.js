 /* this is a little Javascript program , its for the people who will open the website in phone
 the funtion of the three lines on top of a website the (humburger manu icon) */
 
 const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active')
}