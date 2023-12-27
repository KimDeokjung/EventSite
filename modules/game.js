let x = 0
let y = 0
let runAnswer = [0, 1, 2]
let nowAnswer = [0, 0, 0]
let nowSword = 0

const getRandomInt = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
}

const shuffle = (array) => {
    array.sort(() => Math.random() - 0.5);
}

exports.resetBtn = async() => {
    x = getRandomInt(0, 12)
    y = getRandomInt(0, 9)
    return {}
}

exports.checkBtn = async(nowX, nowY) => {
    console.log(x)
    console.log(y)
    console.log(nowX)
    console.log(nowY)

    if (x === nowX && y === nowY) {
        return {
            result: true,
            link: "/game/run"
        }
    }else {
        return {
            result: false,
            link: "/game/button"
        }
    }
}

exports.getAnswer = async() => {
    shuffle(runAnswer)
    nowAnswer = [0, 0, 0]
    return {
        result: runAnswer
    }
}

exports.checkA = async(num) => {
    nowAnswer[0] = num
    return {}
}

exports.checkB = async(num) => {
    nowAnswer[1] = num
    return {}
}

exports.checkC = async(num) => {
    nowAnswer[2] = num
    return {}
}

exports.checkAnswer = async() => {
    if(nowAnswer[0] === runAnswer[0] && nowAnswer[1] === runAnswer[1] && nowAnswer[2] === runAnswer[2]) {
        return {
            result: true,
            link: "/game/upgrade"
        }
    }else {
        return {
            result: false,
            link: "/game/fail"
        }
    }
}


exports.upgradeOne = async() => {
    nowSword += 1
    return {
        result: 0,
        nowSword: 1,
        link: "/game/upgrade",
        img: "../../images/aksskaus.png",
        innerHtml: "        <div>\n" +
            "            <<+1 철검>><br/><br/>\n" +
            "\n" +
            "            <div class=\"title\">\n" +
            "            성공확률: 70%<br/>\n" +
            "            실패확률: 20%\n" +
            "            하락확률: 10%\n" +
            "            </div>\n" +
            "\n" +
            "            <br/>\n" +
            "            얼른 무기를 눌러<br/>\n" +
            "            강화를 하자\n" +
            "        </div>"
    }
}

exports.upgradeTwo = async() => {
    if (nowSword !== 1) {
        return {
            result: -1,
            nowSword: 0,
            link: "/game/upgrade",
            img: "../../images/sjfmf.png",
            innerHtml: "        <div>\n" +
                "            <<+0 나무검>><br/><br/>\n" +
                "\n" +
                "            <div class=\"title\">\n" +
                "            성공확률: 100%<br/>\n" +
                "            실패확률: 0%\n" +
                "            </div>\n" +
                "\n" +
                "            <br/>\n" +
                "            얼른 무기를 눌러<br/>\n" +
                "            강화를 하자\n" +
                "        </div>"
        }
    }

    let result = getRandomInt(1, 10)
    if (1 <= result && result <= 7) {
        nowSword += 1
        return {
            result: 0,
            nowSword: 2,
            link: "/game/upgrade",
            img: "../../images/snsanf.png",
            innerHtml: "        <div>\n" +
                "            <<+2 짱짱검>><br/><br/>\n" +
                "\n" +
                "            <div class=\"title\">\n" +
                "            성공확률: 50%<br/>\n" +
                "            실패확률: 30%\n" +
                "            하락확률: 20%\n" +
                "            </div>\n" +
                "\n" +
                "            <br/>\n" +
                "            얼른 무기를 눌러<br/>\n" +
                "            강화를 하자\n" +
                "        </div>"
        }
    }else if (8 <= result && result <= 9) {
        return {
            result: 1,
            nowSword: 1,
            link: "/game/upgrade",
            img: "../../images/aksskaus.png",
            innerHtml: "        <div>\n" +
                "            <<+1 철검>><br/><br/>\n" +
                "\n" +
                "            <div class=\"title\">\n" +
                "            성공확률: 70%<br/>\n" +
                "            실패확률: 20%\n" +
                "            하락확률: 10%\n" +
                "            </div>\n" +
                "\n" +
                "            <br/>\n" +
                "            얼른 무기를 눌러<br/>\n" +
                "            강화를 하자\n" +
                "        </div>"
        }
    }else {
        nowSword -= 1
        return {
            result: 2,
            nowSword: 0,
            link: "/game/upgrade",
            img: "../../images/sjfmf.png",
            innerHtml: "        <div>\n" +
                "            <<+0 나무검>><br/><br/>\n" +
                "\n" +
                "            <div class=\"title\">\n" +
                "            성공확률: 100%<br/>\n" +
                "            실패확률: 0%\n" +
                "            </div>\n" +
                "\n" +
                "            <br/>\n" +
                "            얼른 무기를 눌러<br/>\n" +
                "            강화를 하자\n" +
                "        </div>"
        }
    }
}

