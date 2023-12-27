let nowPage = 0

window.onload = function(){
    window.addEventListener('keyup', pressKeyboard)
}

const pressKeyboard = (event) => {
    switch (nowPage) {
        case 0:
            document.getElementsByClassName('main')[0].style.backgroundImage = "url(../images/sotry_1.png)";
            nowPage += 1
            break
        case 1:
            document.getElementsByClassName('main')[0].style.backgroundImage = "url(../images/story_2.png)";
            nowPage += 1
            break
        case 2:
            document.getElementsByClassName('main')[0].style.backgroundImage = "url(../images/story_3.png)";
            nowPage += 1
            break
        case 3:
            document.getElementsByClassName('main')[0].style.backgroundImage = "url(../images/story_4.png)";
            nowPage += 1
            break
        case 4:
            document.getElementsByClassName('main')[0].style.backgroundImage = "url(../images/story_5.png)";
            nowPage += 1
            break
        case 5:
            document.getElementsByClassName('main')[0].style.backgroundImage = "url(../images/story_6.png)";
            nowPage += 1
            break
        case 6:
            document.getElementsByClassName('main')[0].style.backgroundImage = "url(../images/story_7.png)";
            nowPage += 1
            break
        case 7:
            document.getElementsByClassName('main')[0].style.backgroundImage = "url(../images/story_8.png)";
            nowPage += 1
            break
        case 8:
            window.location.replace("/game/main")
            break
        default:
            nowPage = 0
            break
    }
}

