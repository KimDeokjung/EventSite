window.onload = function(){
    document.getElementsByClassName('return_btn')[0].addEventListener('click', clickBtn)
}

const clickBtn = () => {
    window.location.replace("/game/button")
}
