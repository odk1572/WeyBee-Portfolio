const greetingEl = document.getElementById('greeting');
const now = new Date();
const hour = now.getHours();

let greetingText = "Hello 👋";
if (hour < 12) {
    greetingText = "Good Morning ☀️";
} else if (hour < 18) {
    greetingText = "Good Afternoon 🌤️";
} else {
    greetingText = "Good Evening 🌙";
}

greetingEl.innerHTML = `${greetingText}, I am Om Kariya`;

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});

const form = document.getElementById("contact-form");
const statusMsg = document.getElementById("form-status");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();

    if (!name || !email || !subject) {
        statusMsg.textContent = "Please fill out all fields.";
        statusMsg.style.color = "red";
        return;
    }

    statusMsg.textContent = "Sending...";
    statusMsg.style.color = "#555";

    setTimeout(() => {
        statusMsg.textContent = "Message sent successfully!";
        statusMsg.style.color = "green";
        form.reset();
    }, 1500);
});
