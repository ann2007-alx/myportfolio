// PAGE SWITCH
// PAGE SWITCH
function showPage(pageId){
document.querySelectorAll(".page").forEach(page=>{
page.classList.remove("active");
});
document.getElementById(pageId).classList.add("active");
}

// ✅ SEND DATA TO BACKEND (instead of Supabase directly)
async function sendFeedback(event){
event.preventDefault();

const name = document.getElementById("name").value;
const email = document.getElementById("email").value;
const feedback = document.getElementById("feedback").value;

try {
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

} catch (error) {
console.log(error);
alert("Server error");
}
}
