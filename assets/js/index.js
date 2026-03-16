const questionContainer = document.querySelector('#questionContainer')
const questions = [

    {
        //Question 1
        question: " Combien de litres de sang dans un corps humain ?",
        responses: ["5 litres", "3 litres", "6 litres", "2 litres"],
        good: "3 litres"
    }, {
        //question 2
        question: "  Combien d'os dans le corps humain pour un adulte  ?",
        responses: ["210", "202 ", "215", "206"],
        good: "206"
    }, {
        //question 3
        question: " Quel organe du corps humain capable de se régénérer ?",
        responses: ["le colon", "les reins", "le foie", "l estomac"],
        good: "le foie"
    }, {
        //question 4
        question: " Combien y a-t-il de phalanges sur le pouce  ?",
        responses: ["2 phalanges", "4 phalanges", "1 phalange", "3 phalanges"],
        good: "2 phalanges"
    }, {
        //question 5
        question: "  Quel est le plus grand organe du corps humain  ?",
        responses: ["l intestin", "la peau", "le cerveau", "le foie"],
        good: "la peau"
    }
]
const btnplay = document.querySelector('#btnplay')
let index = 0
let score = 0
btnplay.addEventListener('click', function (e) {
    index = 0
    score = 0
    questions.sort(() => Math.random() - 0.5)

    btnplay.style.display = "none";
    displayQuestion()
    // melangetbl([...questions])

})
function displayQuestion() {
    questionContainer.innerHTML = ""

    if (index >= questions.length) {

        const resultfinal = document.createElement('h2')
        resultfinal.classList.add('resultfinal')
        resultfinal.textContent = "Ton score est de " + score + " / " + questions.length
        questionContainer.appendChild(resultfinal)
        btnplay.style.display = ""

        return
    }

    const questionPose = document.createElement('h2')
    questionPose.textContent = questions[index].question
    questionContainer.appendChild(questionPose)
    displayResponse()
    if (displayQuestion > questions.length) {
        const resultscore = document.createElement('h2')
        resultscore.textContent = "score : " + score + " / " + questions.length
        questionContainer.appendChild(resultscore)
    }
}
function displayResponse() {

    const respContainer = document.createElement('div')
    respContainer.classList.add('boxrep')

    questions[index].responses.forEach(response => {



        const button = document.createElement('button')
        button.classList.add('btnrep')
        button.textContent = response
        respContainer.appendChild(button)
        button.addEventListener('click', function (e) {
            check(button.textContent)
        })
    });
    questionContainer.appendChild(respContainer)
}
function check(resp) {

    const checkContainer = document.createElement('div')
    checkContainer.classList.add('checkContainer')
    questionContainer.appendChild(checkContainer)
    
    const allButtons = document.querySelectorAll('.btnrep')
    allButtons.forEach(btn => btn.disabled = true)
    
    if (resp == questions[index].good) {
        const goodrep = document.createElement('h2')
        goodrep.textContent = "bonne reponse ! " + "score : " + (score + 1) + " / " + questions.length
        goodrep.style.color = "green"
        checkContainer.appendChild(goodrep)
        score++
    }
    else {
        const notgoodrep = document.createElement('h2')
        notgoodrep.textContent = "Mauvaise reponse ! bonne reponse est : " + questions[index].good + " ! score : " + score + " / " + questions.length
        notgoodrep.style.color = "red"
        checkContainer.appendChild(notgoodrep)
    }
    setTimeout(() => {
        index++
        displayQuestion()

    }, 2000);
}