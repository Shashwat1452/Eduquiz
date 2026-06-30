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
question:"A force of 20 N acts on a body of mass 5 kg. The acceleration produced is:",
options:["2 m/s²","4 m/s²","5 m/s²","10 m/s²"],
answer:"4 m/s²"
},
{
question:"According to Newton's First Law, a body continues in its state of rest or uniform motion unless acted upon by:",
options:["Balanced force","External unbalanced force","Friction only","Gravitational force only"],
answer:"External unbalanced force"
},
{
question:"Which of the following has the greatest momentum?",
options:["2 kg moving at 6 m/s","3 kg moving at 4 m/s","4 kg moving at 3 m/s","All have the same momentum"],
answer:"All have the same momentum"
},
{
question:"The SI unit of momentum is:",
options:["kg m/s","N","kg m/s²","J"],
answer:"kg m/s"
},
{
question:"A balanced force acting on a body:",
options:["Changes its speed","Changes its direction","Produces no acceleration","Always stops the body"],
answer:"Produces no acceleration"
},
{
question:"A body of mass 8 kg is moving with a velocity of 5 m/s. Its momentum is:",
options:["13 kg m/s","40 kg m/s","45 kg m/s","80 kg m/s"],
answer:"40 kg m/s"
},
{
question:"Which of the following is an example of Newton's Third Law?",
options:["A passenger falls forward when a bus stops suddenly","A rocket moves upward by ejecting gases downward","A stone falls freely under gravity","A cyclist applies brakes to stop"],
answer:"A rocket moves upward by ejecting gases downward"
},
{
question:"If the net force acting on an object is zero, the object:",
options:["Must be at rest","Must move with increasing speed","May remain at rest or move with constant velocity","Must move in a circular path"],
answer:"May remain at rest or move with constant velocity"
},
{
question:"The force required to produce the same acceleration is directly proportional to:",
options:["Velocity","Mass","Momentum","Distance"],
answer:"Mass"
},
{
question:"Which quantity remains conserved in an isolated system during a collision?",
options:["Force","Acceleration","Momentum","Velocity"],
answer:"Momentum"
},
{
question:"A force of 48 N acts on a body of mass 6 kg initially at rest. The acceleration produced is:",
options:["6 m/s²","8 m/s²","10 m/s²","12 m/s²"],
answer:"8 m/s²"
},
{
question:"A body has a mass of 4 kg and is moving with a velocity of 12 m/s. What force is required to stop it in 3 s?",
options:["12 N","16 N","20 N","24 N"],
answer:"16 N"
},
{
question:"Which of the following has the greatest inertia?",
options:["A football","A cricket ball","A bicycle","A loaded truck"],
answer:"A loaded truck"
},
{
question:"A force of 15 N acts on a body, but the body remains at rest. The most appropriate reason is:",
options:["No other force acts on it","The net force acting on the body is zero","The force is too small to be measured","The body has no mass"],
answer:"The net force acting on the body is zero"
},
{
question:"A body moving at constant velocity in a straight line suddenly experiences an unbalanced force. Which quantity must change?",
options:["Only its mass","Its state of motion","Its inertia","Its density"],
answer:"Its state of motion"
},
{
question:"A gun recoils backward when a bullet is fired. This is explained by:",
options:["Newton's First Law","Newton's Second Law","Newton's Third Law","Law of Gravitation"],
answer:"Newton's Third Law"
},
{
question:"A body of mass 2 kg accelerates from 3 m/s to 11 m/s in 4 s. The net force acting on it is:",
options:["2 N","4 N","6 N","8 N"],
answer:"4 N"
},
{
question:"Which statement is always true about action and reaction forces?",
options:["They act on the same body","They are equal in magnitude and opposite in direction","They cancel each other completely","They always produce zero motion"],
answer:"They are equal in magnitude and opposite in direction"
},
{
question:"The momentum of an object becomes four times if:",
options:["Its mass alone is doubled","Its velocity alone is doubled","Both its mass and velocity are doubled","Its acceleration is doubled"],
answer:"Both its mass and velocity are doubled"
},
{
question:"A 5 kg object moving at 6 m/s collides with a wall and comes to rest in 0.5 s. The average retarding force acting on it is:",
options:["30 N","45 N","60 N","75 N"],
answer:"60 N"
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