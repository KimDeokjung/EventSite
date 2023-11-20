const nemoLogicAnswer = [[0, 1, 0, 1, 0], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [0, 1, 1, 1, 0], [0, 0, 1, 0, 0]]
let nemoLogicValue = [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]]
let questionValue = [-1, -1]

window.onload = function(){
    document.getElementsByClassName('first_login_btn')[0].addEventListener('click', openFirstLogin)
    document.getElementsByClassName('first_login_close_btn')[0].addEventListener('click', closeFirstLogin)
    document.getElementsByClassName('second_login_close_btn')[0].addEventListener('click', closeFirstValueSubmit)

    document.getElementsByClassName('first_value_submit_btn')[0].addEventListener('click', firstValueSubmit)
    document.getElementsByClassName('second_value_submit_btn')[0].addEventListener('click', secondValueSubmit)

    for(let i = 1; i < 6; i++) {
       for(let j = 1; j < 6; j++) {
           document.getElementsByClassName('second_nome_logic_row')[i]
               .getElementsByTagName('div')[j]
               .addEventListener('click', clickNemoLogic.bind(this, i - 1, j - 1))
       }
    }

    for(let i = 0; i < 4; i++) {
        document.getElementsByClassName('third_question_answer')[i]
            .addEventListener('click', clickQuestionAnswer.bind(this, 0, i))

        document.getElementsByClassName('third_question_answer_two')[i]
            .addEventListener('click', clickQuestionAnswer.bind(this, 1, i))
    }
}

function sleep(ms) {
    return new Promise((r) => setTimeout(r, ms));
}
const openFirstLogin = () => {
    $('.container').addClass('modal-open');
}

const closeFirstLogin = () => {
    $('.container').removeClass('modal-open');
}

const firstValueSubmit = () => {
    $('.first_login_modal').addClass('second_open');
}

const closeFirstValueSubmit = async () => {
    $('.first_login_modal').removeClass('second_open');
    await sleep(800)
    $('.container').removeClass('modal-open');
}

const secondValueSubmit = () => {
    $('.first_login_modal').addClass('third_open');
}

const closeSecondValueSubmit = async () => {

}

const clickNemoLogic = (row, col) => {
    switch (nemoLogicValue[row][col]) {
        case 0:
            nemoLogicValue[row][col] = 1
            document.getElementsByClassName('second_nome_logic_row')[row + 1]
                .getElementsByTagName('div')[col + 1]
                .style.backgroundColor = 'black'
            break
        case 1:
            nemoLogicValue[row][col] = 2
            document.getElementsByClassName('second_nome_logic_row')[row + 1]
                .getElementsByTagName('div')[col + 1]
                .style.backgroundColor = 'white'
            document.getElementsByClassName('second_nome_logic_row')[row + 1]
                .getElementsByTagName('div')[col + 1]
                .innerText = "X"
            break
        case 2:
            nemoLogicValue[row][col] = 0
            document.getElementsByClassName('second_nome_logic_row')[row + 1]
                .getElementsByTagName('div')[col + 1]
                .innerText = ""
            break
    }
    checkNemoLogic()
}

const checkNemoLogic = () => {
    let result = true
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            if (nemoLogicAnswer[i][j] === 1 && nemoLogicValue[i][j] !== 1) {
                result = false
            }
        }
    }
    if (result) {
        document.getElementsByClassName('second_value_submit_btn')[0].disabled = false
    }else {
        document.getElementsByClassName('second_value_submit_btn')[0].disabled = true
    }
}

const clickQuestionAnswer = (num, answer) => {
    if (questionValue[num] === answer) {
        questionValue[num] = -1
        if (num === 0)
            document.getElementsByClassName('third_question_answer')[answer]
                .className = "third_question_answer"
        else
            document.getElementsByClassName('third_question_answer_two')[answer]
                .className = "third_question_answer_two"
    }else {
        if (questionValue[num] != -1) {
            if (num === 0)
                document.getElementsByClassName('third_question_answer')[questionValue[num]]
                    .className = "third_question_answer"
            else
                document.getElementsByClassName('third_question_answer_two')[questionValue[num]]
                    .className = "third_question_answer_two"
        }

        questionValue[num] = answer
        if (num === 0)
            document.getElementsByClassName('third_question_answer')[answer]
                .className = "third_question_answer third_value_answer_select"
        else
            document.getElementsByClassName('third_question_answer_two')[answer]
                .className = "third_question_answer_two third_value_answer_select"
    }

    if (questionValue[0] !== -1 && questionValue[1] !== -1) {
        checkQuestionAnswer()
    }
}

const checkQuestionAnswer = () => {
    if (questionValue[0] === 2 && questionValue[1] === 3) {
        alert("정답!")
        document.getElementsByClassName('third_value_submit_btn')[0].disabled = false
    }else{
        document.getElementsByClassName('third_question_answer')[questionValue[0]]
            .className = "third_question_answer"
        document.getElementsByClassName('third_question_answer_two')[questionValue[1]]
            .className = "third_question_answer_two"
        questionValue[0] = -1
        questionValue[1] = -1
        alert("오답!")
    }
}