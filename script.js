// PAGE SWITCH
function showPage(pageId){
document.querySelectorAll(".page").forEach(page=>{
page.classList.remove("active");
});
document.getElementById(pageId).classList.add("active");
}

// SUPABASE
const supabaseUrl = "https://lzuzuvseqonsettitnyo.supabase.co";
const supabaseKey = "YOUR_KEY"; // paste your key here
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
