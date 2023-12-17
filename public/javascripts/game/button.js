var stopTime = 5000 // 시간 멈추는 크기
const removeItem = []

window.onload = function(){
    for (let x = 0; x < 13; x++) {
        for (let y = 0; y < 10; y++) {
            document.getElementsByClassName('button_line')[x].getElementsByClassName('button')[y].addEventListener('click', clickBtn.bind(this, x, y))
        }
    }
}

// 버튼 누르는 함수
const clickBtn = (x, y) => {
    removeItem.push(x * 100 + y)
    document.getElementsByClassName('button_line')[x].getElementsByClassName('button')[y].src = "../../images/button_disable.png"
    openBtnResult()
    setTimeout(closeBtnResult, stopTime);
}

const resetBtn = () => {

}

const openBtnResult = () => {
    $('.container').addClass('modal-open');
}

const closeBtnResult = () => {
    $('.container').removeClass('modal-open');
}

