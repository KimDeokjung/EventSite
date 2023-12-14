let nowLeft = false
let nowPoint = 0

window.onload = function(){
    window.addEventListener('keyup', pressKeyboard)
}

const pressKeyboard = (event) => {
    if (!nowLeft && event.keyCode === 37) {
        moveSnail()
        actionLeft()
    }else if(nowLeft && event.keyCode === 39) {
        moveSnail()
        actionRight()
    }
}

const moveSnail = () => {
    nowPoint += 0.1
    console.log(nowPoint)
    document.getElementsByClassName('snail')[0].style.left = nowPoint.toString() + "vw"
}

const actionLeft = () => {
    document.getElementsByClassName('snail')[0].src = "../../images/right_snail.png"
    document.getElementsByClassName('left_btn')[0].src = "../../images/left_default.png"
    document.getElementsByClassName('right_btn')[0].src = "../../images/right_active.png"
    nowLeft = true
}

const actionRight = () => {
    document.getElementsByClassName('snail')[0].src = "../../images/left_snail.png"
    document.getElementsByClassName('left_btn')[0].src = "../../images/left_active.png"
    document.getElementsByClassName('right_btn')[0].src = "../../images/right_default.png"
    nowLeft = false
}
