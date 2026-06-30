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
question:"Which of the following cell organelles is present in prokaryotic cells?",
options:["Mitochondria","Ribosomes","Golgi apparatus","Endoplasmic reticulum"],
answer:"Ribosomes"
},
{
question:"Which of the following statements is TRUE regarding the plasma membrane?",
options:["It is freely permeable","It is selectively permeable","It is present only in animal cells","It is made entirely of proteins"],
answer:"It is selectively permeable"
},
{
question:"Which cell organelle is called the 'suicidal bag' of the cell?",
options:["Golgi apparatus","Lysosome","Vacuole","Mitochondrion"],
answer:"Lysosome"
},
{
question:"Which of the following structures is absent in a mature mammalian red blood cell?",
options:["Cell membrane","Cytoplasm","Nucleus","Haemoglobin"],
answer:"Nucleus"
},
{
question:"The major function of ribosomes is:",
options:["Photosynthesis","Protein synthesis","Respiration","Lipid storage"],
answer:"Protein synthesis"
},
{
question:"Which of the following organelles contains its own DNA?",
options:["Golgi apparatus","Mitochondria","Lysosome","Ribosome"],
answer:"Mitochondria"
},
{
question:"Which of the following is responsible for packaging and secretion of cellular materials?",
options:["Endoplasmic reticulum","Golgi apparatus","Ribosome","Centrosome"],
answer:"Golgi apparatus"
},
{
question:"If a plant cell is placed in a highly concentrated salt solution, it will:",
options:["Burst","Become turgid","Undergo plasmolysis","Divide rapidly"],
answer:"Undergo plasmolysis"
},
{
question:"Which of the following cell organelles is absent in plant cells?",
options:["Cell wall","Centrosome","Chloroplast","Large vacuole"],
answer:"Centrosome"
},
{
question:"Which scientist first observed living cells under a microscope?",
options:["Robert Hooke","Antonie van Leeuwenhoek","Schleiden","Virchow"],
answer:"Antonie van Leeuwenhoek"
},
{
question:"Which of the following structures is present in plant cells but absent in animal cells?",
options:["Cell membrane","Cell wall","Nucleus","Cytoplasm"],
answer:"Cell wall"
},
{
question:"Which cell organelle is mainly responsible for intracellular digestion?",
options:["Mitochondrion","Lysosome","Ribosome","Nucleus"],
answer:"Lysosome"
},
{
question:"The movement of water molecules from a region of higher water concentration to a region of lower water concentration through a selectively permeable membrane is called:",
options:["Diffusion","Osmosis","Active transport","Endocytosis"],
answer:"Osmosis"
},
{
question:"Which of the following combinations is correctly matched?",
options:["Ribosome - Photosynthesis","Mitochondria - ATP production","Golgi apparatus - Cell division","Lysosome - Protein synthesis"],
answer:"Mitochondria - ATP production"
},
{
question:"Which of the following cell organelles is known as the 'powerhouse of the cell'?",
options:["Nucleus","Golgi apparatus","Mitochondrion","Vacuole"],
answer:"Mitochondrion"
},
{
question:"The membrane surrounding the nucleus is called:",
options:["Cell membrane","Nuclear membrane","Tonoplast","Plasma wall"],
answer:"Nuclear membrane"
},
{
question:"Which plastid is mainly responsible for storing starch in plant cells?",
options:["Chloroplast","Chromoplast","Leucoplast","Amyloplast"],
answer:"Amyloplast"
},
{
question:"Which of the following cell organelles is directly involved in the synthesis and transport of proteins?",
options:["Smooth endoplasmic reticulum","Rough endoplasmic reticulum","Golgi apparatus","Lysosome"],
answer:"Rough endoplasmic reticulum"
},
{
question:"Which of the following statements about vacuoles is correct?",
options:["They are absent in plant cells","Plant cells generally have one large central vacuole","Animal cells always have a large central vacuole","Vacuoles contain DNA"],
answer:"Plant cells generally have one large central vacuole"
},
{
question:"According to the Cell Theory, new cells are formed:",
options:["From non-living matter","By spontaneous generation","From pre-existing cells","From cytoplasm only"],
answer:"From pre-existing cells"
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