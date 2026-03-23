// PAGE SWITCH
function showPage(pageId){
document.querySelectorAll(".page").forEach(page=>{
page.classList.remove("active");
});
document.getElementById(pageId).classList.add("active");
}

// SUPABASE
const supabaseUrl = "https://lzuzuvseqonsettitnyo.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx6dXp1dnNlcW9uc2V0dGl0bnlvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM1NTU0MTAsImV4cCI6MjA4OTEzMTQxMH0.MRpz9Xv5vaqdEfjWqYa6rfnG0kwMX_5-1_sSB4vV1bc";
const supabaseClient = supabase.createClient(supabaseUrl, supabaseKey);

async function sendFeedback(event){
event.preventDefault();

const name = document.getElementById("name").value;
const email = document.getElementById("email").value;
const feedback = document.getElementById("feedback").value;

const { error } = await supabaseClient
.from("feedback")
.insert([{ name, email, feedback }]);

if(error){
alert("Error saving feedback");
console.log(error);
}else{
alert("Thank you! Your feedback has been submitted.");
document.querySelector("form").reset();
}
}
