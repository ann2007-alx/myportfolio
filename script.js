document.getElementById("feedbackForm").addEventListener("submit", async function(event){

event.preventDefault();

const name = document.getElementById("name").value;
const email = document.getElementById("email").value;
const feedback = document.getElementById("feedback").value;

const res = await fetch("/contact", {
method: "POST",
headers: {
"Content-Type": "application/json"
},
body: JSON.stringify({ name, email, feedback })
});

const data = await res.json();

if(data.success){
alert("Thank you! Your feedback has been submitted.");
document.getElementById("feedbackForm").reset();
}else{
alert("Error saving feedback");
}

});