exports.upgradeThree = async() => {
    if (nowSword !== 2) {
        return {
            result: -1,
            nowSword: 0,
            link: "/game/upgrade",
            img: "../../images/sjfmf.png",
            innerHtml: "        <div>\n" +
                "            <<+0 나무검>><br/><br/>\n" +
                "\n" +
                "            <div class=\"title\">\n" +
                "            성공확률: 100%<br/>\n" +
                "            실패확률: 0%\n" +
                "            </div>\n" +
                "\n" +
                "            <br/>\n" +
                "            얼른 무기를 눌러<br/>\n" +
                "            강화를 하자\n" +
                "        </div>"
        }
    }
    let result = getRandomInt(1, 10)

    if (1 <= result && result <= 5) {
        nowSword += 1
        return {
            result: 0,
            nowSword: 3,
            link: "/game/upgrade",
            img: "../../images/snsdlsoflaus.png",
            innerHtml: "        <div>\n" +
                "            <<+3 총검>><br/><br/>\n" +
                "\n" +
                "            <div class=\"title\">\n" +
                "            성공확률: 30%<br/>\n" +
                "            실패확률: 30%\n" +
                "            하락확률: 30%\n" +
                "            초기화확률: 10%\n" +
                "            </div>\n" +
                "\n" +
                "            <br/>\n" +
                "            얼른 무기를 눌러<br/>\n" +
                "            강화를 하자\n" +
                "        </div>"
        }
    }else if (6 <= result && result <= 8) {
        return {
            result: 1,
            nowSword: 2,
            link: "/game/upgrade",
            img: "../../images/snsanf.png",
            innerHtml: "        <div>\n" +
                "            <<+2 짱짱검>><br/><br/>\n" +
                "\n" +
                "            <div class=\"title\">\n" +
                "            성공확률: 50%<br/>\n" +
                "            실패확률: 30%\n" +
                "            하락확률: 20%\n" +
                "            </div>\n" +
                "\n" +
                "            <br/>\n" +
                "            얼른 무기를 눌러<br/>\n" +
                "            강화를 하자\n" +
                "        </div>"
        }
    }else {
        nowSword -= 1
        return {
            result: 2,
            nowSword: 1,
            link: "/game/upgrade",
            img: "../../images/aksskaus.png",
            innerHtml: "        <div>\n" +
                "            <<+1 철검>><br/><br/>\n" +
                "\n" +
                "            <div class=\"title\">\n" +
                "            성공확률: 70%<br/>\n" +
                "            실패확률: 20%\n" +
                "            하락확률: 10%\n" +
                "            </div>\n" +
                "\n" +
                "            <br/>\n" +
                "            얼른 무기를 눌러<br/>\n" +
                "            강화를 하자\n" +
                "        </div>"
        }
    }
}

exports.upgradeFour = async() => {
    if (nowSword !== 3) {
        return {
            result: -1,
            nowSword: 0,
            link: "/game/upgrade",
            img: "../../images/sjfmf.png",
            innerHtml: "        <div>\n" +
                "            <<+0 나무검>><br/><br/>\n" +
                "\n" +
                "            <div class=\"title\">\n" +
                "            성공확률: 100%<br/>\n" +
                "            실패확률: 0%\n" +
                "            </div>\n" +
                "\n" +
                "            <br/>\n" +
                "            얼른 무기를 눌러<br/>\n" +
                "            강화를 하자\n" +
                "        </div>"
        }
    }
    let result = getRandomInt(1, 10)
    if (1 <= result && result <= 3) {
        nowSword += 1
        return {
            result: 0,
            nowSword: 4,
            link: "/game/upgrade",
            img: "../../images/dndhkdkdkd.png",
            innerHtml: "        <div>\n" +
                "            <<+4 핵검>><br/><br/>\n" +
                "\n" +
                "            <div class=\"title\">\n" +
                "            성공확률: 30%<br/>\n" +
                "            실패확률: 10%\n" +
                "            하락확률: 30%\n" +
                "            초기화확률: 30%\n" +
                "            </div>\n" +
                "\n" +
                "            <br/>\n" +
                "            얼른 무기를 눌러<br/>\n" +
                "            강화를 하자\n" +
                "        </div>"
        }
    }else if (4 <= result && result <= 6) {
        return {
            result: 1,
            nowSword: 3,
            link: "/game/upgrade",
            img: "../../images/snsdlsoflaus.png",
            innerHtml: "        <div>\n" +
                "            <<+3 총검>><br/><br/>\n" +
                "\n" +
                "            <div class=\"title\">\n" +
                "            성공확률: 30%<br/>\n" +
                "            실패확률: 30%\n" +
                "            하락확률: 30%\n" +
                "            초기화확률: 10%\n" +
                "            </div>\n" +
                "\n" +
                "            <br/>\n" +
                "            얼른 무기를 눌러<br/>\n" +
                "            강화를 하자\n" +
                "        </div>"
        }
    }else if (7 <= result && result <= 9) {
        nowSword -= 1
        return {
            result: 2,
            nowSword: 2,
            link: "/game/upgrade",
            img: "../../images/snsanf.png",
            innerHtml: "        <div>\n" +
                "            <<+2 짱짱검>><br/><br/>\n" +
                "\n" +
                "            <div class=\"title\">\n" +
                "            성공확률: 50%<br/>\n" +
                "            실패확률: 30%\n" +
                "            하락확률: 20%\n" +
                "            </div>\n" +
                "\n" +
                "            <br/>\n" +
                "            얼른 무기를 눌러<br/>\n" +
                "            강화를 하자\n" +
                "        </div>"
        }
    }else {
        nowSword = 0
        return {
            result: -1,
            nowSword: 0,
            link: "/game/upgrade",
            img: "../../images/sjfmf.png",
            innerHtml: "        <div>\n" +
                "            <<+0 나무검>><br/><br/>\n" +
                "\n" +
                "            <div class=\"title\">\n" +
                "            성공확률: 100%<br/>\n" +
                "            실패확률: 0%\n" +
                "            </div>\n" +
                "\n" +
                "            <br/>\n" +
                "            얼른 무기를 눌러<br/>\n" +
                "            강화를 하자\n" +
                "        </div>"
        }
    }
}

