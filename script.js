console.log("script loaded");

// Page navigation
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

// Feedback submission
window.sendFeedback = async function (event) {
  console.log("FORM SUBMITTED");

  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const feedback = document.getElementById("feedback").value.trim();

  if (!name || !email || !feedback) {
    alert("All fields are required");
    return;
  }

  const payload = { name, email, feedback };
  console.log("Sending to backend:", payload);

  try {
    const response = await fetch("https://portfolio-mk8b.onrender.com/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    console.log("HTTP status:", response.status);

    if (!response.ok) {
      throw new Error("HTTP error: " + response.status);
    }

    const result = await response.json();
    console.log("Backend response:", result);

    if (result.success) {
      alert(result.message || "Thank you! Your feedback has been submitted.");
      document.querySelector("form").reset();
    } else {
      alert(result.message || "Error saving feedback");
    }

  } catch (error) {
    console.error("Error:", error);
    alert("Failed to connect to server");
  }
};
