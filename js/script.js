/*==================================================
KIZASHI Japanese Language & Career Academy
Version : V9 Premium
==================================================*/

'use strict';

/*==================================================
AOS
==================================================*/

AOS.init({
    duration: 1000,
    once: true,
    easing: "ease-in-out"
});

/*==================================================
MOBILE MENU
==================================================*/

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle) {

    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("active");

        menuToggle.innerHTML = navLinks.classList.contains("active")
            ? '<i class="fas fa-times"></i>'
            : '<i class="fas fa-bars"></i>';

    });

}

/*==================================================
CLOSE MOBILE MENU
==================================================*/

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        if(menuToggle){

            menuToggle.innerHTML =
            '<i class="fas fa-bars"></i>';

        }

    });

});

/*==================================================
STICKY HEADER
==================================================*/

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){

        header.style.background="rgba(255,255,255,.95)";

        header.style.boxShadow="0 10px 25px rgba(0,0,0,.08)";

    }

    else{

        header.style.background="rgba(255,255,255,.90)";

        header.style.boxShadow="none";

    }

});

/*==================================================
SCROLL TO TOP
==================================================*/

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

    if(window.scrollY>400){

        topBtn.style.display="flex";

    }

    else{

        topBtn.style.display="none";

    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

/*==================================================
SMOOTH SCROLL
==================================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        const target=document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

/*==================================================
COUNTER ANIMATION
==================================================*/

const counters=document.querySelectorAll(".counter");

const speed=200;

counters.forEach(counter=>{

    const animate=()=>{

        const value=+counter.getAttribute("data-target");

        const data=+counter.innerText;

        const time=value/speed;

        if(data<value){

            counter.innerText=Math.ceil(data+time);

            setTimeout(animate,10);

        }

        else{

            counter.innerText=value;

        }

    };

    animate();

});
/*==================================================
FAQ ACCORDION
==================================================*/

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");
    const icon = item.querySelector("i");

    question.addEventListener("click", () => {

        faqItems.forEach(other => {

            if (other !== item) {

                other.querySelector(".faq-answer").style.display = "none";

                other.querySelector("i").classList.remove("fa-minus");

                other.querySelector("i").classList.add("fa-plus");

            }

        });

        if (answer.style.display === "block") {

            answer.style.display = "none";

            icon.classList.remove("fa-minus");

            icon.classList.add("fa-plus");

        }

        else {

            answer.style.display = "block";

            icon.classList.remove("fa-plus");

            icon.classList.add("fa-minus");

        }

    });

});

/*==================================================
ACTIVE NAVIGATION
==================================================*/

const sections = document.querySelectorAll("section[id]");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (window.pageYOffset >= sectionTop &&
            window.pageYOffset < sectionTop + sectionHeight) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

/*==================================================
LOADER
==================================================*/

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if(loader){

        loader.style.opacity = "0";

        loader.style.visibility = "hidden";

        loader.style.transition = ".6s";

    }

});

/*==================================================
IMAGE HOVER EFFECT
==================================================*/

const galleryImages = document.querySelectorAll(".gallery-item img");

galleryImages.forEach(image => {

    image.addEventListener("mouseenter", () => {

        image.style.transform = "scale(1.1)";

    });

    image.addEventListener("mouseleave", () => {

        image.style.transform = "scale(1)";

    });

});

/*==================================================
SCROLL REVEAL EFFECT
==================================================*/

const revealElements = document.querySelectorAll(

".course-card,.why-card,.student-card,.testimonial-card,.company-box"

);

const revealObserver = new IntersectionObserver(

(entries) => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},

{

threshold:0.2

}

);

revealElements.forEach(el=>{

revealObserver.observe(el);

});

/*==================================================
BUTTON RIPPLE EFFECT
==================================================*/

const buttons = document.querySelectorAll(

".btn-primary,.btn-secondary,.course-btn"

);

buttons.forEach(button=>{

button.addEventListener("click",function(e){

const circle=document.createElement("span");

const diameter=Math.max(

button.clientWidth,

button.clientHeight

);

const radius=diameter/2;

circle.style.width=circle.style.height=`${diameter}px`;

circle.style.left=`${e.clientX-button.offsetLeft-radius}px`;

circle.style.top=`${e.clientY-button.offsetTop-radius}px`;

circle.classList.add("ripple");

const ripple=button.getElementsByClassName("ripple")[0];

if(ripple){

ripple.remove();

}

button.appendChild(circle);

});

});

/*==================================================
HERO FLOATING ANIMATION
==================================================*/

const heroImage=document.querySelector(".hero-right img");

if(heroImage){

window.addEventListener("mousemove",(e)=>{

const x=(window.innerWidth/2-e.pageX)/60;

const y=(window.innerHeight/2-e.pageY)/60;

heroImage.style.transform=

`translate(${x}px,${y}px)`;

});

}

/*==================================================
CONSOLE MESSAGE
==================================================*/

console.log(

"%cWelcome to KIZASHI 🇯🇵",

"color:white;background:#0F4C81;font-size:18px;padding:10px 20px;border-radius:8px;"

);

console.log(

"%cDesigned with ❤️",

"color:#C8102E;font-size:14px;"

);

/*==================================================
END OF SCRIPT
==================================================*/
