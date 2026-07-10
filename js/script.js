/* ==========================================
   KIZASHI Japanese Institute
   script.js (Final Version)
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

function runCounter(counter) {

    const target = Number(counter.dataset.target || 0);

    let current = 0;

    const speed = Math.max(target / 80, 1);

    function update() {

        current += speed;

        if (current < target) {

            counter.textContent = Math.ceil(current);

            requestAnimationFrame(update);

        } else {

            counter.textContent = target;

        }

    }

    update();

}

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

const revealItems = document.querySelectorAll(

".section,.course-card,.why-card,.testimonial-card,.contact-card,.stat-box"

);

revealItems.forEach(item => {

    item.classList.add("hidden");

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

revealItems.forEach(item => {

    revealObserver.observe(item);

});

// ==========================
// Back To Top Button
// ==========================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (!topBtn) return;

    topBtn.style.display = window.scrollY > 500 ? "flex" : "none";

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

    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth",

                block: "start"

            });

            if (navMenu) {

                navMenu.classList.remove("active");

            }

        }

    });

});

// ==========================
// Active Navigation
// ==========================

const sections = document.querySelectorAll("section[id]");

const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (window.pageYOffset >= sectionTop) {

            current = section.id;

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

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

    if (!header) return;

    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {

        header.style.top = "0";

        header.classList.remove("scrolled");

        return;

    }

    if (currentScroll > lastScroll && currentScroll > 100) {

        header.style.top = "-85px";

    } else {

        header.style.top = "0";

    }

    if (currentScroll > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

    lastScroll = currentScroll;

});

// ==========================
// Mobile Menu
// ==========================

const menuBtn = document.querySelector(".menu-btn");

const navMenu = document.querySelector(".nav-links");

if (menuBtn && navMenu) {

    menuBtn.addEventListener("click", () => {

        navMenu.classList.toggle("active");

    });

}

// ==========================
// Console
// ==========================

console.log("✅ KIZASHI Website Loaded Successfully");
