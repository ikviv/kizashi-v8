/* ==========================================
   KIZASHI Japanese Institute
   script.js
========================================== */

// ==========================
// Loader
// ==========================
window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (loader) {

        setTimeout(() => {

            loader.style.opacity = "0";
            loader.style.visibility = "hidden";

        }, 700);

    }

});

// ==========================
// Counter Animation
// ==========================

const counters = document.querySelectorAll(".counter");

const runCounter = (counter) => {

    const target = Number(counter.dataset.target);

    let current = 0;

    const speed = target / 80;

    function update() {

        current += speed;

        if (current < target) {

            counter.innerText = Math.ceil(current);

            requestAnimationFrame(update);

        } else {

            counter.innerText = target;

        }

    }

    update();

};

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            runCounter(entry.target);

            counterObserver.unobserve(entry.target);

        }

    });

}, {

    threshold: 0.5

});

counters.forEach(counter => {

    counterObserver.observe(counter);

});

// ==========================
// Reveal Animation
// ==========================

const hiddenElements = document.querySelectorAll(

".section,.course-card,.why-card,.testimonial-card,.contact-card,.stat-box"

);

hiddenElements.forEach(el => {

    el.classList.add("hidden");

});

const revealObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.15

});

hiddenElements.forEach(el => {

    revealObserver.observe(el);

});

// ==========================
// Back To Top Button
// ==========================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (!topBtn) return;

    if (window.scrollY > 500) {

        topBtn.style.display = "flex";

    } else {

        topBtn.style.display = "none";

    }

});

if (topBtn) {

    topBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}

// ==========================
// Smooth Scroll
// ==========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            e.preventDefault();

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

// ==========================
// Active Navigation
// ==========================

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (

            link.getAttribute("href") === "#" + current

        ) {

            link.classList.add("active");

        }

    });

});

// ==========================
// Header Hide / Show
// ==========================

const header = document.querySelector(".header");

let lastScroll = 0;

window.addEventListener("scroll", () => {

    if(!header) return;

    const currentScroll = window.pageYOffset;

    if(currentScroll <= 0){

        header.style.top = "0";

        return;

    }

    if(currentScroll > lastScroll){

        header.style.top = "-100px";

    }else{

        header.style.top = "0";

    }

    lastScroll = currentScroll;

});

// ==========================
// Mobile Menu
// ==========================

const menuBtn = document.querySelector(".menu-btn");

const navMenu = document.querySelector(".nav-links");

if(menuBtn){

    menuBtn.addEventListener("click",()=>{

        navMenu.classList.toggle("active");

    });

}

// ==========================
// Gallery Hover Animation
// ==========================

document.querySelectorAll(".gallery-grid img").forEach(img=>{

    img.addEventListener("mouseenter",()=>{

        img.style.transform="scale(1.05)";

    });

    img.addEventListener("mouseleave",()=>{

        img.style.transform="scale(1)";

    });

});

console.log("✅ KIZASHI Website Loaded Successfully");
