const jwt = require('jsonwebtoken');
const key = "secretKeysecretKeysecretKeysecretKeysecretKeysecretKeysecretKeysecretKeysecretKeysecretKey"

const response = (success, data) => {
    const ret = { success };
    if (data) ret.data = data;
    return ret;
}

const decodeJWT = (data) => {
    try {
        const realData = jwt.verify(data, key);
        return realData
    } catch (error) {
        return false
    }
}

const pageMove = (page, item, res) => {
    console.log(item)
    const worngPage = "        정말 그 대답이 맞다고 생각하십니까?<br/><br/>실망이네요;;<br/><br/>※ \"돌아가기\"를 입력해주세요."
    const zeroPage = "게임을 시작하려면 아래 키워드에 \"시작\"을 입력하세요.<br/><br/>※ 우측상단에는 인벤토리가 있습니다. 클릭으로 확인할 수 있습니다.<br/><br/>※ 개발자모드와 헛짓거리를 하지말라고 하면 더 할거같아서 마음대로 사용하세요.<br/><br/>※ 쿠키는 게임진행에 아주 중요한 역할입니다. 수작부리면 게임을 초기화 해야할 수 있습니다.<br/><br/>※ 로 시작하는 지문은 게임 진행에 있어 정말 중요한 공지사항입니다.<br/>반드시 꼼꼼하게 읽어주세요<br/><br/>※ PC 플레이를 적극 권장합니다."
    const onePage = worngPage
    const twoPage = "오늘도 평범하게 하루를 마무리하던 날,<br/>한통의 편지가 찾아왔다.<br/><br/>( ? / 버리기 ) <br/><br/>※ ()괄호 안에는 현재 플레이어가 입력할 수 있는 키워드 코드가 나열되어 있습니다.<br/>키워드는 \"버리기\" 처럼 공개되어 있기도 하고, \"?\"처럼 숨겨져 있기도 합니다.<br/><br/>※ ? 키워드는 직접 찾아야할 숨겨진 키워드 이며,<br/>? 키워드는 1개일 수도 다수일 수도 있습니다.<br/>? 키워드는 지문을 통해 찾아낼 수 있습니다. <br/><br/>※ 이번 ? 키워드는 위 지문에 적혀있는 \"편지\" 입니다."
    const threePage = worngPage
    const fourPage = "버리지 말면....<br/><br/>( 돌아가기 )"
    const fivePage = "[\"편지\" 획득]<br/>- 아이템 코드 : 0001 - <br/><br/> 무슨 암호같은건가...?<br/>어디 위치로 오라는 거 같은데 뭔지 모르겠네<br/><br/>( ? / 고민하기 )<br/><br/>※ 아이템 코드는 아이템을 사용할 때 키워드 코드로 입력할 수 있습니다.<br/><br/>※ 아이템 코드의 합을 입력 시 아이템을 합성할 수 있습니다.<br/>(예시: 0004, 0008 합성 => 0012)"
    const sixPage = worngPage
    const sevenPage = worngPage
    const eightPage = "고민중...<br/><br/>(편지)<br/><br/>※ ? 키워드는 지문에 숨겨져 있기도 하지만, 상황에 따라 문제의 정답일때도 있습니다.<br/>자물쇠의 비밀번호나, 지금 같은 상황일때 말이죠.<br/><br/>※ 또한, ? 키워드는 \"띄어쓰기를 포함하는 경우가 없습니다.\"<br/><br/>※ 첫번째 문제에서 막혀버린 \"김용민\"을 위해 힌트를 드릴게요<br/>우측 상단을 보시면 인벤토리를 열어 아이템의 상세 정보를 확인할 수 있습니다."
    const ninePage = worngPage
    const tenPage = "편지에 나온대로 갈대가 무성한곳을 찾아갔다.<br/>그러자 애플 야탐 고시원이 나왔다.<br/><br/>( 정문 / 창문 / 바닥 )"
    const elevenPage = worngPage
    const twelvePage = "[\"손수건\" 획득]<br/>-아이템 코드: 1476-<br/><br/> 이런곳에 손수건이 왜 떨어져있지...?<br/><br/>( 입구 )"
    const thirteenPage = worngPage
    const fourteenPage = "오랫동안 사람의 손길이 없었는지 창문이 더럽다.<br/><br/>창문 틀 밑으로 작은 낙서가 보이는데<br/><br/>얼룩때문에 보이질 않는다.<br/><br/>뭐 닦을만한게 없을까?<br/><br/>( ? / 입구 )"
    const fifteenPage = worngPage
    const sixteenPage = "얼룩을 닦아내자 뭔가가 보인다.<br/><br/>1230 = 6<br/>1279 = 19<br/>0201 = 3<br/>1129 = ?<br/><br/>암호같은건가??<br/><br/>( 입구 )"
    const seventeenPage = worngPage
    const eighteenPage = "정문은 자물쇠로 잠겨있다.<br/><br/>( ? / 입구 )<br/><br/>※ ? 키워드는 지문에 숨겨져 있다는 것을 명심하세요.<br/>그렇다면 이번 ? 키워드는 뭘까요?"
    const nineteenPage = worngPage
    const twentyPage = "2자리의 숫자 자물쇠이다.<br/><br/>( ? / 입구 )"
    const twentyOnePage = worngPage
    const twentyTwoPage = ""
    const twentyThreePage = ""
    const twentyFourPage = ""
    const twentyFivePage = ""
    const twentySixPage = ""
    const twentySevenPage = ""
    const twentyEightPage = ""
    const twentyNinePage = ""

    const pageData = [
        zeroPage, onePage, twoPage, threePage, fourPage,
        fivePage, sixPage, sevenPage, eightPage, ninePage,
        tenPage, elevenPage, twelvePage, thirteenPage, fourteenPage,
        fifteenPage, sixteenPage, seventeenPage, eighteenPage, nineteenPage,
        twentyPage, twentyOnePage, twentyTwoPage, twentyThreePage, twentyFourPage,
        twentyFivePage, twentySixPage, twentySevenPage, twentyEightPage, twentyNinePage
    ]

    let token = jwt.sign({stage: page, item: item,}, key, {expiresIn: "100m"});
    res.cookie('log', token, { maxAge: 900000, httpOnly: true });

    return response(false, {
        log: page,
        page: pageData[page]
    });
}

