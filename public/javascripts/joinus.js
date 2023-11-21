window.onload = function() {
    document.getElementsByClassName('closeBtn')[0].addEventListener('click', closeModal)
    document.getElementsByClassName('first_login_btn')[0].addEventListener('click', openModal)
}

const openModal = () => {
    document.getElementsByClassName('modalWrap')[0].style.display = "block"
}

const closeModal = () => {
    document.getElementsByClassName('modalWrap')[0].style.display = "none"
}
