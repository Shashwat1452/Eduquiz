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
    question:"If p(x)=3x-7, then p(2)-p(-1) is:",
    options:["6","9","12","15"],
    answer:"9"
  },
  {
    question:"Which of the following is not a linear polynomial?",
    options:["5x-3","7y+9","4x²-1","x+1"],
    answer:"4x²-1"
  },
  {
    question:"The degree of the polynomial 9-x is:",
    options:["0","1","2","Undefined"],
    answer:"1"
  },
  {
    question:"If p(x)=2x+5, then the zero of the polynomial is:",
    options:["5/2","-5/2","-5","2"],
    answer:"-5/2"
  },
  {
    question:"A linear polynomial can have at most:",
    options:["0 zero","1 zero","2 zero","Infinite zeros"],
    answer:"1 zero"
  },
  {
    question:"Which polynomial has no variable?",
    options:["5","x+5","2x","x²"],
    answer:"5"
  },
  {
    question:"If p(x)=7-4x, then p(3) is:",
    options:["-5","5","19","-19"],
    answer:"-5"
  },
  {
    question:"Which expression is a polynomial?",
    options:["1/x","√x","4x-9","x⁻²"],
    answer:"4x-9"
  },
  {
    question:"The coefficient of x in 11 − 8x is:",
    options:["11","8","-8","-11"],
    answer:"-8"
  },
  {
    question:"If p(x) = ax + b and p(0) = 9, then:",
    options:["a=9","b=9","a+b=9","Cannot be determined"],
    answer:"b=9"
  },
  {
    question:"The graph of a linear polynomial intersects the x-axis:",
    options:["At one point","At two points","Never","At infinitely many points"],
    answer:"At one point"
  },
  {
    question:"If the zero of 5x + k is −2, then k =",
    options:["10","-10","5","-5",],
    answer:"10"
  },
  {
    question:"Which is the standard form of a linear polynomial?",
    options:["ax+b(a≠0)","ax²+b","a+x³","a/x+b"],
    answer:"ax+b(a≠0)"
  },
  {
    question:"If p(x) = 4x + 1, then p(−3) is:",
    options:["-13","13","-11","11"],
    answer:"-11"
  },
  {
    question:"If p(x) = mx + 6 has zero equal to 3, then m =",
    options:["2","-2","3","-3"],
    answer:"-2"
  },
  {
    question:"Which statement is true?",
    options:["Every linear polynomial has exactly one zero.","Every linear polynomial has at most one zero.","Every polynomial has one zero.","Constant polynomials always have one zero."],
    answer:"Every linear polynomial has at most one zero."
  },
  {
    question:"The zero of p(x) = 5x − 15 is:",
    options:["-3","3","15","5"],
    answer:"3"
  },
  {
    question:"The constant term of 8x − 17 is:",
    options:["8","-17","17","0"],
    answer:"-17"
  },
  {
    question:"Which polynomial has zero equal to 4?",
    options:["x-4","x+4","4x+1","2x-1"],
    answer:"x-4"
  },
  {
    question:"If p(x) = 3x − 2, then 2p(1) + p(0) equals:",
    options:["0","-1","2","4"],
    answer:"0"
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