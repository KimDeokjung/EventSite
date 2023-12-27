window.onload = function(){
    window.document.getElementsByClassName('sword')[0].addEventListener('click', upgradeSword)
}

const upgradeSword = () => {
    axios({
        method: 'post',
        url: '/game/upgrade/sword'
    }).then(response=>{
        console.log(response.data.nowSword)
    })
}
