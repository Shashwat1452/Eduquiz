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
question:"If a + b = 12 and ab = 20, then the value of a² + b² is:",
options:["64","104","144","184"],
answer:"104"
},
{
question:"If x + y = 15 and xy = 56, then the value of x² - xy + y² is:",
options:["113","129","145","169"],
answer:"113"
},
{
question:"The value of (99)² is:",
options:["9801","9901","9701","9999"],
answer:"9801"
},
{
question:"If a - b = 9 and ab = 18, then the value of a² + b² is:",
options:["99","117","121","135"],
answer:"117"
},
{
question:"If x + 1/x = 3, then the value of x² + 1/x² is:",
options:["5","7","9","11"],
answer:"7"
},
{
question:"The value of 103² - 97² is:",
options:["1000","1200","1300","1400"],
answer:"1200"
},
{
question:"If a² + b² = 58 and ab = 21, then the value of (a + b)² is:",
options:["84","96","100","112"],
answer:"100"
},
{
question:"The value of (2x + 3y)² is:",
options:["4x² + 9y² + 12xy","4x² + 6xy + 9y²","2x² + 12xy + 3y²","4x² + 12xy + 3y²"],
answer:"4x² + 12xy + 9y²"
},
{
question:"If a + b = 18 and a² + b² = 170, then the value of ab is:",
options:["72","77","81","85"],
answer:"77"
},
{
question:"The value of (x + y)² + (x - y)² is:",
options:["2x² + 2y²","2x² - 2y²","x² + y²","4xy"],
answer:"2x² + 2y²"
},
{
question:"If a + b = 10 and a² + b² = 58, then the value of (a - b)² is:",
options:["12","14","16","18"],
answer:"16"
},
{
question:"If x - 1/x = 4, then the value of x² + 1/x² is:",
options:["16","18","20","22"],
answer:"18"
},
{
question:"The value of 1002² - 998² is:",
options:["4000","8000","6000","2000"],
answer:"8000"
},
{
question:"If p + q = 16 and pq = 63, then the value of p² + q² is:",
options:["98","112","130","140"],
answer:"130"
},
{
question:"Which expression is equal to (a + b + c)²?",
options:["a² + b² + c² + 2ab + 2bc + 2ca","a² + b² + c² + ab + bc + ca","a² + b² + c² + 2ab + bc + ca","a² + b² + c² + 2ab + 2bc + ca"],
answer:"a² + b² + c² + 2ab + 2bc + 2ca"
},
{
question:"If a² + b² = 34 and a - b = 2, then the value of ab is:",
options:["12","15","18","20"],
answer:"15"
},
{
question:"The value of (2a - 5b)² is:",
options:["4a² - 20ab + 25b²","4a² - 10ab + 25b²","2a² - 20ab + 25b²","4a² + 20ab + 25b²"],
answer:"4a² - 20ab + 25b²"
},
{
question:"If x + y = 20 and xy = 91, then the value of x² + y² is:",
options:["218","220","224","236"],
answer:"218"
},
{
question:"The value of 1001² is:",
options:["1000001","1002001","1004001","1006001"],
answer:"1002001"
},
{
question:"If a + b = 8 and a² + b² = 40, then the value of (a - b)² is:",
options:["8","12","16","20"],
answer:"16"
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