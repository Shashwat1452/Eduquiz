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
question:"A cube of side 6 cm is painted on all faces and cut into 216 equal smaller cubes. How many small cubes have exactly two faces painted?",
options:["24","36","48","54"],
answer:"24"
},
{
question:"A solid cube of side 8 cm is melted and recast into cubes of side 2 cm. How many small cubes are formed?",
options:["32","48","64","96"],
answer:"64"
},
{
question:"A cuboid has dimensions 12 cm × 10 cm × 8 cm. Its total surface area is:",
options:["592 cm²","624 cm²","656 cm²","680 cm²"],
answer:"592 cm²"
},
{
question:"A cylindrical tank has radius 7 cm and height 20 cm. Its volume is:",
options:["3080 cm³","1540 cm³","2940 cm³","6160 cm³"],
answer:"3080 cm³"
},
{
question:"A cube and a cuboid have the same volume. The cube has side 6 cm. If the cuboid has length 9 cm and breadth 6 cm, its height is:",
options:["2 cm","3 cm","4 cm","5 cm"],
answer:"4 cm"
},
{
question:"How many cubes of side 5 cm can be cut from a cuboid measuring 25 cm × 20 cm × 15 cm?",
options:["48","60","72","80"],
answer:"60"
},
{
question:"A cube of side 10 cm has a cubical hole of side 4 cm drilled completely through its centre. The volume of the remaining solid is:",
options:["936 cm³","964 cm³","900 cm³","904 cm³"],
answer:"936 cm³"
},
{
question:"A cuboid has length, breadth and height in the ratio 3 : 2 : 1. If its total surface area is 396 cm², its volume is:",
options:["324 cm³","432 cm³","648 cm³","864 cm³"],
answer:"432 cm³"
},
{
question:"The total surface area of a cube is 486 cm². Its volume is:",
options:["729 cm³","512 cm³","343 cm³","216 cm³"],
answer:"729 cm³"
},
{
question:"A cuboid measures 18 cm × 12 cm × 10 cm. What is the length of the longest rod that can fit completely inside it?",
options:["20 cm","22 cm","26 cm","28 cm"],
answer:"26 cm"
},
{
question:"A cube of side 9 cm is painted on all faces and cut into 729 equal cubes. How many small cubes have no face painted?",
options:["216","343","512","125"],
answer:"343"
},
{
question:"A cuboid of dimensions 24 cm × 18 cm × 12 cm is cut into the largest possible identical cubes. How many cubes are obtained?",
options:["48","72","96","144"],
answer:"72"
},
{
question:"The total surface area of a cube is equal to the lateral surface area of a cuboid having dimensions 12 cm × 9 cm × h cm. If the cube has side 12 cm, then h is:",
options:["6 cm","8 cm","9 cm","12 cm"],
answer:"8 cm"
},
{
question:"Three cubes of side 4 cm are joined face to face in a straight line. The total surface area of the new solid is:",
options:["192 cm²","160 cm²","176 cm²","144 cm²"],
answer:"160 cm²"
},
{
question:"A cube of side 12 cm is cut into cubes of side 3 cm. How many of the smaller cubes will have exactly one face painted?",
options:["56","96","24","48"],
answer:"96"
},
{
question:"A solid cube is melted and recast into 512 identical cubes. If each small cube has side 2 cm, then the side of the original cube is:",
options:["12 cm","14 cm","16 cm","18 cm"],
answer:"16 cm"
},
{
question:"A cuboid has dimensions 20 cm × 15 cm × 10 cm. If its length is increased by 20% while breadth and height remain unchanged, by what percentage does its volume increase?",
options:["10%","15%","20%","25%"],
answer:"20%"
},
{
question:"A cube has the same total surface area as a cuboid of dimensions 8 cm × 8 cm × 18 cm. The side of the cube is:",
options:["10 cm","11 cm","12 cm","13 cm"],
answer:"12 cm"
},
{
question:"A cube of side 15 cm has a smaller cube of side 9 cm removed from one corner. The volume of the remaining solid is:",
options:["2646 cm³","2916 cm³","3375 cm³","2187 cm³"],
answer:"2646 cm³"
},
{
question:"A cuboid measures 15 cm × 20 cm × 36 cm. The minimum number of largest possible cubes into which it can be cut is:",
options:["60","75","90","100"],
answer:"75"
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