exports.getResult =  async() => {
    try {
        const result = {
            "aa" : 1,
            "bb" : 2
        }
        return response(true, result);
    } catch (err) {
        console.error(err);
        return response(false);
    }
}

exports.getItems = async(req, res, next) => {
    const log = req.cookies.log
    const logData = decodeJWT(log)
    const itemCode = {
        "0000": {
            code: "0000",
            src: "https://velog.velcdn.com/images/kimdeokjoong/post/83cc0972-7f77-47e9-9476-bd6363615090/image.png"
        },

        "0001": {
            code: "0001",
            src: "https://velog.velcdn.com/images/kimdeokjoong/post/658320d2-e326-4548-8fee-9bdc054bf7ce/image.png"
        },

        "1476": {
            code: "1476",
            src: "https://velog.velcdn.com/images/kimdeokjoong/post/7fa16e1f-3332-4bbc-9201-0685463fbcea/image.png"
        },

        "7891": {
            code: "7891",
            src: "https://velog.velcdn.com/images/kimdeokjoong/post/fb4c3fc0-06d4-4d12-9a68-9fe3044cb088/image.png"
        },

        "3157": {
            code: "3157",
            src: "https://velog.velcdn.com/images/kimdeokjoong/post/f287d5a9-9cc1-4bd8-b976-18583c09b86d/image.png"
        },

        "2786": {
            code: "2786",
            src: "https://velog.velcdn.com/images/kimdeokjoong/post/e9c187f6-960f-47cf-97ab-ca7d2c00ddda/image.png"
        },

        "4174": {
            code: "4174",
            src: "https://velog.velcdn.com/images/kimdeokjoong/post/4902d0d1-c79e-499c-8cbf-ff832d920b38/image.png"
        },

        "1147": {
            code: "1147",
            src: "https://velog.velcdn.com/images/kimdeokjoong/post/3886cec4-e0fc-429d-8f7f-b7d887e9b5dc/image.png"
        },
    }

    let item = logData.item
    let result = []

    if (!logData) {
        return response(false, {item: []})
    }

    for (const i of item) {
        if (i in itemCode) {
            result.push(itemCode[i])
        }
    }

    return response(true, {item: result})
}

