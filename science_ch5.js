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
question:"Which separation technique is most suitable for obtaining pure salt from a salt solution?",
options:["Filtration","Evaporation","Magnetic separation","Sieving"],
answer:"Evaporation"
},
{
question:"Which property is mainly used in separating a mixture of iron filings and sulphur powder?",
options:["Density","Magnetism","Solubility","Particle size"],
answer:"Magnetism"
},
{
question:"Which method is best suited for separating cream from milk?",
options:["Filtration","Centrifugation","Evaporation","Sedimentation"],
answer:"Centrifugation"
},
{
question:"A mixture of sand, common salt and iron filings can be separated completely by using:",
options:["Magnet, filtration and evaporation","Magnet, dissolution, filtration and evaporation","Sieving, evaporation and filtration","Magnet and decantation only"],
answer:"Magnet, dissolution, filtration and evaporation"
},
{
question:"Which of the following is a homogeneous mixture?",
options:["Soil","Milk","Air","Sand and iron filings"],
answer:"Air"
},
{
question:"The process of separating insoluble solid particles from a liquid by allowing them to settle is called:",
options:["Filtration","Sedimentation","Sublimation","Distillation"],
answer:"Sedimentation"
},
{
question:"Which pair of substances can be separated by sublimation?",
options:["Salt and sugar","Ammonium chloride and sand","Iron and sulphur","Oil and water"],
answer:"Ammonium chloride and sand"
},
{
question:"Which property is mainly responsible for separation by paper chromatography?",
options:["Magnetic property","Difference in adsorption and solubility","Density","Boiling point"],
answer:"Difference in adsorption and solubility"
},
{
question:"Which method is most suitable for separating two completely miscible liquids having different boiling points?",
options:["Filtration","Simple distillation","Handpicking","Sieving"],
answer:"Simple distillation"
},
{
question:"A mixture of oil and water is best separated by using:",
options:["Separating funnel","Evaporation","Filtration","Sublimation"],
answer:"Separating funnel"
},
{
question:"A mixture contains iron filings, common salt and sand. Which sequence of methods will separate all three components correctly?",
options:["Magnetic separation → Dissolution in water → Filtration → Evaporation","Filtration → Magnetic separation → Evaporation","Evaporation → Magnetic separation → Filtration","Sieving → Filtration → Evaporation"],
answer:"Magnetic separation → Dissolution in water → Filtration → Evaporation"
},
{
question:"Which of the following methods depends primarily on the difference in particle size?",
options:["Chromatography","Sieving","Distillation","Centrifugation"],
answer:"Sieving"
},
{
question:"Which mixture can be separated by filtration?",
options:["Sugar and water","Oil and water","Sand and water","Alcohol and water"],
answer:"Sand and water"
},
{
question:"Which of the following is a heterogeneous mixture?",
options:["Brass","Air","Salt solution","Soil"],
answer:"Soil"
},
{
question:"Which separation technique is used to obtain distilled water from salt solution?",
options:["Evaporation","Simple distillation","Filtration","Chromatography"],
answer:"Simple distillation"
},
{
question:"A mixture of naphthalene and common salt can be separated by:",
options:["Sublimation","Filtration","Sieving","Decantation"],
answer:"Sublimation"
},
{
question:"Which property is mainly used in separating oil from water using a separating funnel?",
options:["Difference in boiling points","Difference in densities of immiscible liquids","Difference in particle size","Difference in magnetic properties"],
answer:"Difference in densities of immiscible liquids"
},
{
question:"Which of the following statements about a true solution is correct?",
options:["Its particles settle on standing","It is always opaque","Its components cannot be separated by ordinary filtration","It shows the Tyndall effect"],
answer:"Its components cannot be separated by ordinary filtration"
},
{
question:"Which of the following mixtures requires centrifugation for efficient separation?",
options:["Mud and water","Cream from milk","Iron filings and sulphur","Gravel and sand"],
answer:"Cream from milk"
},
{
question:"Which sequence correctly represents the increasing size of particles?",
options:["Solution < Suspension < Colloid","Colloid < Solution < Suspension","Suspension < Colloid < Solution","Colloid < Suspension < Solution"],
answer:"Solution < Colloid < Suspension"
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