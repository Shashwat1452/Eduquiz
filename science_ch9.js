// ================= HOME BUTTON =================
const startBtn = document.getElementById("startBtn");

if (startBtn) {
startBtn.onclick = () => {
location.href = "subjects.html";
};
}
let current=0;
let score=0;
let selected="";
const questions = [
{
question:"Which of the following observations provides the strongest evidence that matter is made up of tiny particles?",
options:["Expansion of solids on heating","Diffusion of perfume in air","Reflection of light","Formation of shadows"],
answer:"Diffusion of perfume in air"
},
{
question:"The rate of diffusion is maximum in:",
options:["Solids","Liquids","Gases","It is the same in all states"],
answer:"Gases"
},
{
question:"Which change requires the absorption of latent heat?",
options:["Freezing of water","Condensation of steam","Melting of ice","Deposition of water vapour"],
answer:"Melting of ice"
},
{
question:"The force of attraction between particles is strongest in:",
options:["Gas","Liquid","Solid","Plasma"],
answer:"Solid"
},
{
question:"Which property of gases allows them to be compressed easily?",
options:["High density","Large intermolecular spaces","Strong intermolecular forces","Fixed volume"],
answer:"Large intermolecular spaces"
},
{
question:"During the melting of ice at 0°C, the temperature remains constant because the heat supplied is used to:",
options:["Increase kinetic energy","Break intermolecular forces","Increase pressure","Increase density"],
answer:"Break intermolecular forces"
},
{
question:"Which of the following changes is an example of sublimation?",
options:["Ice to water","Water to steam","Camphor to vapour","Steam to water"],
answer:"Camphor to vapour"
},
{
question:"Which state of matter has a definite volume but no definite shape?",
options:["Solid","Liquid","Gas","Plasma"],
answer:"Liquid"
},
{
question:"The phenomenon of diffusion occurs because particles of matter:",
options:["Are stationary","Are continuously moving","Have no mass","Always attract each other strongly"],
answer:"Are continuously moving"
},
{
question:"Which process converts a gas directly into a solid without passing through the liquid state?",
options:["Sublimation","Evaporation","Deposition","Condensation"],
answer:"Deposition"
},
{
question:"Evaporation causes cooling because:",
options:["The temperature of the liquid increases","The highest-energy particles escape from the surface","The liquid absorbs less heat from the surroundings","The mass of the liquid increases"],
answer:"The highest-energy particles escape from the surface"
},
{
question:"Which of the following factors does NOT increase the rate of evaporation?",
options:["Increasing surface area","Increasing temperature","Increasing humidity","Increasing wind speed"],
answer:"Increasing humidity"
},
{
question:"Which state of matter has the highest kinetic energy of particles?",
options:["Solid","Liquid","Gas","All have the same kinetic energy"],
answer:"Gas"
},
{
question:"A gas is compressed by applying pressure at constant temperature. The main reason its volume decreases is:",
options:["Its particles become smaller","The intermolecular spaces decrease","Its mass decreases","The particles stop moving"],
answer:"The intermolecular spaces decrease"
},
{
question:"Which of the following correctly compares the forces of attraction between particles?",
options:["Gas > Liquid > Solid","Solid > Liquid > Gas","Liquid > Solid > Gas","Solid > Gas > Liquid"],
answer:"Solid > Liquid > Gas"
},
{
question:"At the boiling point of a liquid, the heat supplied is mainly used to:",
options:["Increase the temperature of the liquid","Increase the kinetic energy of particles","Overcome intermolecular forces","Increase the density of the liquid"],
answer:"Overcome intermolecular forces"
},
{
question:"Which of the following observations best demonstrates that particles of matter attract one another?",
options:["The smell of perfume spreads across a room","A piece of chalk can be broken into smaller pieces","Water droplets join together to form larger drops","Steam occupies more space than water"],
answer:"Water droplets join together to form larger drops"
},
{
question:"The diffusion of gases is faster than that of liquids mainly because gases have:",
options:["Higher density","Greater intermolecular spaces and kinetic energy","Lower temperature","Larger particle size"],
answer:"Greater intermolecular spaces and kinetic energy"
},
{
question:"Which of the following processes is endothermic?",
options:["Freezing","Condensation","Deposition","Sublimation"],
answer:"Sublimation"
},
{
question:"A solid changes directly into vapour on heating. This process is called:",
options:["Fusion","Evaporation","Sublimation","Condensation"],
answer:"Sublimation"
}
];


// ================= ELEMENTS =================
const q = document.getElementById("question");
const op1 = document.getElementById("op1");
const op2 = document.getElementById("op2");
const op3 = document.getElementById("op3");
const op4 = document.getElementById("op4");
const nextBtn = document.getElementById("nextBtn");

// ================= LOAD QUESTION =================
function loadQuestion() {
if (!q) return;

q.innerText = questions[current].question;

op1.innerText = questions[current].options[0];
op2.innerText = questions[current].options[1];
op3.innerText = questions[current].options[2];
op4.innerText = questions[current].options[3];

selected = "";
}

if (q) loadQuestion();

// ================= OPTIONS CLICK =================
if (op1) op1.onclick = () => selected = op1.innerText;
if (op2) op2.onclick = () => selected = op2.innerText;
if (op3) op3.onclick = () => selected = op3.innerText;
if (op4) op4.onclick = () => selected = op4.innerText;

// ================= NEXT BUTTON =================
if (nextBtn) {
nextBtn.onclick = () => {

if (selected === "") {
alert("Select an option!");
return;
}

if (selected === questions[current].answer) {
score++;
}

current++;

if (current < questions.length) {
loadQuestion();
} else {
location.href = `result.html?score=${score}&total=${questions.length}`;
}

};
}

// ================= RESULT PAGE =================
const resultBox = document.getElementById("resultBox");

if (resultBox) {

const urlParams = new URLSearchParams(window.location.search);

const score = urlParams.get("score");
const total = urlParams.get("total");

const percent = Math.round((score / total) * 100);

resultBox.innerHTML =
`Score: ${score}/${total}<br>Percentage: ${percent}%`;
}