exports.getItem = async(code) => {
    try {
        let result = {
            "src": "",
            "code": "",
            "detail": ""
        }
        switch (code) {
            case "0000":
                result.src = "https://velog.velcdn.com/images/kimdeokjoong/post/83cc0972-7f77-47e9-9476-bd6363615090/image.png"
                result.code = "            이름: 김용민의 생일케이크<br><br>\n" +
                    "            코드: 0000<br><br>\n" +
                    "            내구도: 무제한"
                result.detail = "미천한 김덕중이 천재 김용민을 축하하기 위해 넣은 케이크이다."
                break
            case "0001":
                result.src = "https://velog.velcdn.com/images/kimdeokjoong/post/658320d2-e326-4548-8fee-9bdc054bf7ce/image.png"
                result.code = "            이름: 편지<br><br>\n" +
                    "            코드: 0001<br><br>\n" +
                    "            내구도: 무제한"
                result.detail = "<img src=\"https://velog.velcdn.com/images/kimdeokjoong/post/ded71ee2-34f9-4dad-8e80-591759cab848/image.png\"/>"
                break
            case "1476":
                result.src = "https://velog.velcdn.com/images/kimdeokjoong/post/7fa16e1f-3332-4bbc-9201-0685463fbcea/image.png"
                result.code = "            이름: 손수건<br><br>\n" +
                    "            코드: 1476<br><br>\n" +
                    "            내구도: 무제한"
                result.detail = "손수건이다 얼룩진 곳을 닦거나 할 때 도움이 될 것 같다."
                break
            case "7891":
                result.src = "https://velog.velcdn.com/images/kimdeokjoong/post/fb4c3fc0-06d4-4d12-9a68-9fe3044cb088/image.png"
                result.code = "            이름: 켜진불<br><br>\n" +
                    "            코드: 7891<br><br>\n" +
                    "            내구도: 무제한"
                result.detail = "이것을 지니고 있으면 불이 켜진걸 알아챌 수 있다."
                break
            case "3157":
                result.src = "https://velog.velcdn.com/images/kimdeokjoong/post/f287d5a9-9cc1-4bd8-b976-18583c09b86d/image.png"
                result.code = "            이름: 장미칼<br><br>\n" +
                    "            코드: 0001<br><br>\n" +
                    "            내구도: 무제한"
                result.detail = "부엌에서 발견한 날카로운 칼이다. 이상한데 쓰지말고 인형같은걸 자르는거에 도움이 될 수도...?"
                break
            case "2786":
                result.src = "https://velog.velcdn.com/images/kimdeokjoong/post/e9c187f6-960f-47cf-97ab-ca7d2c00ddda/image.png"
                result.code = "            이름: 인형<br><br>\n" +
                    "            코드: 0001<br><br>\n" +
                    "            내구도: 무제한"
                result.detail = "귀여운 인형이다."
                break
            case "4174":
                result.src = "https://velog.velcdn.com/images/kimdeokjoong/post/4902d0d1-c79e-499c-8cbf-ff832d920b38/image.png"
                result.code = "            이름: 망가진인형<br><br>\n" +
                    "            코드: 0001<br><br>\n" +
                    "            내구도: 무제한"
                result.detail = "욕심으로 무참히 망가진 인형이다. 형태도 알아볼 수 없을정도로 망가졌다...."
                break
            case "1147":
                result.src = "https://velog.velcdn.com/images/kimdeokjoong/post/3886cec4-e0fc-429d-8f7f-b7d887e9b5dc/image.png"
                result.code = "            이름: 사진(1/2)<br><br>\n" +
                    "            코드: 0001<br><br>\n" +
                    "            내구도: 무제한"
                result.detail = "사진의 일부분이다. 나머지 반은 어디에 있지??"
                break
            default:
                result.src = "https://velog.velcdn.com/images/kimdeokjoong/post/e30b82aa-3d45-4b37-ac2e-ef8407369d33/image.png"
                result.code = "            이름: 에러<br><br>\n" +
                    "            코드: -1<br><br>\n" +
                    "            내구도: -1"
                result.detail = "이상한 짓 하지말면"

        }

        return response(true, result);
    } catch (err) {
        console.error(err)
        let result = {
            "src": "https://velog.velcdn.com/images/kimdeokjoong/post/e30b82aa-3d45-4b37-ac2e-ef8407369d33/image.png",
            "code": "            이름: 에러<br><br>\n" +
                "            코드: -1<br><br>\n" +
                "            내구도: -1",
            "detail": "이상한 짓 하지말면"
        }
        return response(false, result);
    }
}

