const start = document.getElementById("start-button");
start.addEventListener("click", beginQuiz);
const body = document.getElementById("main");
const initial = document.getElementById("start");
const correct = document.getElementById("correct_answer");
const correct_title = document.getElementById("correct_title");
const explanation = document.getElementById("explanation");
const next = document.getElementById("next");
const end_card = document.getElementById("end-card");
const final_score = document.getElementById("final_score");
const link = document.getElementById("tip-link");

let question = document.getElementById("question");
let question_nr = document.getElementById("question_number");
let answer1 = document.getElementById("answer1");
let answer2 = document.getElementById("answer2");
let answer3 = document.getElementById("answer3");

let questions = [];
let current_question = 0;
let score = 0;

function beginQuiz() {
    initial.style.display = "none";
    body.style.display = "flex";

    questions = [
        {
            "question": "How important do you think it is to keep your passwords safe?",
            "answers": [
                "Very important",
                "Not so important",
                "I'm not sure..."
            ],
            "correct": "1",
            "explanation": "A strong password is the first step of defending " +
                "against unwanted access to your computer and personal information." +
                " The password it's supposed to  be as strong as possible to protect" +
                " your information  from hackers and malicious software." +
                " That's why you should have a strong password.<br> Visit this link: ",
            "link": "https://it.uottawa.ca/security/identity-authentication-theft"
        },
        {
            "question": "Which one from the following answers do you think it's the best way to keep your information safe?",
            "answers": [
                "Pet name password",
                "Random numbers password /passphrases",
                "Family members (birth day/name/age..etc)"
            ],
            "correct": "2",
            "explanation": "If you think it's hard to remember random numbers you can your phrases, they are easy to remember" +
                " and harder to be a break. <br>Visit this link:",
            "link": " https://www.zdnet.com/article/fbi-recommends-passphrases-over-password-complexity/"
        },
        {
            "question": "What does compromised password mean?",
            "answers": [
                "Nothing important bcs I can do another account",
                "I don't know",
                "Someone can steal my information"
            ],
            "correct": "3",
            "explanation": "A compromised password it's a loophole in your" +
                " information so you should worry about that, bcs" +
                " most of the stolen passwords are sold on dark web" +
                " data breach so that password should be never" +
                " used again. It's also possible for attackers to use the" +
                " same password on other users.<br> Visit this link: ",
            "link": "https://www.forbes.com/sites/brookecrothers/2020/12/12/how-worried-should-i-be-about-my-password-being-compromised-stolen-in-a-data-breach-experts-say-this/?sh=489bd2427468"
        },
        {
            "question": "Do you have a common password for all your accounts or different?",
            "answers": [
                "Yes, I do",
                "No, I don't",
                "I'm not sure"
            ],
            "correct": "2",
            "explanation": "You should never use the same passwords for all" +
                " your accounts because once the password is laked" +
                " the same person will try the password for all the" +
                " linked accounts on your email.<br> Visit this link: ",
            "link": "https://www.forbes.com/sites/brookecrothers/2020/12/12/how-worried-should-i-be-about-my-password-being-compromised-stolen-in-a-data-breach-experts-say-this/?sh=489bd2427468\n"

        },
        {
            "question": "Do you reuse old passwords after some time?",
            "answers": [
                "Yes",
                "No",
                "Sometimes"
            ],
            "correct": "2",
            "explanation": " No! You should never reuse your old password!You never know what happened " +
                "with your password maybe someone knows it and use it by" +
                " selling it or trying to reach your important data even if it was an old one" +
                " and you didn't use it for years if the password's lacked it's" +
                " probably saved somewhere and who did it will try again to get your information.<br> Visit this link:",
            "link": "https://www.keepersecurity.com/blog/2020/12/21/how-often-should-you-change-your-password-keeper-security/"
        },
        {
            "question": "How often do you change your passwords?",
            "answers": [
                "Often",
                "I don't because I have all my passwords saved in browser",
                "When I don't remember the password"
            ],
            "correct": "1",
            "explanation": "The passwords should be changed once at least 60-90 days.<br> Visit this link:",
            "link" : "https://www.keepersecurity.com/blog/2020/12/21/how-often-should-you-change-your-password-keeper-security/"
        },


    ];

    question.innerHTML = questions[0].question;
    current_question = 0;
    question_nr.innerHTML = (current_question + 1).toString();
    answer1.innerHTML = questions[0].answers[0];
    answer2.innerHTML = questions[0].answers[1];
    answer3.innerHTML = questions[0].answers[2];
}

function goToNextQuestion() {
    body.style.display = "flex";
    correct.style.display = "none";
    explanation.innerHTML = "";
    if (current_question < questions.length - 1) {
        question.innerHTML = questions[current_question + 1].question;
        question_nr.innerHTML = (current_question + 1).toString();
        answer1.innerHTML = questions[current_question + 1].answers[0];
        answer2.innerHTML = questions[current_question + 1].answers[1];
        answer3.innerHTML = questions[current_question + 1].answers[2];
        current_question++;
    } else {
        body.style.display = "none";
        final_score.innerHTML = score.toString();
        end_card.style.display = "flex";
    }
}

function selectAnswer(answer_nr) {
    switch (answer_nr) {
        case 1:
            if (parseInt(questions[current_question].correct) === 1) {
                score++;
                console.log("score++");
                body.style.display = "none"
                correct.style.display = "flex";
                correct_title.innerHTML = "YOUR ANSWER IS CORRECT! I LIKE THE WAY YOU ARE THINKING! C:"
            } else {
                body.style.display = "none"
                correct.style.display = "flex";
                explanation.innerHTML = questions[current_question].explanation;
                correct_title.innerHTML = "WRONG ANSWER! :C";
                link.href = questions[current_question].link;
            }
            break;
        case 2:
            if (parseInt(questions[current_question].correct) === 2) {
                score++;
                console.log("score++");
                body.style.display = "none"
                correct.style.display = "flex";
                correct_title.innerHTML = "YOUR ANSWER IS CORRECT! I LIKE THE WAY YOU ARE THINKING! C:"
            } else {
                body.style.display = "none"
                correct.style.display = "flex";
                explanation.innerHTML = questions[current_question].explanation;
                correct_title.innerHTML = "WRONG ANSWER! :C"
                link.href = questions[current_question].link;
            }
            break;
        case 3:
            if (parseInt(questions[current_question].correct) === 3) {
                score++;
                console.log("score++");
                body.style.display = "none"
                correct.style.display = "flex";
                correct_title.innerHTML = "YOUR ANSWER IS CORRECT! I LIKE THE WAY YOU ARE THINKING! C:"
            } else {
                body.style.display = "none"
                correct.style.display = "flex";
                explanation.innerHTML = questions[current_question].explanation;
                correct_title.innerHTML = "WRONG ANSWER! :C"
                link.href = questions[current_question].link;
            }
            break;
    }
}

answer1.addEventListener("click", () => {
    selectAnswer(1);
});
answer2.addEventListener("click", () => {
    selectAnswer(2);
});
answer3.addEventListener("click", () => {
    selectAnswer(3);
});

next.addEventListener("click", goToNextQuestion);