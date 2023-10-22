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
    const twentyTwoPage = "자물쇠를 풀고 들어왔지만<br/><br/>너무 캄캄해서 아무것도 보이지 않는다.<br/><br/>( 불켜기 )"
    const twentyThreePage = worngPage
    const twentyFourPage = "불켜기 게임"
    const twentyFivePage = "불이 켜지자 애플 고시원 내부가 보인다.<br/><br/>엄청나게 호화로운 내부였다.<br/><br/>언뜻 둘러보니 부엌과 안방으로 가는 길이 보였다.<br/><br/>( 부엌 / 안방 )"
    const twentySixPage = worngPage
    const twentySevenPage = "부엌에 들어오자 이것저것 많이 어질러져 있다.<br/><br/>마치 사람의 손길이 오랫동안 이어지지 않은 것 같다.<br/><br/>그중에서도 서랍과 식칼이 눈에 띈다.<br/><br/>( ? / 입구 )"
    const twentyEightPage = worngPage
    const twentyNinePage = "[\"식칼\" 획득]<br/>-아이템 코드: 3157-<br/><br/> 사용할 곳이 있을수도 있으니 챙겨두자. <br/><br/>( 부엌 )"
    const thirtyPage = worngPage
    const thirtyOnePage = "서랍을 열려고 하자 어디선가 목소리가 들린다. <br/><br/>\"서랍을 열고자 한다면 다음 질문에 대답해라.<br/>김용민은 무엇인가?\"<br/><br/>아주 쉬운 문제를 말해주고 있는 것 같다.<br/><br/>얼른 정답을 말하고 서랍을 열어보자<br/><br/>( 천재 / 개천재 / 우주천재 / 부엌 )"
    const thirtyTwoPage = worngPage
    const thirtyThreePage = "대답하기 전에는 여기서 못빠져나가는....ㅋ<br/><br/>( 천재 / 개천재 / 우주천재 )"
    const thirtyFourPage = "[\"사진(1/2)\" 획득]<br/>-아이템 코드 : 1147-<br/><br/> 서랍을 열어보니 찢어져있는 사진이 들어있다.<br/><br/>나머지 부분도 모아야지 정확한 모습을 알 수 있을것 같다.<br/><br/>( 부엌 )"
    const thirtyFivePage = worngPage
    const thirtySixPage = "안방에 들어가려고 시도했지만<br/><br/>도어락으로 잠겨있다.<br/><br/>( ? / 입구 )"
    const thirtySevenPage = worngPage
    const thirtyEightPage = "4자리의 키패드가 있으며 <br/><br/>아래에는 이상한 문자들이 나열되어 있다.<br/><br/>3 - 3 - 5 - 4 - a - b - c - d<br/>abcd = ?<br/><br/>( ? / 입구 )"
    const thirtyNinePage = worngPage
    const fortyPage = "[\"인형\" 획득]<br/>- 아이템 코드 : 2786 -<br/><br/>안방으로 들어가자 인형이 떨어져있다.<br/><br/>인형 말고는 딱히 특별한 점이 안보이는 공간이다.<br/><br/>( 입구 )"
    const fortyOnePage = worngPage
    const fortyTwoPage = "[\"인형\" 파손]<br/>- 아이템 코드: 2786 -<br/><br/>[\"망가진인형\" 획득]<br/>- 아이템 코드: 4174 -<br/><br/>[\"사진(1/2)\" 획득]<br/>- 아이템 코드: 7411 -<br/><br/>인형을 칼로 살해하니 안에 내용물이 나왔다.<br/><br/>찢어져있는 사진이 들어있는데 어디쓰이는 걸까....?<br/><br/>( 입구 )"
    const fortyThreePage = worngPage
    const fortyFourPage = "<img src=\"https://velog.velcdn.com/images/ejrwnd1103/post/d683a8b8-c603-42c9-a5b7-600abcb4d3e9/image.png\"/>사진이 완성되자 빛이 나오며<br/>목소리가 들렸습니다.<br/><br/> ( 아무입력 )"
    const fortyFivePage = "<img src=\"https://velog.velcdn.com/images/ejrwnd1103/post/d683a8b8-c603-42c9-a5b7-600abcb4d3e9/image.png\"/>이까지 오시느라 수고 하셨습니다.<br/><br/>수고하신 플레이어에게 현재 배낭에 있는 물건 중 하나를 선물로 드릴게요 <br/><br/> 어떤걸 가지시겠어요?<br/><br/> ( 아무입력 )"
    const fortySixPage = "<img src=\"https://velog.velcdn.com/images/ejrwnd1103/post/d683a8b8-c603-42c9-a5b7-600abcb4d3e9/image.png\"/>알겠습니다. 이쪽으로 오셔서 상품을 수령하세요.<br/><br/> ( 아무입력 )"
    const fortySevenPage = ""
    const fortyEightPage = ""
    const fortyNinePage = ""
    const fiftyPage = ""
    const fiftyOnePage = ""
    const fiftyTwoPage = ""
    const fiftyThreePage = ""
    const fiftyFourPage = ""
    const fiftyFivePage = ""
    const fiftySixPage = ""
    const fiftySevenPage = ""
    const fiftyEightPage = ""
    const fiftyNinePage = ""

    const pageData = [
        zeroPage, onePage, twoPage, threePage, fourPage,
        fivePage, sixPage, sevenPage, eightPage, ninePage,
        tenPage, elevenPage, twelvePage, thirteenPage, fourteenPage,
        fifteenPage, sixteenPage, seventeenPage, eighteenPage, nineteenPage,
        twentyPage, twentyOnePage, twentyTwoPage, twentyThreePage, twentyFourPage,
        twentyFivePage, twentySixPage, twentySevenPage, twentyEightPage, twentyNinePage,
        thirtyPage, thirtyOnePage, thirtyTwoPage, thirtyThreePage, thirtyFourPage,
        thirtyFivePage, thirtySixPage, thirtySevenPage, thirtyEightPage, thirtyNinePage,
        fortyPage, fortyOnePage, fortyTwoPage, fortyThreePage, fortyFourPage,
        fortyFivePage, fortySixPage, fortySevenPage, fortyEightPage, fortyNinePage,
        fiftyPage, fiftyOnePage, fiftyTwoPage, fiftyThreePage, fiftyFourPage,
        fiftyFivePage, fiftySixPage, fiftySevenPage, fiftyEightPage, fiftyNinePage
    ]

    let token = jwt.sign({stage: page, item: item,}, key, {expiresIn: "100m"});
    res.cookie('log', token, { maxAge: 900000, httpOnly: true });

    return response(false, {
        log: page,
        page: pageData[page]
    });
}

