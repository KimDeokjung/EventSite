window.onload = function(){
    window.document.getElementsByClassName('first')[0].addEventListener('click', firstClick)
    window.document.getElementsByClassName('second')[0].addEventListener('click', secondClick)
}

const firstClick = () => {
    window.location.replace("/game/button")
}

const secondClick = () => {
    alert("4단계 깨면 끝\n하면서 배우면")
}
