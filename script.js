function showPage(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(page).classList.add('active');
}

// Typing Effect
const text = "Aspiring Tech Enthusiast | Cloud & Web Developer";
let i = 0;
function typeEffect() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeEffect, 50);
  }
}
typeEffect();

// Modal
function openModal(src) {
  document.getElementById("modal").style.display = "flex";
  document.getElementById("modalImg").src = src;
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

// ✅ UPDATED FEEDBACK FUNCTION
async function sendFeedback(event){
event.preventDefault();

const name = document.getElementById("name").value;
const email = document.getElementById("email").value;
const feedback = document.getElementById("feedback").value;

const response = await fetch("http://localhost:3000/contact", {
method: "POST",
headers: {
"Content-Type": "application/json"
},
body: JSON.stringify({ name, email, feedback })
});

const result = await response.json();

if(result.success){
alert("Thank you! Your feedback has been submitted.");
document.querySelector("form").reset();
}else{
alert("Error saving feedback");
}
}
