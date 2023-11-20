const nemoLogicAnswer = [[0, 1, 0, 1, 0], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [0, 1, 1, 1, 0], [0, 0, 1, 0, 0]]
let nemoLogicValue = [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]]
let questionValue = [-1, -1]
let particles = [];
const colors = ["#eb6383","#fa9191","#ffe9c5","#b4f2e1"];

window.onload = function(){
    document.getElementsByClassName('first_login_btn')[0].addEventListener('click', openFirstLogin)
    document.getElementsByClassName('first_login_close_btn')[0].addEventListener('click', closeFirstLogin)
    document.getElementsByClassName('second_login_close_btn')[0].addEventListener('click', closeFirstValueSubmit)
    document.getElementsByClassName('third_login_close_btn')[0].addEventListener('click', closeSecondValueSubmit)

    document.getElementsByClassName('first_value_submit_btn')[0].addEventListener('click', firstValueSubmit)
    document.getElementsByClassName('second_value_submit_btn')[0].addEventListener('click', secondValueSubmit)
    document.getElementsByClassName('third_value_submit_btn')[0].addEventListener('click', thirdValueSubmit)
    document.getElementsByClassName('fourth')[0].addEventListener('click', pop)

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
const openFirstLogin = () => {
    logingData("start")
    $('.container').addClass('modal-open');

    document.getElementsByClassName('second')[0].style.display = "block"
    document.getElementsByClassName('third')[0].style.display = "block"
}

const closeFirstLogin = () => {
    $('.container').removeClass('modal-open');
}

const checkInputArea = () => {
    if (document.getElementById("login_id").value.length !== 0 &&
        document.getElementById("login_name").value.length !== 0 &&
        document.getElementById("login_password").value.length !== 0 &&
        document.getElementById("login_password_check").value.length !== 0 &&
        document.getElementById("login_password").value === document.getElementById("login_password_check").value) {
        document.getElementsByClassName('first_value_submit_btn')[0].disabled = false
    }else {
        document.getElementsByClassName('first_value_submit_btn')[0].disabled = true
    }
}

const firstValueSubmit = () => {
    logingData("id")
    $('.first_login_modal').addClass('second_open');
}

const closeFirstValueSubmit = async () => {
    document.getElementsByClassName('second')[0].style.display = "none"
    $('.first_login_modal').removeClass('second_open');
    $('.container').removeClass('modal-open');
}

const secondValueSubmit = () => {
    logingData("puzzle")
    $('.first_login_modal').addClass('third_open');
}

const closeSecondValueSubmit = async () => {
    document.getElementsByClassName('second')[0].style.display = "none"
    document.getElementsByClassName('third')[0].style.display = "none"
    $('.first_login_modal').removeClass('second_open');
    $('.first_login_modal').removeClass('third_open');
    $('.container').removeClass('modal-open');
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
        if (questionValue[num] !== -1) {
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

const checkQuestionAnswer = async () => {
    if (questionValue[0] === 2 && questionValue[1] === 3) {
        document.getElementsByClassName('third_value_submit_btn')[0].disabled = false
        await sleep(0)
        alert("정답!")
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

const thirdValueSubmit = () => {
    logingData("quiz")
    $('.first_login_modal').addClass('fourth_open');
    pop()
    window.setTimeout(render, 700);
}

const pop = () => {
    for (let i = 0; i < 150; i++) {
        const p = document.createElement('particule');
        p.x = window.innerWidth * 0.5;
        p.y = window.innerHeight + (Math.random() * window.innerHeight * 0.3);
        p.vel = {
            x: (Math.random() - 0.5) * 10,
            y: Math.random() * -20 - 15
        };
        p.mass = Math.random() * 0.2 + 0.8;
        particles.push(p);
        p.style.transform = `translate(${p.x}px, ${p.y}px)`;
        const size = Math.random() * 15 + 5;
        p.style.width = size + 'px';
        p.style.height = size + 'px';
        p.style.background = colors[Math.floor(Math.random()*colors.length)];
        document.body.appendChild(p);
    }
}

const render = () => {
    for (let i = particles.length - 1; i--; i > -1) {
        const p = particles[i];
        p.style.transform = `translate3d(${p.x}px, ${p.y}px, 1px)`;

        p.x += p.vel.x;
        p.y += p.vel.y;

        p.vel.y += (0.5 * p.mass);
        if (p.y > (window.innerHeight * 2)) {
            p.remove();
            particles.splice(i, 1);
        }
    }
    requestAnimationFrame(render);
}

const logingData = (type) => {
    axios({
        method: 'post',
        url: '/log/fin/' + type,
        data: {
            quarter: "pretty"
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