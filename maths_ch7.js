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
question:"A bag contains 5 red, 4 blue and 3 green balls. One ball is drawn at random. The probability that it is neither red nor blue is:",
options:["1/4","1/3","5/12","7/12"],
answer:"1/4"
},
{
question:"A die is thrown once. What is the probability of getting a number which is a factor of 12 but not a factor of 18?",
options:["1/6","1/3","1/2","2/3"],
answer:"1/6"
},
{
question:"A card is chosen from cards numbered 1 to 30. What is the probability that the number is divisible by both 2 and 5?",
options:["1/10","1/6","1/5","2/15"],
answer:"1/6"
},
{
question:"A coin is tossed and a die is rolled simultaneously. The probability of getting a Head and an even number is:",
options:["1/6","1/4","1/3","1/2"],
answer:"1/4"
},
{
question:"A letter is chosen at random from the word 'MATHEMATICS'. The probability that it is a vowel is:",
options:["4/11","5/11","6/11","7/11"],
answer:"4/11"
},
{
question:"A bag contains 7 white balls, 5 black balls and 8 yellow balls. The probability of drawing a ball which is neither white nor black is:",
options:["2/5","1/5","3/5","7/20"],
answer:"2/5"
},
{
question:"A die is rolled once. The probability of getting a prime number greater than 2 is:",
options:["1/6","1/3","1/2","2/3"],
answer:"1/3"
},
{
question:"A number is selected at random from the first 40 natural numbers. The probability that it is a perfect square is:",
options:["1/10","1/8","3/20","1/5"],
answer:"1/8"
},
{
question:"A card numbered from 1 to 50 is drawn. The probability that the number is a multiple of 4 or 6 is:",
options:["9/25","8/25","7/25","11/25"],
answer:"8/25"
},
{
question:"A letter is chosen at random from the word 'PROBABILITY'. The probability that the chosen letter is 'B' is:",
options:["1/11","2/11","3/11","1/10"],
answer:"2/11"
},
{
question:"A card numbered from 1 to 60 is selected at random. The probability that the number is divisible by 4 but not by 6 is:",
options:["1/5","3/20","1/4","7/30"],
answer:"1/5"
},
{
question:"A bag contains 4 red, 5 blue, 6 green and 5 yellow balls. One ball is drawn at random. The probability that it is neither red nor green is:",
options:["1/2","9/20","11/20","3/5"],
answer:"1/2"
},
{
question:"A letter is chosen at random from the word 'MISSISSIPPI'. The probability that the chosen letter is 'S' is:",
options:["2/11","3/11","4/11","5/11"],
answer:"4/11"
},
{
question:"A die is rolled once. The probability of getting a number which is neither prime nor composite is:",
options:["0","1/6","1/3","1"],
answer:"0"
},
{
question:"A number is selected at random from 1 to 100. The probability that it is a multiple of both 3 and 5 is:",
options:["1/15","7/50","3/20","1/10"],
answer:"7/50"
},
{
question:"A card numbered from 1 to 36 is drawn at random. The probability that the number is a perfect square or a multiple of 9 is:",
options:["2/9","1/4","5/18","11/36"],
answer:"2/9"
},
{
question:"A letter is chosen at random from the word 'STATISTICS'. The probability that the chosen letter is a consonant is:",
options:["3/5","7/10","2/5","4/5"],
answer:"3/5"
},
{
question:"A number is selected at random from the first 50 natural numbers. The probability that it is a prime number greater than 20 is:",
options:["2/25","1/10","3/25","4/25"],
answer:"4/25"
},
{
question:"A box contains 6 red, 8 blue and 10 green balls. One ball is drawn at random. The probability that it is red or green is:",
options:["1/2","2/3","5/8","3/4"],
answer:"2/3"
},
{
question:"A card numbered from 1 to 24 is selected at random. The probability that the number is a factor of 24 is:",
options:["1/4","1/3","3/8","5/12"],
answer:"1/3"
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