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
    question: "In which quadrant does the point (-5, 7) lie?",
    options: ["I", "II", "III", "IV"],
    answer: "II"
  },
  {
    question: "What are the coordinates of the origin?",
    options: ["(1,0)","(0,1)","(0,0)","(-1,-1)"],
    answer: "(0,0)"
  },
  {
    question: "If a point lies on the x-axis, its y-coordinate is always:",
    options: ["1", "0", "-1", "Undefined"],
    answer: "0"
  },
  {
    question: "Which point lies on the y-axis?",
    options: ["(3,0)", "(0,-4)", "(5,2)", "(2,2)"],
    answer: "(0,-4)"
  },
  {
    question: "Distance between (0,0) and (6,8) is:",
    options: ["12","10","14","8"],
    answer: "10"
  },
  {
    question: "The midpoint of (2,4) and (6,8) is:",
    options: ["(4,6)","(3,5)","(8,12)","(2,2)"],
    answer: "(4,6)"
  },
  {
    question: "Reflection of (3,-5) in x-axis is:",
    options: ["(-3,5)","(3,5)","(-3,-5)","(5,3)"],
    answer: "(3,5)"
  },
  {
    question: "Reflection of (-4,7) in y-axis is:",
    options: ["(4,7)","(-4,-7)","(7,-4)","(4,-7)"],
    answer: "(4,7)"
  },
  {
    question: "If a point is equidistant from both axes, it lies on:",
    options: ["x-axis","y-axis","y=x or y=-x","Origin only"],
    answer: "y=x or y=-x"
  },
  {
    question: "Which quadrant has both coordinates negative?",
    options: ["I","II","III","IV"],
    answer: "III"
  },
  {
    question: "If x-coordinate increases while y remains constant, movement is:",
    options: ["Vertical","Horizontal","Diagonal","Circular"],
    answer: "Horizontal"
  },
  {
    question: "A point (a, b) lies on x-axis when:",
    options: ["a=0","b=0","a=b","a=-b"],
    answer: "b=0"
  },
  {
    question: "The distance between (-3,4) and (3,-4) is:",
    options: ["6","8","10","12"],
    answer: "10"
  },
  {
    question: "If a point lies in quadrant II, then:",
    options: ["x>0,y>0","x<0,y>0","x<0,y<0","x>0,y<0"],
    answer: "x<0,y>0"
  },
  {
    question: "Which point is farthest from origin?",
    options: ["(1,1)","(2,2)","(3,3)","(4,4)"],
    answer: "(4,4)"
  },
  {
    question: "If midpoint is (0,0) and one endpoint is (5,6), other endpoint is:",
    options: ["(-5,-6)","(5,-6)","(-6,-5)","(6,5)"],
    answer: "(-5,-6)"
  },
  {
    question: "Area of triangle with vertices (0,0), (4,0), (0,3) is:",
    options: ["6","7","12","5"],
    answer: "6"
  },
  {
    question: "If x-coordinate is negative and y-coordinate is zero, point lies on:",
    options: ["x-axis","y-axis","Origin","Quadrant II"],
    answer: "x-axis"
  },
  {
    question: "Slope of line joining (2,2) and (4,6) is:",
    options: ["1","2","3","4"],
    answer: "2"
  },
  {
    question: "Which transformation keeps distance from origin unchanged?",
    options: ["Scaling","Translation","Ratation about origin","Reflection in random line"],
    answer: "Rotation about origin"
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