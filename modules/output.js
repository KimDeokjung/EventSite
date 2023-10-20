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


    let token = jwt.sign(
        {
            type: "JWT",
            nickname: "nickname",
            profile: "profile",
        },
        key,
        {
            expiresIn: "100m"
        }
    );

    res.cookie('log', token, { maxAge: 900000, httpOnly: true });

    console.log("-=-=-=-=-=-=-=")
    console.log(req.cookies.rememberme)
    console.log(token)
    decodeJWT(req.cookies.log)
    console.log("-=-=-=-=-=-=-=")
}
