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
question:"A body covers 120 m in the first 10 s and 180 m in the next 10 s. Its average speed for the entire journey is:",
options:["12 m/s","15 m/s","18 m/s","30 m/s"],
answer:"15 m/s"
},
{
question:"A person walks 5 km east and then 12 km north. The magnitude of displacement is:",
options:["13 km","15 km","17 km","7 km"],
answer:"13 km"
},
{
question:"Which of the following situations represents zero displacement but non-zero distance?",
options:["A person walks 100 m north","A person completes one full lap of a circular track","A car moves in a straight line for 5 km","A stone falls vertically downward"],
answer:"A person completes one full lap of a circular track"
},
{
question:"A particle moves with uniform speed in a circular path. Which quantity changes continuously?",
options:["Speed only","Distance only","Velocity only","Neither speed nor velocity"],
answer:"Velocity only"
},
{
question:"A car travels at 36 km/h. Its speed in m/s is:",
options:["8 m/s","10 m/s","12 m/s","15 m/s"],
answer:"10 m/s"
},
{
question:"The SI unit of displacement is:",
options:["km/h","m/s","metre","second"],
answer:"metre"
},
{
question:"A train covers 600 m in 30 s with uniform speed. Its speed is:",
options:["15 m/s","18 m/s","20 m/s","25 m/s"],
answer:"20 m/s"
},
{
question:"Which of the following quantities can never be negative?",
options:["Velocity","Displacement","Distance","Acceleration"],
answer:"Distance"
},
{
question:"If the distance travelled by an object is equal to its displacement, then the object must have moved:",
options:["Along a straight line without changing direction","With constant speed","With constant acceleration","Along a circular path"],
answer:"Along a straight line without changing direction"
},
{
question:"A body travels 40 m east and then 30 m west. The magnitude of its displacement is:",
options:["10 m","30 m","40 m","70 m"],
answer:"10 m"
},
{
question:"A person walks 3 km east, then 4 km north, and finally 3 km west. The magnitude of the displacement is:",
options:["3 km","4 km","5 km","10 km"],
answer:"4 km"
},
{
question:"An object moves with a constant speed of 15 m/s for 8 s. The distance covered is:",
options:["100 m","110 m","120 m","130 m"],
answer:"120 m"
},
{
question:"A cyclist covers the first half of a journey at 12 km/h and the second half at 18 km/h. The average speed for the whole journey is:",
options:["14.4 km/h","15 km/h","15.5 km/h","16 km/h"],
answer:"14.4 km/h"
},
{
question:"Two objects move with speeds of 20 m/s and 30 m/s for the same time interval. The ratio of the distances covered by them is:",
options:["2 : 3","3 : 2","4 : 5","5 : 4"],
answer:"2 : 3"
},
{
question:"An object moves 40 m north, then 30 m east. The ratio of distance travelled to displacement is:",
options:["1","7/5","7/√25","7/5√2"],
answer:"7/5"
},
{
question:"Which of the following statements is always true?",
options:["Distance is always equal to displacement","Speed is always equal to velocity","Magnitude of displacement can never exceed distance","Displacement is always positive"],
answer:"Magnitude of displacement can never exceed distance"
},
{
question:"A runner completes two full rounds of a circular track of circumference 200 m. The distance travelled and displacement respectively are:",
options:["400 m, 0 m","200 m, 200 m","400 m, 200 m","200 m, 0 m"],
answer:"400 m, 0 m"
},
{
question:"A body moves with uniform speed in a straight line. Which graph is obtained between distance and time?",
options:["A straight line passing through the origin","A horizontal straight line","A parabola","A decreasing straight line"],
answer:"A straight line passing through the origin"
},
{
question:"A bus travels 90 km in 2 hours and then 60 km in the next 1 hour. Its average speed for the entire journey is:",
options:["45 km/h","50 km/h","55 km/h","60 km/h"],
answer:"50 km/h"
},
{
question:"An object moves from point A to B and then returns to A along the same path. Which statement is correct?",
options:["Distance and displacement are both zero","Distance is non-zero but displacement is zero","Distance is zero but displacement is non-zero","Both distance and displacement are equal"],
answer:"Distance is non-zero but displacement is zero"
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