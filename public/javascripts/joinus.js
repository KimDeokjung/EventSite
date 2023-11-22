const nemoLogicAnswer = [[0, 1, 0, 1, 0], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [0, 1, 1, 1, 0], [0, 0, 1, 0, 0]]
let nemoLogicValue = [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]]
let questionValue = [-1, -1]

window.onload = function() {
    document.getElementsByClassName('closeBtn')[0].addEventListener('click', closeModal)
    document.getElementsByClassName('closeBtn_two')[0].addEventListener('click', closeModal_two)
    document.getElementsByClassName('closeBtn_three')[0].addEventListener('click', closeModal_three)
    document.getElementsByClassName('first_login_btn')[0].addEventListener('click', openModal)

    document.getElementsByClassName('first_modal_submit_btn')[0].addEventListener('click', nextStep_one)
    document.getElementsByClassName('second_modal_submit_btn')[0].addEventListener('click', nextStep_two)
    document.getElementsByClassName('third_modal_submit_btn')[0].addEventListener('click', nextStep_three)

    document.getElementById('login_id').addEventListener("keyup", checkInputArea)
    document.getElementById('login_name').addEventListener("keyup", checkInputArea)
    document.getElementById('login_password').addEventListener("keyup", checkInputArea)
    document.getElementById('login_password_check').addEventListener("keyup", checkInputArea)

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

const openModal = () => {
    logingData("start")
    document.getElementsByClassName('modalWrap')[0].style.display = "block"
}

const closeModal = () => {
    document.getElementsByClassName('modalWrap')[0].style.display = "none"
}

const closeModal_two = () => {
    document.getElementsByClassName('modalWrap_two')[0].style.display = "none"
}

const closeModal_three = () => {
    document.getElementsByClassName('modalWrap_three')[0].style.display = "none"
}

const checkInputArea = () => {
    if (document.getElementById("login_id").value.length !== 0 &&
        document.getElementById("login_name").value.length !== 0 &&
        document.getElementById("login_password").value.length !== 0 &&
        document.getElementById("login_password_check").value.length !== 0 &&
        document.getElementById("login_password").value === document.getElementById("login_password_check").value) {
        document.getElementsByClassName('first_modal_submit_btn')[0].disabled = false
    }else {
        document.getElementsByClassName('first_modal_submit_btn')[0].disabled = true
    }
}

const nextStep_one = () => {
    logingData("id")
    document.getElementsByClassName('modalWrap')[0].style.display = 'none'
    document.getElementsByClassName('modalWrap_two')[0].style.display = 'block'
}

const nextStep_two = () => {
    logingData("puzzle")
    document.getElementsByClassName('modalWrap_two')[0].style.display = 'none'
    document.getElementsByClassName('modalWrap_three')[0].style.display = 'block'
}

const nextStep_three = () => {
    logingData("quiz")
    document.getElementsByClassName('modalWrap_three')[0].style.display = 'none'
    document.getElementsByClassName('modalWrap_four')[0].style.display = 'block'
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
            }else if(nemoLogicAnswer[i][j] !== 1 && nemoLogicValue[i][j] === 1) {
                result = false
            }
        }
    }
    if (result) {
        document.getElementsByClassName('second_modal_submit_btn')[0].disabled = false
    }else {
        document.getElementsByClassName('second_modal_submit_btn')[0].disabled = true
    }
}

const clickQuestionAnswer = (num, answer) => {
    if (questionValue[num] === answer) {
        questionValue[num] = -1
        if (num === 0)
            document.getElementsByClassName('check_one')[answer]
                .innerText = ""
        else
            document.getElementsByClassName('check_two')[answer]
                .innerText = ""
    }else {
        if (questionValue[num] !== -1) {
            if (num === 0)
                document.getElementsByClassName('check_one')[questionValue[num]]
                    .innerText = ""
            else
                document.getElementsByClassName('check_two')[questionValue[num]]
                    .innerText = ""
        }

        questionValue[num] = answer
        if (num === 0)
            document.getElementsByClassName('check_one')[answer]
                .innerText = "V"
        else
            document.getElementsByClassName('check_two')[answer]
                .innerText = "V"
    }

    if (questionValue[0] !== -1 && questionValue[1] !== -1) {
        checkQuestionAnswer()
    }
}

const checkQuestionAnswer = async () => {
    if (questionValue[0] === 2 && questionValue[1] === 3) {
        document.getElementsByClassName('third_modal_submit_btn')[0].disabled = false
        await sleep(10)
        alert("정답!")
    }else{
        document.getElementsByClassName('check_one')[questionValue[0]]
            .innerText = ""
        document.getElementsByClassName('check_two')[questionValue[1]]
            .innerText = ""
        questionValue[0] = -1
        questionValue[1] = -1
        alert("오답!")
    }
}

const logingData = (type) => {
    axios({
        method: 'post',
        url: '/log/fin/' + type,
        data: {
            quarter: "dirty"
        }
    })
        .then(response=>{
            invenLoad()
            if (response.data.data.log === 24) {
                window.location.replace("/light")
            }else {
                document.getElementsByClassName('main_monit')[0].innerHTML = response.data.data.page
            }
        })
        .catch(error=>{
            console.log(error);
        })
}