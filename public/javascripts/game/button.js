var stopTime = 5000 // 시간 멈추는 크기
const removeItem = []

window.onload = function(){
    resetBtn()
    for (let x = 0; x < 13; x++) {
        for (let y = 0; y < 10; y++) {
            document.getElementsByClassName('button_line')[x].getElementsByClassName('button')[y].addEventListener('click', clickBtn.bind(this, x, y))
        }
    }
}

// 버튼 누르는 함수
const clickBtn = (x, y) => {
    let nowItem = x * 100 + y
    if(removeItem.findIndex(x => x === nowItem) !== -1) {
        return
    }
    checkBtn(x, y);

    removeItem.push(nowItem)
    document.getElementsByClassName('button_line')[x].getElementsByClassName('button')[y].src = "../../images/button_disable.png"
    openBtnResult()
    setTimeout(closeBtnResult, stopTime);
}

const resetBtn = () => {
    axios({
        method: 'post',
        url: '/game/button/reset'
    })
}

const checkBtn = (x, y) => {
    axios({
        method: 'post',
        url: '/game/button/check',
        data: {
            x: x,
            y: y
        }
    })
        .then(response=>{
            if (response.data.result) {
                window.location.replace(response.data.link)
            }else {
                console.log("실패...")
            }
        })
        .catch(error=>{
            console.log(error);
        })
}

const openBtnResult = () => {
    $('.container').addClass('modal-open');
}

const closeBtnResult = () => {
    $('.container').removeClass('modal-open');
}

