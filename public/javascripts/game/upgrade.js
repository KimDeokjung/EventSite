window.onload = function(){
    resetSword()
    window.document.getElementsByClassName('sword')[0].addEventListener('click', upgradeSword)
}

const upgradeSword = () => {
    axios({
        method: 'post',
        url: '/game/upgrade/sword'
    }).then(response=>{
        if (response.data.result === -1) {
            window.location.replace("/game/upgrade")
        }else if(response.data.nowSword === 5) {
            window.location.reload("/game/reword")
        }else{
            window.document.getElementsByClassName('talk')[0].innerHTML = response.data.innerHtml
            window.document.getElementsByClassName('sword')[0].src = response.data.img
        }
    })
}

const resetSword = () => {
    axios({
        method: 'post',
        url: '/game/upgrade/reset'
    })
}
