/* ==========================================
   SHINDE'S GIRLS HOSTEL
   Professional Website V3.0
========================================== */

// Sticky Navbar Shadow
window.addEventListener("scroll", function () {

const navbar = document.querySelector(".navbar");

if (window.scrollY > 50) {

navbar.style.boxShadow =
"0 10px 30px rgba(0,0,0,.15)";

} else {

navbar.style.boxShadow =
"0 5px 20px rgba(0,0,0,.08)";

}

});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener("click", function(e){

e.preventDefault();

const target = document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

// Scroll Reveal Animation
const revealItems = document.querySelectorAll(
".facility-card,.room-card,.why-grid div,.gallery-grid img,.contact-info,.contact-form,.about-content,.about-image"
);

const reveal = () => {

revealItems.forEach(item=>{

const top = item.getBoundingClientRect().top;

if(top < window.innerHeight-100){

item.style.opacity="1";

item.style.transform="translateY(0px)";

}

});

};

revealItems.forEach(item=>{

item.style.opacity="0";

item.style.transform="translateY(40px)";

item.style.transition="all .7s ease";

});

window.addEventListener("scroll",reveal);

reveal();


// Active Menu
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top = section.offsetTop-150;

const height = section.clientHeight;

if(pageYOffset>=top){

current = section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});

// Gallery Hover Effect
document.querySelectorAll(".gallery-grid img").forEach(img=>{

img.addEventListener("click",()=>{

img.style.transform="scale(1.1)";

setTimeout(()=>{

img.style.transform="scale(1)";

},300);

});

});

// Contact Form
const form = document.querySelector("form");

if(form){

form.addEventListener("submit",(e)=>{

e.preventDefault();

alert(
"Thank You! Your inquiry has been received. We will contact you soon."
);

form.reset();

});

}

console.log("SHINDE'S GIRLS HOSTEL Version 3.0 Loaded Successfully");
