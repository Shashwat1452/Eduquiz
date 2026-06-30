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
question:"A sound wave has a frequency of 500 Hz and a wavelength of 0.68 m. The speed of sound is:",
options:["300 m/s","320 m/s","340 m/s","360 m/s"],
answer:"340 m/s"
},
{
question:"Which characteristic of sound determines its pitch?",
options:["Amplitude","Frequency","Speed","Wavelength"],
answer:"Frequency"
},
{
question:"The SI unit of frequency is:",
options:["Decibel","Hertz","Metre","Second"],
answer:"Hertz"
},
{
question:"A sound wave travels from air into water. Which of the following remains unchanged?",
options:["Speed","Wavelength","Frequency","Amplitude"],
answer:"Frequency"
},
{
question:"Which of the following sounds has the highest pitch?",
options:["100 Hz","250 Hz","500 Hz","1000 Hz"],
answer:"1000 Hz"
},
{
question:"The loudness of a sound mainly depends on its:",
options:["Frequency","Amplitude","Speed","Wavelength"],
answer:"Amplitude"
},
{
question:"Echoes are produced due to the:",
options:["Refraction of sound","Reflection of sound","Diffraction of sound","Interference of sound"],
answer:"Reflection of sound"
},
{
question:"If the frequency of a sound wave is doubled while its speed remains constant, its wavelength becomes:",
options:["Double","Half","Four times","Unchanged"],
answer:"Half"
},
{
question:"Ultrasonic waves have frequencies:",
options:["Less than 20 Hz","Between 20 Hz and 20,000 Hz","Greater than 20,000 Hz","Exactly 20,000 Hz"],
answer:"Greater than 20,000 Hz"
},
{
question:"Which of the following media generally allows sound to travel the fastest?",
options:["Air","Water","Steel","Vacuum"],
answer:"Steel"
},
{
question:"A sound wave has a wavelength of 2 m and travels with a speed of 340 m/s. Its frequency is:",
options:["150 Hz","160 Hz","170 Hz","180 Hz"],
answer:"170 Hz"
},
{
question:"A person hears an echo 2 seconds after shouting. If the speed of sound is 340 m/s, the reflecting surface is at a distance of:",
options:["170 m","340 m","510 m","680 m"],
answer:"340 m"
},
{
question:"Which of the following combinations is correctly matched?",
options:["Pitch - Amplitude","Loudness - Frequency","Pitch - Frequency","Quality - Speed"],
answer:"Pitch - Frequency"
},
{
question:"If the amplitude of a sound wave increases while its frequency remains constant, the sound becomes:",
options:["Shriller","Louder","Higher in pitch","Faster"],
answer:"Louder"
},
{
question:"Why is sound unable to travel through a vacuum?",
options:["There is no gravity","There are no particles to transmit vibrations","The frequency becomes zero","The wavelength becomes infinite"],
answer:"There are no particles to transmit vibrations"
},
{
question:"A bat can fly in complete darkness mainly because it uses:",
options:["Infrared radiation","Ultrasonic waves","Radio waves","Visible light"],
answer:"Ultrasonic waves"
},
{
question:"Which of the following frequencies is within the audible range of a healthy human ear?",
options:["15 Hz","50 Hz","25000 Hz","40000 Hz"],
answer:"50 Hz"
},
{
question:"A sound wave enters water from air. If its speed increases, then its wavelength:",
options:["Decreases","Increases","Becomes zero","Remains unchanged"],
answer:"Increases"
},
{
question:"SONAR works on the principle of:",
options:["Refraction of sound","Reflection of ultrasonic waves","Dispersion of light","Magnetic induction"],
answer:"Reflection of ultrasonic waves"
},
{
question:"Two sound waves have the same frequency but different amplitudes. They will differ in:",
options:["Pitch only","Loudness only","Speed only","Wavelength only"],
answer:"Loudness only"
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