const addItem = (bag, item) => {
    if (bag.includes(item)) {
        return bag
    }else {
        bag.push(item)
        return bag
    }
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

        "7411": {
            code: "7411",
            src: "https://velog.velcdn.com/images/kimdeokjoong/post/6025e9ab-ae86-41f0-a1e1-882a0d211166/image.png"
        },

        "9999": {
            code: "9999",
            src: "https://velog.velcdn.com/images/ejrwnd1103/post/d683a8b8-c603-42c9-a5b7-600abcb4d3e9/image.png"
        }
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
                    "            코드: 3157<br><br>\n" +
                    "            내구도: 무제한"
                result.detail = "부엌에서 발견한 날카로운 칼이다. 이상한데 쓰지말고 인형같은걸 자르는거에 도움이 될 수도...?"
                break
            case "2786":
                result.src = "https://velog.velcdn.com/images/kimdeokjoong/post/e9c187f6-960f-47cf-97ab-ca7d2c00ddda/image.png"
                result.code = "            이름: 인형<br><br>\n" +
                    "            코드: 2786<br><br>\n" +
                    "            내구도: 무제한"
                result.detail = "귀여운 인형이다."
                break
            case "4174":
                result.src = "https://velog.velcdn.com/images/kimdeokjoong/post/4902d0d1-c79e-499c-8cbf-ff832d920b38/image.png"
                result.code = "            이름: 망가진인형<br><br>\n" +
                    "            코드: 4174<br><br>\n" +
                    "            내구도: 무제한"
                result.detail = "욕심으로 무참히 망가진 인형이다. 형태도 알아볼 수 없을정도로 망가졌다...."
                break
            case "1147":
                result.src = "https://velog.velcdn.com/images/kimdeokjoong/post/3886cec4-e0fc-429d-8f7f-b7d887e9b5dc/image.png"
                result.code = "            이름: 사진(1/2)<br><br>\n" +
                    "            코드: 1147<br><br>\n" +
                    "            내구도: 무제한"
                result.detail = "사진의 일부분이다. 나머지 반은 어디에 있지??"
                break
            case "7411":
                result.src = "https://velog.velcdn.com/images/kimdeokjoong/post/6025e9ab-ae86-41f0-a1e1-882a0d211166/image.png"
                result.code = "            이름: 사진(1/2)<br><br>\n" +
                    "            코드: 7411<br><br>\n" +
                    "            내구도: 무제한"
                result.detail = "사진의 일부분이다. 나머지 반은 어디에 있지??"
                break
            case "9999":
                result.src = "https://velog.velcdn.com/images/ejrwnd1103/post/d683a8b8-c603-42c9-a5b7-600abcb4d3e9/image.png"
                result.code = "            이름: 사진<br><br>\n" +
                    "            코드: 9999<br><br>\n" +
                    "            내구도: 무제한"
                result.detail = "개쩌는 용님의 사진"
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
    let item = logData.item

    if (!logData) {
        return pageMove(0, ["0000"], res)
    }

    if (answer === "5943" && item.includes("3157") && item.includes("2786")) {
        item = item.filter((element) => element !== '2786');
        item = addItem(item, "4174")
        item = addItem(item, "7411")
        return pageMove(42, item, res)
    }

    if (answer === "8558" && item.includes("1147") && item.includes("7411")) {
        item = item.filter((element) => element !== '1147');
        item = item.filter((element) => element !== '7411');
        item = addItem(item, "9999")
        return pageMove(44, item, res)
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
                item = addItem(item, "0001")
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
                item = addItem(item, "1476")
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
            if (answer === "13") {
                return pageMove(22, item, res)
            } else if(answer === "입구") {
                return pageMove(10, item, res)
            } else {
                return pageMove(21, item, res)
            }
        case 21:
            if (answer === "돌아가기") {
                return pageMove(20, item, res)
            }else {
                return pageMove(21, item, res)
            }
        case 22:
            if (answer === "불켜기") {
                return pageMove(24, item, res)
            }else {
                return pageMove(21, item, res)
            }
        case 23:
            if (answer === "돌아가기") {
                return pageMove(22, item, res)
            }else {
                return pageMove(23, item, res)
            }
        case 25:
            if (answer === "부엌") {
                return pageMove(27, item, res)
            }else if (answer === "안방") {
                return pageMove(36, item, res)
            }else {
                return pageMove(26, item, res)
            }
        case 26:
            if (answer === "돌아가기") {
                return pageMove(25, item, res)
            }else {
                return pageMove(26, item, res)
            }
        case 27:
            if (answer === "식칼") {
                item = addItem(item, "3157")
                return pageMove(29, item, res)
            }else if (answer === "서랍") {
                return pageMove(31, item, res)
            }else if (answer === "입구") {
                return pageMove(25, item, res)
            }else {
                return pageMove(28, item, res)
            }
        case 28:
            if (answer === "돌아가기") {
                return pageMove(27, item, res)
            }else {
                return pageMove(28, item, res)
            }
        case 29:
            if (answer === "부엌") {
                return pageMove(27, item, res)
            }else {
                return pageMove(30, item, res)
            }
        case 30:
            if (answer === "돌아가기") {
                return pageMove(29, item, res)
            }else {
                return pageMove(30, item, res)
            }
        case 31:
            if (answer === "천재" || answer === "개천재" || answer === "우주천재") {
                item = addItem(item, "1147")
                return pageMove(34, item, res)
            }else if (answer === "부엌") {
                return pageMove(33, item, res)
            }else {
                return pageMove(32, item, res)
            }
        case 32:
            if (answer === "돌아가기") {
                return pageMove(31, item, res)
            }else {
                return pageMove(32, item, res)
            }
        case 33:
            if (answer === "천재" || answer === "개천재" || answer === "우주천재") {
                item = addItem(item, "1147")
                return pageMove(34, item, res)
            }else {
                return pageMove(33, item, res)
            }
        case 34:
            if (answer === "부엌") {
                return pageMove(27, item, res)
            }else {
                return pageMove(35, item, res)
            }
        case 35:
            if (answer === "돌아가기") {
                return pageMove(34, item, res)
            }else {
                return pageMove(35, item, res)
            }
        case 36:
            if (answer === "도어락") {
                return pageMove(38, item, res)
            }else if(answer === "입구") {
                return pageMove(25, item, res)
            }else {
                return pageMove(37, item, res)
            }
        case 37:
            if (answer === "돌아가기") {
                return pageMove(36, item, res)
            }else {
                return pageMove(37, item, res)
            }
        case 38:
            if (answer === "4355") {
                item = addItem(item, "2786")
                return pageMove(40, item, res)
            } else if(answer === "입구") {
                return pageMove(25, item, res)
            } else {
                return pageMove(39, item, res)
            }
        case 39:
            if (answer === "돌아가기") {
                return pageMove(38, item, res)
            }else {
                return pageMove(39, item, res)
            }
        case 40:
            if (answer === "입구") {
                return pageMove(25, item, res)
            } else {
                return pageMove(41, item, res)
            }
        case 41:
            if (answer === "돌아가기") {
                return pageMove(40, item, res)
            }else {
                return pageMove(41, item, res)
            }
        case 42:
            if (answer === "입구") {
                return pageMove(25, item, res)
            }else {
                return pageMove(43, item, res)
            }
        case 43:
            if (answer === "돌아가기") {
                return pageMove(42, item, res)
            }else {
                return pageMove(43, item, res)
            }
        case 44:
            return pageMove(45, item, res)
        case 45:
            return pageMove(46, item, res)
        default:
            return pageMove(0, ["0000"], res)
    }
}

exports.pageLoad = async(req, res, next) => {
    const log = req.cookies.log
    const logData = decodeJWT(log)
    let item = logData.item

    if (!logData) {
        return pageMove(0, ["0000"], res)
    }

    if (logData.stage === 24 && item.includes("7891")) {
        return pageMove(25, item, res)
    }

    return pageMove(logData.stage, item, res)
}

exports.addLight = async(req, res, next) => {
    const log = req.cookies.log
    const logData = decodeJWT(log)
    let item = logData.item

    if (!logData) {
        return pageMove(0, ["0000"], res)
    }

    item = addItem(item, "7891")
    return pageMove(logData.stage, item, res)
}
