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
question:"The 20th term of the AP 7, 11, 15, 19, ... is:",
options:["79","81","83","85"],
answer:"83"
},
{
question:"If the 8th term of an AP is 31 and the common difference is 4, then the first term is:",
options:["1","2","3","4"],
answer:"3"
},
{
question:"Which of the following sequences is NOT an arithmetic progression?",
options:["5, 9, 13, 17","12, 8, 4, 0","2, 5, 9, 14","21, 16, 11, 6"],
answer:"2, 5, 9, 14"
},
{
question:"The common difference of the AP whose 5th term is 18 and 12th term is 39 is:",
options:["2","3","4","5"],
answer:"3"
},
{
question:"The 25th term of the AP -8, -3, 2, 7, ... is:",
options:["112","113","114","115"],
answer:"112"
},
{
question:"If the nth term of an AP is 6n - 5, then its 30th term is:",
options:["170","172","175","177"],
answer:"175"
},
{
question:"Three consecutive terms of an AP are x-2, x+3 and x+8. The common difference is:",
options:["3","4","5","6"],
answer:"5"
},
{
question:"The 15th term of the AP whose first term is -4 and common difference is 6 is:",
options:["74","76","78","80"],
answer:"80"
},
{
question:"If the first term of an AP is 10 and its 18th term is 61, then the common difference is:",
options:["2","3","4","5"],
answer:"3"
},
{
question:"Which term of the AP 4, 9, 14, 19, ... is equal to 99?",
options:["18th","19th","20th","21st"],
answer:"20th"
},
{
question:"If the 7th term of an AP is 29 and the 15th term is 61, then the first term is:",
options:["3","5","7","9"],
answer:"5"
},
{
question:"The nth term of an AP is 4n + 7. Which of the following numbers is NOT a term of this AP?",
options:["23","35","51","67"],
answer:"35"
},
{
question:"If x, 14 and 22 are three consecutive terms of an AP, then the value of x is:",
options:["4","6","8","10"],
answer:"6"
},
{
question:"The common difference of the AP whose 10th term is 37 and 18th term is 61 is:",
options:["2","3","4","5"],
answer:"3"
},
{
question:"If the first term of an AP is -7 and the common difference is 5, then the first positive term is:",
options:["2nd","3rd","4th","5th"],
answer:"3rd"
},
{
question:"Which of the following can never be the middle term of three consecutive terms of an AP?",
options:["15","22","31","None of these"],
answer:"None of these"
},
{
question:"The 40th term of the AP 3, 8, 13, 18, ... is:",
options:["193","198","203","208"],
answer:"198"
},
{
question:"If the nth term of an AP is 9 - 2n, then the common difference is:",
options:["-2","2","7","9"],
answer:"-2"
},
{
question:"How many two-digit numbers are divisible by 7?",
options:["12","13","14","15"],
answer:"13"
},
{
question:"If the first term of an AP is 11 and the common difference is -3, then which term is equal to -40?",
options:["17th","18th","19th","20th"],
answer:"18th"
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