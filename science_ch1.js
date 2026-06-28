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
question:"Which of the following is NOT a characteristic of scientific inquiry?",
options:["Curiosity","Blind belief","Observation","Experimentation"],
answer:"Blind belief"
},
{
question:"A hypothesis is best described as:",
options:["A proven scientific law","A tentative explanation that can be tested","A random guess without evidence","A scientific instrument"],
answer:"A tentative explanation that can be tested"
},
{
question:"Which step of the scientific method generally comes immediately after making observations?",
options:["Drawing conclusions","Formulating a hypothesis","Publishing results","Performing calculations"],
answer:"Formulating a hypothesis"
},
{
question:"A student repeats the same experiment five times under identical conditions. The main purpose is to:",
options:["Increase the size of the apparatus","Improve the reliability of results","Change the hypothesis","Reduce the number of observations"],
answer:"Improve the reliability of results"
},
{
question:"Which of the following is an example of a quantitative observation?",
options:["The flower is beautiful","The liquid is blue","The rod is 15 cm long","The surface is smooth"],
answer:"The rod is 15 cm long"
},
{
question:"In an experiment, the factor deliberately changed by the investigator is called:",
options:["Dependent variable","Controlled variable","Independent variable","Constant"],
answer:"Independent variable"
},
{
question:"Which of the following is the best example of a scientific question?",
options:["Why is blue the best colour?","Does the amount of sunlight affect plant growth?","Which fruit tastes the best?","Is winter more beautiful than summer?"],
answer:"Does the amount of sunlight affect plant growth?"
},
{
question:"A conclusion in a scientific investigation should always be based on:",
options:["Personal opinion","Experimental evidence","Popular belief","Previous assumptions"],
answer:"Experimental evidence"
},
{
question:"Which of the following instruments is most suitable for measuring the diameter of a small wire accurately?",
options:["Metre scale","Vernier calipers","Spring balance","Thermometer"],
answer:"Vernier calipers"
},
{
question:"If experimental observations repeatedly contradict a hypothesis, the scientist should:",
options:["Ignore the observations","Modify or reject the hypothesis","Change the observations","Declare the hypothesis correct"],
answer:"Modify or reject the hypothesis"
},
{
question:"A student wants to test whether the type of soil affects plant growth. Which of the following should be kept constant?",
options:["Type of soil","Amount of water","Plant species","Both Amount of water and Plant species"],
answer:"Both Amount of water and Plant species"
},
{
question:"Which of the following observations is qualitative?",
options:["The liquid has a mass of 250 g","The wire is 15 cm long","The solution is colourless","The temperature is 35°C"],
answer:"The solution is colourless"
},
{
question:"A scientist changes only one variable at a time during an experiment mainly to:",
options:["Save time","Obtain colourful results","Identify the effect of that variable","Reduce the cost of the experiment"],
answer:"Identify the effect of that variable"
},
{
question:"Which of the following is most likely to introduce error in an experiment?",
options:["Repeating the experiment","Using a calibrated instrument","Recording observations carefully","Reading the scale from an angle"],
answer:"Reading the scale from an angle"
},
{
question:"A conclusion drawn from an experiment should be accepted only when it is:",
options:["Based on evidence collected","Supported by a friend","Written in a textbook","Accepted by everyone"],
answer:"Based on evidence collected"
},
{
question:"Which of the following best represents the correct sequence of scientific investigation?",
options:["Observation → Hypothesis → Experiment → Conclusion","Hypothesis → Observation → Conclusion → Experiment","Experiment → Observation → Hypothesis → Conclusion","Conclusion → Observation → Experiment → Hypothesis"],
answer:"Observation → Hypothesis → Experiment → Conclusion"
},
{
question:"A measurement recorded as 12.50 cm indicates that the measuring instrument:",
options:["Cannot measure decimals","Is fairly precise","Has a large error","Measures only approximate values"],
answer:"Is fairly precise"
},
{
question:"Which of the following is the best reason for recording observations immediately during an experiment?",
options:["To reduce memory errors","To make the experiment longer","To impress others","To avoid using instruments"],
answer:"To reduce memory errors"
},
{
question:"Two students perform the same experiment and obtain slightly different results. The most appropriate conclusion is:",
options:["One student must be wrong","Small experimental errors may occur","Scientific experiments are unreliable","The hypothesis is always false"],
answer:"Small experimental errors may occur"
},
{
question:"Which of the following best demonstrates a scientific attitude?",
options:["Accepting every claim without evidence","Changing conclusions when supported by new evidence","Ignoring unexpected observations","Believing that experiments always give perfect results"],
answer:"Changing conclusions when supported by new evidence"
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