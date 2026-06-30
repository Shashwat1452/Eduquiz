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
question:"Which subatomic particle determines the atomic number of an element?",
options:["Electron","Neutron","Proton","Nucleon"],
answer:"Proton"
},
{
question:"Two atoms have the same atomic number but different mass numbers. They are called:",
options:["Isobars","Isotopes","Isotones","Ions"],
answer:"Isotopes"
},
{
question:"The maximum number of electrons that can be accommodated in the L-shell is:",
options:["2","8","18","32"],
answer:"8"
},
{
question:"Which of the following particles has negligible mass compared to the other two?",
options:["Proton","Neutron","Electron","Alpha particle"],
answer:"Electron"
},
{
question:"An atom has atomic number 17 and mass number 35. The number of neutrons is:",
options:["17","18","35","52"],
answer:"18"
},
{
question:"Which scientist proposed the nuclear model of the atom based on the gold foil experiment?",
options:["J.J. Thomson","Ernest Rutherford","Niels Bohr","James Chadwick"],
answer:"Ernest Rutherford"
},
{
question:"Which statement about a neutral atom is always correct?",
options:["Number of protons = Number of neutrons","Number of protons = Number of electrons","Number of neutrons = Number of electrons","Mass number = Atomic number"],
answer:"Number of protons = Number of electrons"
},
{
question:"The valency of an element with electronic configuration 2,8,7 is:",
options:["1","2","3","7"],
answer:"1"
},
{
question:"Which of the following particles is located outside the nucleus?",
options:["Proton","Neutron","Electron","Nucleon"],
answer:"Electron"
},
{
question:"An atom has 15 protons and 16 neutrons. Its mass number is:",
options:["15","16","31","32"],
answer:"31"
},
{
question:"Which of the following pairs represents isobars?",
options:["¹⁴C and ¹⁴N","³⁵Cl and ³⁷Cl","²³Na and ²⁴Mg","¹²C and ¹³C"],
answer:"¹⁴C and ¹⁴N"
},
{
question:"An atom has electronic configuration 2,8,3. Its valency is:",
options:["1","2","3","5"],
answer:"3"
},
{
question:"Which of the following statements about Rutherford's atomic model is correct?",
options:["Electrons are embedded in a positively charged sphere","Most of the atom is empty space","Electrons revolve in fixed energy levels","Neutrons are present outside the nucleus"],
answer:"Most of the atom is empty space"
},
{
question:"An ion X²⁺ has 18 electrons. The atomic number of X is:",
options:["18","20","22","16"],
answer:"20"
},
{
question:"Which of the following has the greatest number of neutrons?",
options:["²³Na","²⁴Mg","²⁷Al","³¹P"],
answer:"³¹P"
},
{
question:"The electronic configuration of a chloride ion (Cl⁻) is:",
options:["2,8,7","2,8,8","2,7,8","2,8,8,1"],
answer:"2,8,8"
},
{
question:"Which of the following statements is TRUE?",
options:["All isotopes have identical mass numbers","All isobars have identical atomic numbers","Isotopes have the same chemical properties but different masses","Electrons contribute almost all of an atom's mass"],
answer:"Isotopes have the same chemical properties but different masses"
},
{
question:"An atom has mass number 40 and contains 22 neutrons. The number of electrons in its neutral atom is:",
options:["18","20","22","40"],
answer:"18"
},
{
question:"Which of the following electronic configurations is chemically most stable?",
options:["2,8","2,7","2,8,1","2,5"],
answer:"2,8"
},
{
question:"An element has atomic number 13. Which of the following is its electronic configuration?",
options:["2,8,3","2,7,4","2,8,2","2,6,5"],
answer:"2,8,3"
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