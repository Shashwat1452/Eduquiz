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
question:"A force of 25 N moves a box through a distance of 8 m in the direction of the force. The work done is:",
options:["100 J","150 J","200 J","250 J"],
answer:"200 J"
},
{
question:"A person carries a bag on his head while walking horizontally on a level road. The work done by the person on the bag is:",
options:["Positive","Negative","Zero","Cannot be determined"],
answer:"Zero"
},
{
question:"The kinetic energy of a body of mass 4 kg moving at 5 m/s is:",
options:["25 J","40 J","50 J","100 J"],
answer:"50 J"
},
{
question:"A body of mass 2 kg is raised vertically through a height of 10 m. (Take g = 10 m/s².) The gain in potential energy is:",
options:["100 J","150 J","200 J","250 J"],
answer:"200 J"
},
{
question:"Which of the following is a simple machine?",
options:["Bicycle","Pulley","Motor car","Electric fan"],
answer:"Pulley"
},
{
question:"The SI unit of power is:",
options:["Joule","Newton","Watt","Pascal"],
answer:"Watt"
},
{
question:"A machine has a mechanical advantage of 5. If the effort applied is 80 N, the load lifted is:",
options:["16 N","85 N","400 N","800 N"],
answer:"400 N"
},
{
question:"Which of the following has only potential energy?",
options:["A moving car","A stretched rubber band at rest","A rolling ball","A flying bird"],
answer:"A stretched rubber band at rest"
},
{
question:"If the velocity of a body is doubled, its kinetic energy becomes:",
options:["Twice","Three times","Four times","Eight times"],
answer:"Four times"
},
{
question:"A machine is 80% efficient. If 500 J of work is supplied to it, the useful output work is:",
options:["300 J","350 J","400 J","450 J"],
answer:"400 J"
},
{
question:"A machine lifts a load of 600 N by applying an effort of 150 N. The mechanical advantage of the machine is:",
options:["2","3","4","5"],
answer:"4"
},
{
question:"A person does 2400 J of work in 40 s. His power is:",
options:["40 W","50 W","60 W","80 W"],
answer:"60 W"
},
{
question:"Which of the following situations involves maximum work done?",
options:["A force acts perpendicular to the displacement","No displacement occurs","Force and displacement are in the same direction","The object moves in a closed path and returns to the starting point"],
answer:"Force and displacement are in the same direction"
},
{
question:"A body has a kinetic energy of 800 J. If its speed becomes half, its new kinetic energy will be:",
options:["100 J","200 J","400 J","600 J"],
answer:"200 J"
},
{
question:"A machine has an efficiency of 75%. If the input work is 1200 J, the energy lost due to friction is:",
options:["200 J","250 J","300 J","400 J"],
answer:"300 J"
},
{
question:"Which simple machine changes only the direction of the applied force without increasing its magnitude?",
options:["Single fixed pulley","Single movable pulley","Wheel and axle","Inclined plane"],
answer:"Single fixed pulley"
},
{
question:"A body of mass 5 kg is lifted vertically by 4 m. (Take g = 10 m/s².) The work done against gravity is:",
options:["100 J","150 J","200 J","250 J"],
answer:"200 J"
},
{
question:"A machine has a mechanical advantage of 6 and an efficiency of 75%. Its velocity ratio is:",
options:["6","7","8","9"],
answer:"8"
},
{
question:"A crane does 180000 J of work in 3 minutes. Its power is:",
options:["600 W","800 W","1000 W","1200 W"],
answer:"1000 W"
},
{
question:"Which of the following statements is always correct?",
options:["Every machine multiplies force","No machine can have efficiency greater than 100%","Mechanical advantage is always equal to velocity ratio","A machine always reduces the effort to zero"],
answer:"No machine can have efficiency greater than 100%"
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