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
question:"Which of the following spheres of the Earth contains all living organisms?",
options:["Atmosphere","Hydrosphere","Lithosphere","Biosphere"],
answer:"Biosphere"
},
{
question:"The continuous movement of water between the Earth's surface and the atmosphere is known as:",
options:["Carbon cycle","Nitrogen cycle","Water cycle","Rock cycle"],
answer:"Water cycle"
},
{
question:"Which process directly returns water vapour to the atmosphere from plant leaves?",
options:["Condensation","Precipitation","Transpiration","Infiltration"],
answer:"Transpiration"
},
{
question:"The major source of energy driving most processes in the Earth's system is:",
options:["Wind","Moon","Sun","Earth's core"],
answer:"Sun"
},
{
question:"Which of the following is an example of a biotic component of an ecosystem?",
options:["Air","Water","Fungi","Soil"],
answer:"Fungi"
},
{
question:"In the carbon cycle, green plants help reduce atmospheric carbon dioxide mainly through:",
options:["Respiration","Photosynthesis","Transpiration","Decomposition"],
answer:"Photosynthesis"
},
{
question:"Which of the following is an abiotic component of an ecosystem?",
options:["Grass","Bacteria","Water","Earthworm"],
answer:"Water"
},
{
question:"Which process converts atmospheric nitrogen into compounds that plants can use?",
options:["Photosynthesis","Nitrogen fixation","Respiration","Evaporation"],
answer:"Nitrogen fixation"
},
{
question:"Energy flow in an ecosystem is:",
options:["Cyclic","Unidirectional","Random","Bidirectional"],
answer:"Unidirectional"
},
{
question:"Which of the following best explains why decomposers are essential in ecosystems?",
options:["They produce oxygen","They recycle nutrients back into the environment","They increase rainfall","They absorb solar energy"],
answer:"They recycle nutrients back into the environment"
},
{
question:"Which of the following best represents the correct sequence of energy flow in an ecosystem?",
options:["Consumers → Producers → Decomposers","Sun → Producers → Consumers → Decomposers","Sun → Consumers → Producers → Decomposers","Producers → Sun → Consumers → Decomposers"],
answer:"Sun → Producers → Consumers → Decomposers"
},
{
question:"Which of the following processes returns carbon dioxide to the atmosphere?",
options:["Photosynthesis only","Respiration only","Respiration and decomposition","Nitrogen fixation"],
answer:"Respiration and decomposition"
},
{
question:"If all decomposers suddenly disappeared from an ecosystem, the immediate long-term effect would be:",
options:["Increase in oxygen production","Accumulation of dead organic matter and nutrient deficiency in soil","Increase in rainfall","Rapid increase in photosynthesis"],
answer:"Accumulation of dead organic matter and nutrient deficiency in soil"
},
{
question:"Which of the following is the best example of an interaction between the atmosphere and hydrosphere?",
options:["Volcanic eruption","Evaporation of seawater","Weathering of rocks","Root absorption of minerals"],
answer:"Evaporation of seawater"
},
{
question:"The process by which water enters the soil from the Earth's surface is called:",
options:["Condensation","Infiltration","Transpiration","Runoff"],
answer:"Infiltration"
},
{
question:"Which of the following statements about matter and energy in an ecosystem is correct?",
options:["Both matter and energy are recycled","Neither matter nor energy is recycled","Matter is recycled, but energy flows in one direction","Energy is recycled, but matter is not"],
answer:"Matter is recycled, but energy flows in one direction"
},
{
question:"Which of the following organisms occupies the first trophic level in a food chain?",
options:["Herbivores","Carnivores","Producers","Decomposers"],
answer:"Producers"
},
{
question:"A rabbit feeds on grass, and a fox feeds on the rabbit. Which organism is the primary consumer?",
options:["Grass","Rabbit","Fox","Decomposer"],
answer:"Rabbit"
},
{
question:"Which of the following is most likely to disturb the balance of the carbon cycle?",
options:["Afforestation","Large-scale deforestation","Rainfall","Nitrogen fixation"],
answer:"Large-scale deforestation"
},
{
question:"Which statement best explains why Earth is considered a system?",
options:["Its components function independently","Its spheres continuously interact by exchanging matter and energy","Only living organisms influence the environment","The atmosphere alone controls all natural processes"],
answer:"Its spheres continuously interact by exchanging matter and energy"
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