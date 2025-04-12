
const themeToggleBtn = document.getElementById("theme-toggle-btn");
const body = document.body;
const mobileMenu = document.getElementById("mobile-menu");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-link");
const backToTopBtn = document.getElementById("back-to-top");
const revealItems = document.querySelectorAll(".reveal-item");
const greetingEl = document.getElementById("greeting");
const form = document.getElementById("contact-form");
const statusMsg = document.getElementById("form-status");

// Theme Toggle
themeToggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  localStorage.setItem("theme", body.classList.contains("dark-mode") ? "dark" : "light");
});

// Check for saved theme preference
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  body.classList.add("dark-mode");
} else if (savedTheme === "light") {
  body.classList.remove("dark-mode");
}

// Mobile Menu Toggle
mobileMenu.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// Close mobile menu when clicking a nav link
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
    navMenu.classList.remove("active");
  });
});

// Smooth Scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Back to Top Button
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopBtn.classList.add("active");
  } else {
    backToTopBtn.classList.remove("active");
  }

  // Reveal animations on scroll
  revealItems.forEach((item) => {
    const itemTop = item.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (itemTop &lt; windowHeight - 100) {
      item.classList.add("active");
    }
  });
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Dynamic Greeting based on time
function updateGreeting() {
  const now = new Date();
  const hour = now.getHours();

  let greetingText = "Hello 👋";
  if (hour &lt; 12) {
    greetingText = "Good Morning ☀️";
  } else if (hour &lt; 18) {
    greetingText = "Good Afternoon 🌤️";
  } else {
    greetingText = "Good Evening 🌙";
  }

  greetingEl.textContent = greetingText;
}

updateGreeting();

// Simple typing effect
const typingElement = document.querySelector(".typing");
const phrases = ["Om Kariya", "a Full Stack Developer", "a MERN Stack Expert", "a Problem Solver"];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingDelay = 100;

function typeEffect() {
  const currentPhrase = phrases[phraseIndex];
  
  if (isDeleting) {
    typingElement.textContent = currentPhrase.substring(0, charIndex - 1);
    charIndex--;
    typingDelay = 50;
  } else {
    typingElement.textContent = currentPhrase.substring(0, charIndex + 1);
    charIndex++;
    typingDelay = 150;
  }
  
  if (!isDeleting && charIndex === currentPhrase.length) {
    isDeleting = true;
    typingDelay = 1000; // Pause at end
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    typingDelay = 500; // Pause before typing next
  }
  
  setTimeout(typeEffect, typingDelay);
}

// Start the typing effect
setTimeout(typeEffect, 1000);

// Form Submission
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message")?.value.trim() || "";

  if (!name || !email || !subject) {
    statusMsg.textContent = "Please fill out all fields.";
    statusMsg.style.color = "red";
    return;
  }

  statusMsg.textContent = "Sending...";
  statusMsg.style.color = "#555";

  // Simulate form submission (replace with actual form submission)
  setTimeout(() => {
    statusMsg.textContent = "Message sent successfully!";
    statusMsg.style.color = "var(--secondary-color)";
    form.reset();
  }, 1500);
});

// Preload animations
window.addEventListener("load", () => {
  // Add active class to first few elements immediately
  const initialItems = document.querySelectorAll("#Home .reveal-item");
  initialItems.forEach((item) => {
    setTimeout(() => {
      item.classList.add("active");
    }, 300);
  });
});
