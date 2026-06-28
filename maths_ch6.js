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
question:"A square and a rectangle have the same perimeter of 48 cm. The rectangle has length 14 cm. The difference between their areas is:",
options:["4 cm²","8 cm²","12 cm²","16 cm²"],
answer:"4 cm²"
},
{
question:"A rectangular field is 80 m long and 60 m wide. A path 2 m wide is constructed inside along all four sides. The area of the path is:",
options:["544 m²","560 m²","576 m²","592 m²"],
answer:"544 m²"
},
{
question:"The area of a square increases by 44 cm² when its side is increased by 2 cm. The original side of the square is:",
options:["9 cm","10 cm","11 cm","12 cm"],
answer:"10 cm"
},
{
question:"A rectangle has length 25 cm and breadth 16 cm. If its length is increased by 20% and breadth is decreased by 25%, the percentage change in area is:",
options:["0%","5% increase","5% decrease","10% increase"],
answer:"10% decrease"
},
{
question:"The perimeter of a rectangle is 64 cm and its diagonal is 20 cm. Its area is:",
options:["192 cm²","240 cm²","256 cm²","288 cm²"],
answer:"192 cm²"
},
{
question:"A square is cut into four congruent smaller squares. If the perimeter of the original square is 64 cm, the total perimeter of all four smaller squares is:",
options:["64 cm","96 cm","128 cm","160 cm"],
answer:"128 cm"
},
{
question:"A wire of length 88 cm is bent into the shape of a square. The same wire is then bent into a rectangle whose length is 26 cm. Its breadth is:",
options:["14 cm","16 cm","18 cm","20 cm"],
answer:"18 cm"
},
{
question:"A rectangular lawn is surrounded externally by a path of uniform width 3 m. The lawn measures 40 m × 30 m. The area of the path is:",
options:["456 m²","468 m²","480 m²","492 m²"],
answer:"456 m²"
},
{
question:"The side of a square is increased by 25%. By what percentage does its area increase?",
options:["25%","50%","56.25%","62.5%"],
answer:"56.25%"
},
{
question:"Two squares have sides in the ratio 3 : 5. The ratio of their areas is:",
options:["3 : 5","6 : 10","9 : 25","27 : 125"],
answer:"9 : 25"
},
{
question:"A square and a rectangle have the same area of 576 cm². If the rectangle is 32 cm long, then the difference between their perimeters is:",
options:["8 cm","12 cm","16 cm","20 cm"],
answer:"16 cm"
},
{
question:"A rectangular park is 120 m × 80 m. A path of uniform width 5 m is constructed outside the park. The area of the path is:",
options:["2100 m²","2200 m²","2300 m²","2400 m²"],
answer:"2100 m²"
},
{
question:"A square field has the same perimeter as a rectangle of dimensions 30 m × 18 m. The difference between their areas is:",
options:["36 m²","45 m²","49 m²","64 m²"],
answer:"36 m²"
},
{
question:"The length of a rectangle is increased by 25% and its breadth is decreased by 20%. The percentage change in its perimeter is:",
options:["No change","2.5% increase","2.5% decrease","5% increase"],
answer:"No change"
},
{
question:"The diagonal of a square is 12√2 cm. Its area is:",
options:["72 cm²","96 cm²","144 cm²","288 cm²"],
answer:"144 cm²"
},
{
question:"A rectangle has area 864 cm². If its length is three times its breadth, then its perimeter is:",
options:["96 cm","108 cm","120 cm","144 cm"],
answer:"120 cm"
},
{
question:"The area of a rectangle remains unchanged. If its length is increased by 50%, then its breadth must be decreased by:",
options:["25%","30%","33⅓%","40%"],
answer:"33⅓%"
},
{
question:"A square of side 20 cm has four identical squares of side 4 cm removed from its corners. The remaining area is:",
options:["336 cm²","320 cm²","304 cm²","288 cm²"],
answer:"336 cm²"
},
{
question:"A rectangular sheet measures 48 cm × 36 cm. The largest possible square tiles are cut from it without any wastage. How many tiles are obtained?",
options:["9","12","16","24"],
answer:"12"
},
{
question:"The perimeter of a rectangle is 100 cm. Its length is 10 cm more than its breadth. The area of the rectangle is:",
options:["575 cm²","600 cm²","625 cm²","640 cm²"],
answer:"600 cm²"
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