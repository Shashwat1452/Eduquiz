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
question:"Which of the following is a characteristic feature of asexual reproduction?",
options:["Involves fusion of gametes","Produces genetically identical offspring","Always requires two parents","Results in high genetic variation"],
answer:"Produces genetically identical offspring"
},
{
question:"Binary fission is commonly seen in:",
options:["Hydra","Amoeba","Yeast","Spirogyra"],
answer:"Amoeba"
},
{
question:"Which method of asexual reproduction occurs in Hydra?",
options:["Binary fission","Multiple fission","Budding","Fragmentation"],
answer:"Budding"
},
{
question:"The male reproductive cell in flowering plants is present inside the:",
options:["Ovule","Pollen grain","Anther","Ovary"],
answer:"Pollen grain"
},
{
question:"After fertilization in flowering plants, the ovule develops into the:",
options:["Fruit","Seed","Embryo sac","Flower"],
answer:"Seed"
},
{
question:"Which of the following organisms reproduces by fragmentation?",
options:["Hydra","Yeast","Spirogyra","Amoeba"],
answer:"Spirogyra"
},
{
question:"The fusion of male and female gametes is called:",
options:["Pollination","Fertilization","Budding","Germination"],
answer:"Fertilization"
},
{
question:"Which part of a flower receives pollen grains during pollination?",
options:["Anther","Style","Stigma","Ovary"],
answer:"Stigma"
},
{
question:"Which type of pollination occurs when pollen is transferred to the stigma of another flower of the same species?",
options:["Self-pollination","Cross-pollination","Vegetative propagation","Budding"],
answer:"Cross-pollination"
},
{
question:"Which of the following is an example of vegetative propagation?",
options:["Potato tuber","Amoeba","Hydra","Yeast"],
answer:"Potato tuber"
},
{
question:"Which of the following structures develops into a fruit after fertilization in a flowering plant?",
options:["Ovule","Ovary","Anther","Stigma"],
answer:"Ovary"
},
{
question:"Which of the following is an advantage of sexual reproduction over asexual reproduction?",
options:["Produces identical offspring","Requires only one parent","Generates genetic variation","Is always faster"],
answer:"Generates genetic variation"
},
{
question:"Which of the following is NOT a method of vegetative propagation?",
options:["Stem cutting","Layering","Grafting","Binary fission"],
answer:"Binary fission"
},
{
question:"The transfer of pollen grains from the anther to the stigma of the same flower is called:",
options:["Cross-pollination","Self-pollination","Fertilization","Germination"],
answer:"Self-pollination"
},
{
question:"Which of the following agents commonly helps in cross-pollination?",
options:["Wind","Water","Insects","All of these"],
answer:"All of these"
},
{
question:"In flowering plants, fertilization takes place inside the:",
options:["Anther","Stigma","Ovule","Petal"],
answer:"Ovule"
},
{
question:"Which of the following pairs is correctly matched?",
options:["Yeast - Binary fission","Hydra - Budding","Spirogyra - Budding","Amoeba - Fragmentation"],
answer:"Hydra - Budding"
},
{
question:"Which structure connects the stigma to the ovary in a flower?",
options:["Filament","Style","Sepal","Pedicel"],
answer:"Style"
},
{
question:"A farmer wants to produce a large number of plants that are genetically identical to the parent plant. Which method is most suitable?",
options:["Cross-pollination","Vegetative propagation","Sexual reproduction","Seed formation"],
answer:"Vegetative propagation"
},
{
question:"Which sequence correctly represents the events in sexual reproduction of flowering plants?",
options:["Pollination → Fertilization → Seed formation → Fruit formation","Fertilization → Pollination → Fruit formation → Seed formation","Seed formation → Pollination → Fertilization → Fruit formation","Fruit formation → Fertilization → Pollination → Seed formation"],
answer:"Pollination → Fertilization → Seed formation → Fruit formation"
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