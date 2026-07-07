/* ===========================================
   KIZASHI Japanese Institute
   Premium JavaScript
=========================================== */

// ===============================
// Loader
// ===============================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (loader) {
        setTimeout(() => {
            loader.style.opacity = "0";
            loader.style.visibility = "hidden";
        }, 1000);
    }

});

// ===============================
// Counter Animation
// ===============================

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const updateCounter = () => {

        const target = +counter.dataset.target;
        const current = +counter.innerText;
        const increment = target / 80;

        if (current < target) {

            counter.innerText = Math.ceil(current + increment);
            setTimeout(updateCounter, 20);

        } else {

            counter.innerText = target;

        }

    };

    updateCounter();

});

// ===============================
// Back To Top
// ===============================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (!topBtn) return;

    if (window.scrollY > 500) {

        topBtn.style.display = "block";

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

// ===============================
// Header Effects
// ===============================

const header = document.querySelector(".header");
const thirukkural = document.querySelector(".thirukkural");

window.addEventListener("scroll", () => {

    if (!header) return;

    // Show navbar only after Thirukkural

    if (thirukkural && window.scrollY > thirukkural.offsetHeight - 80) {

        header.style.top = "0";

    } else {

        header.style.top = "-100px";

    }

    // Shadow

    if (window.scrollY > 80) {

        header.style.background = "rgba(5,8,22,.92)";
        header.style.boxShadow = "0 15px 40px rgba(0,0,0,.35)";

    } else {

        header.style.background = "rgba(5,8,22,.45)";
        header.style.boxShadow = "none";

    }

});

// ===============================
// Reveal Animation
// ===============================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.15

});

document.querySelectorAll(".section").forEach(section => {

    section.classList.add("hidden");
    observer.observe(section);

});

// ===============================
// Mobile Menu
// ===============================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("active");

    });

    document.querySelectorAll(".nav-links a").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

        });

    });

}