exports.upgradeFive = async() => {
    if (nowSword !== 4) {
        return {
            result: -1,
            nowSword: 0,
            link: "/game/upgrade",
            img: "../../images/sjfmf.png",
            innerHtml: "        <div>\n" +
                "            <<+0 나무검>><br/><br/>\n" +
                "\n" +
                "            <div class=\"title\">\n" +
                "            성공확률: 100%<br/>\n" +
                "            실패확률: 0%\n" +
                "            </div>\n" +
                "\n" +
                "            <br/>\n" +
                "            얼른 무기를 눌러<br/>\n" +
                "            강화를 하자\n" +
                "        </div>"
        }
    }
    let result = getRandomInt(1, 10)
    if (1 <= result && result <= 3) {
        nowSword += 1
        return {
            result: 0,
            nowSword: 5,
            link: "/game/upgrade",
            img: "../../images/dndhkdkdkd.png"
        }
    }else if (4 === result) {
        return {
            result: 1,
            nowSword: 4,
            link: "/game/upgrade",
            img: "../../images/dndhkdkdkd.png",
            innerHtml: "        <div>\n" +
                "            <<+4 핵검>><br/><br/>\n" +
                "\n" +
                "            <div class=\"title\">\n" +
                "            성공확률: 30%<br/>\n" +
                "            실패확률: 10%\n" +
                "            하락확률: 30%\n" +
                "            초기화확률: 30%\n" +
                "            </div>\n" +
                "\n" +
                "            <br/>\n" +
                "            얼른 무기를 눌러<br/>\n" +
                "            강화를 하자\n" +
                "        </div>"
        }
    }else if (5 <= result && result <= 7) {
        nowSword -= 1
        return {
            result: 2,
            nowSword: 3,
            link: "/game/upgrade",
            img: "../../images/snsdlsoflaus.png",
            innerHtml: "        <div>\n" +
                "            <<+3 총검>><br/><br/>\n" +
                "\n" +
                "            <div class=\"title\">\n" +
                "            성공확률: 30%<br/>\n" +
                "            실패확률: 30%\n" +
                "            하락확률: 30%\n" +
                "            초기화확률: 10%\n" +
                "            </div>\n" +
                "\n" +
                "            <br/>\n" +
                "            얼른 무기를 눌러<br/>\n" +
                "            강화를 하자\n" +
                "        </div>"
        }
    }else {
        nowSword = 0
        return {
            result: -1,
            nowSword: 0,
            link: "/game/upgrade",
            img: "../../images/sjfmf.png",
            innerHtml: "        <div>\n" +
                "            <<+0 나무검>><br/><br/>\n" +
                "\n" +
                "            <div class=\"title\">\n" +
                "            성공확률: 100%<br/>\n" +
                "            실패확률: 0%\n" +
                "            </div>\n" +
                "\n" +
                "            <br/>\n" +
                "            얼른 무기를 눌러<br/>\n" +
                "            강화를 하자\n" +
                "        </div>"
        }
    }
}

exports.resetSword = async() => {
    nowSword = 0
    return {

    }
}
