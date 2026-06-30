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
question:"Which of the following plant tissues is composed of living cells with unevenly thickened cell walls?",
options:["Parenchyma","Collenchyma","Sclerenchyma","Xylem"],
answer:"Collenchyma"
},
{
question:"Which tissue is primarily responsible for the transport of food in plants?",
options:["Xylem","Phloem","Parenchyma","Collenchyma"],
answer:"Phloem"
},
{
question:"Which of the following cells are dead at maturity?",
options:["Parenchyma","Collenchyma","Sclerenchyma","Companion cells"],
answer:"Sclerenchyma"
},
{
question:"The tissue responsible for increasing the girth of stems and roots is:",
options:["Apical meristem","Intercalary meristem","Lateral meristem","Permanent tissue"],
answer:"Lateral meristem"
},
{
question:"Which animal tissue is specialized for transmitting nerve impulses?",
options:["Muscular tissue","Epithelial tissue","Nervous tissue","Connective tissue"],
answer:"Nervous tissue"
},
{
question:"Which type of muscle is involuntary and striated?",
options:["Skeletal muscle","Smooth muscle","Cardiac muscle","Voluntary muscle"],
answer:"Cardiac muscle"
},
{
question:"Which connective tissue stores fat beneath the skin?",
options:["Areolar tissue","Adipose tissue","Cartilage","Bone"],
answer:"Adipose tissue"
},
{
question:"Which component of blood is mainly responsible for clotting?",
options:["RBCs","WBCs","Platelets","Plasma"],
answer:"Platelets"
},
{
question:"The cells of sclerenchyma become hard mainly due to the deposition of:",
options:["Cellulose","Lignin","Suberin","Cutin"],
answer:"Lignin"
},
{
question:"Which epithelial tissue permits rapid diffusion of substances?",
options:["Cuboidal epithelium","Simple squamous epithelium","Columnar epithelium","Ciliated epithelium"],
answer:"Simple squamous epithelium"
},
{
question:"Which of the following tissues provides maximum flexibility to young plant stems?",
options:["Parenchyma","Collenchyma","Sclerenchyma","Xylem"],
answer:"Collenchyma"
},
{
question:"Which of the following is a complex permanent tissue?",
options:["Parenchyma","Collenchyma","Sclerenchyma","Phloem"],
answer:"Phloem"
},
{
question:"Which element of xylem is mainly responsible for the conduction of water in flowering plants?",
options:["Xylem parenchyma","Xylem fibres","Vessels","Companion cells"],
answer:"Vessels"
},
{
question:"Which phloem element lacks a nucleus at maturity but remains living?",
options:["Companion cells","Phloem fibres","Sieve tube elements","Phloem parenchyma"],
answer:"Sieve tube elements"
},
{
question:"The meristem present at the base of leaves or internodes, responsible for rapid elongation, is:",
options:["Apical meristem","Lateral meristem","Intercalary meristem","Secondary meristem"],
answer:"Intercalary meristem"
},
{
question:"Which connective tissue forms tendons?",
options:["Areolar tissue","Dense regular connective tissue","Adipose tissue","Cartilage"],
answer:"Dense regular connective tissue"
},
{
question:"Which of the following is correctly matched?",
options:["Bone - Flexible connective tissue","Cartilage - Hardest connective tissue","Blood - Fluid connective tissue","Adipose tissue - Muscular tissue"],
answer:"Blood - Fluid connective tissue"
},
{
question:"Which muscle tissue is found in the walls of the stomach and intestine?",
options:["Cardiac muscle","Smooth muscle","Skeletal muscle","Striated voluntary muscle"],
answer:"Smooth muscle"
},
{
question:"Which type of epithelial tissue lines the alveoli of the lungs to facilitate rapid exchange of gases?",
options:["Cuboidal epithelium","Columnar epithelium","Simple squamous epithelium","Ciliated epithelium"],
answer:"Simple squamous epithelium"
},
{
question:"A tissue composed of living cells with thin cell walls, intercellular spaces and the ability to store food is most likely:",
options:["Sclerenchyma","Collenchyma","Parenchyma","Xylem"],
answer:"Parenchyma"
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