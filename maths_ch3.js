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
question:"If x = √5 + √3, then the value of (x² - 8)² is:",
options:["30","60","120","240"],
answer:"240"
},
{
question:"Which of the following numbers is irrational?",
options:["(√2 + √3)(√3 - √2)","√48 - 4√3","√50 - 5√2","√7 + √11"],
answer:"√7 + √11"
},
{
question:"The least number which when divided by 12, 15 and 18 leaves remainder 5 is:",
options:["175","185","365","545"],
answer:"185"
},
{
question:"Let N = 2⁴ × 3³ × 5² × 7. How many factors of N are perfect squares?",
options:["18","24","30","36"],
answer:"36"
},
{
question:"Which of the following has a terminating decimal expansion?",
options:["231/625","91/420","77/360","143/540"],
answer:"231/625"
},
{
question:"The HCF of two numbers is 18 and their product is 19440. If their LCM is 1080, then the numbers are:",
options:["180 and 108","216 and 90","Cannot be determined uniquely","360 and 54"],
answer:"Cannot be determined uniquely"
},
{
question:"Which statement is always true?",
options:["The sum of two irrational numbers is irrational.","The product of two irrational numbers is irrational.","The product of a non-zero rational number and an irrational number is irrational.","The quotient of two irrational numbers is irrational."],
answer:"The product of a non-zero rational number and an irrational number is irrational."
},
{
question:"If √a = 5√2, then a equals:",
options:["25","50","100","125"],
answer:"50"
},
{
question:"The number of trailing zeros in 40! is:",
options:["8","9","10","11"],
answer:"9"
},
{
question:"Which of the following is divisible by 99?",
options:["10¹⁰ - 1","10¹¹ - 1","10¹² - 1","10¹³ - 1"],
answer:"10¹¹ - 1"
},
{
question:"If p and q are distinct prime numbers, the HCF of p²q and pq² is:",
options:["p²q²","pq","p²q","pq²"],
answer:"pq"
},
{
question:"Which of the following is the smallest irrational number?",
options:["√2","π","e","No such number exists"],
answer:"No such number exists"
},
{
question:"The decimal expansion of 13/48 is:",
options:["Terminating","Non-terminating recurring","Non-terminating non-recurring","Integer"],
answer:"Non-terminating recurring"
},
{
question:"If a number has exactly 15 positive factors, then it can be of the form:",
options:["p¹⁴ only","p⁴q² only","Both A and B","None of these"],
answer:"p¹⁴ only"
},
{
question:"Which of the following is an integer?",
options:["√12 × √3","√18 + √8","√50 - √18","√20 + √45"],
answer:"√12 × √3"
},
{
question:"The least perfect square divisible by 72 is:",
options:["144","288","324","576"],
answer:"288"
},
{
question:"If two numbers are coprime, then their LCM is:",
options:["Their HCF","Their product","Always prime","Always even"],
answer:"Their product"
},
{
question:"Which of the following is NOT a perfect cube?",
options:["1728","5832","2744","2197"],
answer:"2744"
},
{
question:"The number of prime factors (counting repetition) of 7560 is:",
options:["7","8","9","10"],
answer:"7"
},
{
question:"If x = √2 - 1, then the value of 1/x is:",
options:["√2 + 1","√2 - 1","2√2 + 1","2 - √2"],
answer:"√2 + 1"
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