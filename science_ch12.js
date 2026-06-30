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
question:"Which of the following is the primary basis of biological classification?",
options:["Colour","Habitat","Similarities and differences in characteristics","Body size"],
answer:"Similarities and differences in characteristics"
},
{
question:"Which kingdom includes unicellular organisms without a true nucleus?",
options:["Protista","Monera","Fungi","Plantae"],
answer:"Monera"
},
{
question:"Which of the following organisms belongs to Kingdom Protista?",
options:["Amoeba","Mushroom","Bacteria","Moss"],
answer:"Amoeba"
},
{
question:"Which kingdom is characterized by organisms having chitin in their cell walls?",
options:["Plantae","Protista","Fungi","Monera"],
answer:"Fungi"
},
{
question:"Which of the following is an autotrophic organism?",
options:["Yeast","Mushroom","Fern","Amoeba"],
answer:"Fern"
},
{
question:"Which group of plants has naked seeds?",
options:["Bryophytes","Pteridophytes","Gymnosperms","Angiosperms"],
answer:"Gymnosperms"
},
{
question:"Which of the following animals belongs to Phylum Annelida?",
options:["Earthworm","Roundworm","Cockroach","Starfish"],
answer:"Earthworm"
},
{
question:"The presence of a notochord at some stage of life is a characteristic feature of:",
options:["Arthropoda","Mollusca","Chordata","Annelida"],
answer:"Chordata"
},
{
question:"Which of the following is correctly matched?",
options:["Porifera - Jointed legs","Cnidaria - Stinging cells","Mollusca - Segmented body","Echinodermata - Feathers"],
answer:"Cnidaria - Stinging cells"
},
{
question:"Which of the following vertebrate classes is characterized by moist skin and life both in water and on land?",
options:["Pisces","Amphibia","Reptilia","Aves"],
answer:"Amphibia"
},
{
question:"Which of the following organisms is placed in Kingdom Fungi?",
options:["Spirogyra","Yeast","Euglena","Nostoc"],
answer:"Yeast"
},
{
question:"Which of the following groups contains vascular plants that reproduce by spores but do not produce seeds?",
options:["Bryophyta","Pteridophyta","Gymnosperms","Angiosperms"],
answer:"Pteridophyta"
},
{
question:"Which of the following is a characteristic feature of Bryophytes?",
options:["Presence of flowers","Presence of vascular tissues","Seeds enclosed in fruits","Lack of vascular tissues"],
answer:"Lack of vascular tissues"
},
{
question:"Which of the following phyla is characterized by jointed appendages and a chitinous exoskeleton?",
options:["Annelida","Mollusca","Arthropoda","Echinodermata"],
answer:"Arthropoda"
},
{
question:"Starfish belongs to which phylum?",
options:["Mollusca","Coelenterata","Echinodermata","Annelida"],
answer:"Echinodermata"
},
{
question:"Which of the following vertebrate classes is warm-blooded and has feathers?",
options:["Reptilia","Amphibia","Aves","Pisces"],
answer:"Aves"
},
{
question:"Which of the following is the correct sequence of plant groups from simpler to more advanced?",
options:["Bryophyta → Pteridophyta → Gymnosperms → Angiosperms","Pteridophyta → Bryophyta → Gymnosperms → Angiosperms","Bryophyta → Gymnosperms → Pteridophyta → Angiosperms","Gymnosperms → Bryophyta → Pteridophyta → Angiosperms"],
answer:"Bryophyta → Pteridophyta → Gymnosperms → Angiosperms"
},
{
question:"Which characteristic distinguishes mammals from all other vertebrate classes?",
options:["Backbone","Warm-blooded nature","Hair and mammary glands","Four-chambered heart"],
answer:"Hair and mammary glands"
},
{
question:"Which of the following pairs is correctly matched?",
options:["Pisces - Lungs","Reptilia - Moist skin","Amphibia - Live both in water and on land","Aves - Gills"],
answer:"Amphibia - Live both in water and on land"
},
{
question:"Which of the following statements is TRUE?",
options:["Viruses are included in the Five Kingdom Classification","All fungi prepare their own food by photosynthesis","Classification helps in understanding relationships among organisms","Bryophytes produce seeds enclosed in fruits"],
answer:"Classification helps in understanding relationships among organisms"
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