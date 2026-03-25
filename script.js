// global variables
let results = {
    total: 0,
    pharm: 0,
    thera: 0,
    safety: 0
}
let questionIteration = 1;

// question objects
const q1 = {question: "A patient with schizophrenia is experiencing auditory hallucinations. What is the nurse’s best initial response?", image: "./assets/question-pics/soundwave.webp", options: ["Why do you think you hear voices?","The voices aren’t real.","I don’t hear them, but I understand you do.","Ignore the voices."], rightAnswer: 3, category: "therapeutic"};
const q2 = {question: "A patient is prescribed Haloperidol. Which side effect should the nurse monitor for?", image: "./assets/question-pics/medication.webp", options: ["Extrapyramidal symptoms","High blood pressure","High blood sugar","Rapid heart rate"], rightAnswer: 1, category: "pharmacology"};
const q3 = {question: "A client with major depressive disorder says, “I have nothing to live for.” What is the priority nursing action?", image: "./assets/question-pics/sad-day.gif", options: ["Encourage journaling","Assess suicidal thoughts","Give antidepressant","Provide reassurance"], rightAnswer: 2, category: "safety"};
const q4 = {question: "A manic patient is hyperactive and not eating. What intervention is most appropriate?", image: "./assets/question-pics/running.gif", options: ["Large scheduled meals","High-calorie finger foods","Restrict fluid intake","Encourage group meals"], rightAnswer: 2, category: "safety"};
const q5 = {question: "A patient taking Lithium should be taught to:", image: "./assets/question-pics/medicine2.avif", options: ["Lower salt intake","Consistent salt and fluids","Avoid dairy foods","Take as needed"], rightAnswer: 2, category: "pharmacology"};
const q6 = {question: "Which defense mechanism involves refusing to accept reality?", image: "./assets/question-pics/wall.avif", options: ["Projection","Regression","Displacement","Denial"], rightAnswer: 4, category: "therapeutic"};
const q7 = {question: "A client with anxiety is hyperventilating. What is the nurse’s best action?", image: "./assets/question-pics/emergency.jpg", options: ["Tell them calm down","Slow deep breathing","Leave patient alone","Give sedative now"], rightAnswer: 2, category: "therapeutic"};
const q8 = {question: "A patient with borderline personality disorder is splitting staff. What is the best nursing approach?", image: "./assets/question-pics/split.webp", options: ["Different staff rules","Consistent boundaries","Ignore behavior","Confront aggressively"], rightAnswer: 2, category: "therapeutic"};
const q9 = {question: "A patient on SSRIs reports improved mood but now has increased energy. Why is this a concern?", image: "./assets/question-pics/medicine3.jpg", options: ["Increased suicide risk","High blood pressure","Serotonin syndrome","Drug tolerance"], rightAnswer: 1, category: "safety"};
const q10 = {question: "A client experiencing a panic attack should be:", image: "./assets/question-pics/anxious.png", options: ["Leave patient alone","Use restraints","Stay and reassure calmly","Encourage exercise"], rightAnswer: 3, category: "safety"};

const questions = [q1,q2,q3,q4,q5,q6,q7,q8,q9,q10];

// query selectors
// start-screen
let startButton = document.getElementById("start-button");
// question-card
let questionDisplay = document.getElementById("question");
let questionImage = document.getElementById("question-image");
let options = document.querySelectorAll('.option');
let submitButton = document.getElementById("submit-answer");
// summary-card
let percent = document.getElementById("score-percent");
let retryButton = document.getElementById("retry");

// start button listener
startButton.addEventListener("click", function() {
    // hide start screen & show question screen
    document.getElementById("start-screen").style.display = "none";
    document.getElementById("question-card").style.display = "block";
});

loadQuestion();
let bean = submitQuestion();

// fills in question card with question data
function loadQuestion() {
    // grab one at random
    let randomIndex = Math.floor(Math.random() * questions.length);
    let q = questions[randomIndex];
    // remove question from list
    questions.splice(randomIndex,1);

    // fill in each field
    questionDisplay.textContent = `Q${questionIteration}. ${q.question}`;
    questionImage.src = q.image;
    for (const option of options) {
        // query select span
        let span = option.querySelector(".option-text");
        span.textContent = q.options[option.dataset.option - 1];
    }
};
// submits users answer
function submitQuestion() {
    options.forEach(option => {
        option.addEventListener("click", () => {
            // only allow to select one option at a time
            options.forEach(option => option.classList.remove("selected"));
            option.classList.add("selected");
        });
        selectedAnswer = document.querySelector(".selected");
    });
    submitButton.addEventListener("click", function() {
        let selectedAnswer = document.querySelector(".selected");
        if (selectedAnswer) {
            document.getElementById("question-card").style.display = "none";
        }
    });
}
    