exports.getProblem = async(req, res, next) => {
    const answer = req.body.answer
    const log = req.cookies.log
    const logData = decodeJWT(log)
    console.log("-=-=-=-=-=-=")
    console.log(logData)
    let item = logData.item
    console.log(item)


    if (!logData) {
        return pageMove(0, ["0000"], res)
    }

    switch (logData.stage) {
        case 0:
            if (answer === "시작") {
                return pageMove(2, item, res)
            }else {
                return pageMove(1, item, res)
            }
        case 1:
            if (answer === "돌아가기") {
                return pageMove(0, item, res)
            }else {
                return pageMove(1, item, res)
            }
        case 2:
            if (answer === "버리기") {
                return pageMove(4, item, res)
            }else if(answer === "편지") {
                item.push("0001")
                return pageMove(5, item, res)
            } else {
                return pageMove(3, item, res)
            }
        case 3:
            if (answer === "돌아가기") {
                return pageMove(2, item, res)
            }else {
                return pageMove(3, item, res)
            }
        case 4:
            if (answer === "돌아가기") {
                return pageMove(2, item, res)
            }else {
                return pageMove(6, item, res)
            }
        case 6:
            if (answer === "돌아가기") {
                return pageMove(4, item, res)
            }else {
                return pageMove(6, item, res)
            }
        case 5:
            if (answer === "고민하기") {
                return pageMove(8, item, res)
            } else if (answer === "갈대") {
                return pageMove(10, item, res)
            } else {
                return pageMove(7, item, res)
            }
        case 7:
            if (answer === "돌아가기") {
                return pageMove(5, item, res)
            }else {
                return pageMove(7, item, res)
            }
        case 8:
            if (answer === "편지") {
                return pageMove(5, item, res)
            }else {
                return pageMove(9, item, res)
            }
        case 9:
            if (answer === "돌아가기") {
                return pageMove(8, item, res)
            }else {
                return pageMove(9, item, res)
            }
        case 10:
            if (answer === "바닥") {
                return pageMove(12, item, res)
            }else if (answer === "창문") {
                return pageMove(14, item, res)
            }else if (answer === "정문") {
                return pageMove(18, item, res)
            }else {
                return pageMove(11, item, res)
            }
        case 11:
            if (answer === "돌아가기") {
                return pageMove(10, item, res)
            }else {
                return pageMove(11, item, res)
            }
        case 12:
            item.push("1476")
            if (answer === "입구") {
                return pageMove(10, item, res)
            }else {
                return pageMove(13, item, res)
            }
        case 13:
            if (answer === "돌아가기") {
                return pageMove(12, item, res)
            }else {
                return pageMove(13, item, res)
            }
        case 14:

            if (item.includes("1476") && answer === "1476") {
                return pageMove(16, item, res)
            } else if(answer === "입구") {
                return pageMove(10, item, res)
            } else {
                return pageMove(15, item, res)
            }
        case 15:
            if (answer === "돌아가기") {
                return pageMove(14, item, res)
            }else {
                return pageMove(15, item, res)
            }
        case 16:
            if (answer === "입구") {
                return pageMove(10, item, res)
            }else {
                return pageMove(17, item, res)
            }
        case 17:
            if (answer === "돌아가기") {
                return pageMove(16, item, res)
            }else {
                return pageMove(17, item, res)
            }
        case 18:
            if (answer === "자물쇠") {
                return pageMove(20, item, res)
            } else if(answer === "입구") {
                return pageMove(10, item, res)
            } else {
                return pageMove(19, item, res)
            }
        case 19:
            if (answer === "돌아가기") {
                return pageMove(18, item, res)
            }else {
                return pageMove(19, item, res)
            }
        case 20:
            break
        case 21:
            if (answer === "돌아가기") {
                return pageMove(20, item, res)
            }else {
                return pageMove(21, item, res)
            }
        default:
            break
    }


    let token = jwt.sign({stage: 1, item: ["0000"],}, key, {expiresIn: "100m"});

    res.cookie('log', token, { maxAge: 900000, httpOnly: true });

    console.log("-=-=-=-=-=-=-=")
    console.log(req.cookies.rememberme)
    console.log(token)
    decodeJWT(req.cookies.log)
    console.log("-=-=-=-=-=-=-=")
}
