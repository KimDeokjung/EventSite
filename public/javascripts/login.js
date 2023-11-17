window.onload = function(){
    document.getElementsByClassName('first_login_btn')[0].addEventListener('click', openFirstLogin)
    document.getElementsByClassName('first_login_close_btn')[0].addEventListener('click', closeFirstLogin)
    document.getElementsByClassName('second_login_close_btn')[0].addEventListener('click', closeFirstValueSubmit)

    document.getElementsByClassName('first_value_submit_btn')[0].addEventListener('click', firstValueSubmit)
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
    $('.first_login_modal').addClass('bbb');
}

const closeFirstValueSubmit = async () => {
    $('.first_login_modal').removeClass('bbb');
    await sleep(800)
    $('.container').removeClass('modal-open');
}