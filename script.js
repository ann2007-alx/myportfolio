console.log("script loaded");
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

// ✅ FINAL FEEDBACK FUNCTION (FIXED)
async function sendFeedback(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const feedback = document.getElementById("feedback").value;

  try {
    const response = await fetch("https://marie-feedback-backend.onrender.com/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email, feedback })
    });

    // Check HTTP status
    if (!response.ok) {
      throw new Error("HTTP error: " + response.status);
    }

    // Check if response is JSON
    const contentType = response.headers.get("content-type");

    let result;

    if (contentType && contentType.includes("application/json")) {
      result = await response.json();
    } else {
      const text = await response.text();
      console.log("Unexpected response:", text);
      throw new Error("Invalid JSON response from server");
    }

    // Handle backend response
    if (result.success) {
      alert(result.message || "Thank you! Your feedback has been submitted.");
      document.querySelector("form").reset();
    } else {
      alert(result.message || "Error saving feedback");
    }

  } catch (error) {
    console.log(error);
    alert("Failed to connect to server");
  }
}
