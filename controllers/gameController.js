const gameAction = require('../modules/game');
const jwt = require("jsonwebtoken");
const key = "secretKeysecretKeysecretKeysecretKeysecretKeysecretKeysecretKeysecretKeysecretKeysecretKey"

const decodeJWT = (data) => {
    try {
        return jwt.verify(data, key)
    } catch (error) {
        return false
    }
}

exports.resetAction = async(req, res, next) => {
    const data = await gameAction.resetBtn();
    res.json(data);
}

exports.checkAction = async(req, res, next) => {
    const x = req.body.x;
    const y = req.body.y
    const data = await gameAction.checkBtn(x, y);

    if (data.result) {
        let token = jwt.sign({stage: 1}, key, {expiresIn: "100m"});
        res.cookie('log', token, { maxAge: 900000, httpOnly: true });
    }

    res.json(data);
}

exports.getAnswer = async(req, res, next) => {
    const data = await gameAction.getAnswer();
    res.json(data);
}

exports.checkA = async(req, res, next) => {
    const num = req.body.num;
    const data = await gameAction.checkA(num)
    res.json(data)
}

exports.checkB = async(req, res, next) => {
    const num = req.body.num;
    const data = await gameAction.checkB(num)
    res.json(data)
}

exports.checkC = async(req, res, next) => {
    const num = req.body.num;
    const data = await gameAction.checkC(num)
    res.json(data)
}

exports.checkRunResult = async(req, res, next) => {
    const data = await gameAction.checkAnswer();

    if (data.result) {
        let token = jwt.sign({stage: 2}, key, {expiresIn: "100m"});
        res.cookie('log', token, { maxAge: 900000, httpOnly: true });
    }else {
        let token = jwt.sign({stage: 0}, key, {expiresIn: "100m"});
        res.cookie('log', token, { maxAge: 900000, httpOnly: true });
    }

    res.json(data);
}


exports.upgradeSword = async(req, res, next) => {
    const log = req.cookies.log
    const logData = decodeJWT(log)
    let data
    let token
    if(logData && logData.stage > 0) {
        switch (logData.stage) {
            case 2:
                data = await gameAction.upgradeOne()
                break
            case 3:
                data = await gameAction.upgradeTwo()
                break
            case 4:
                data = await gameAction.upgradeThree()
                break
            case 5:
                data = await gameAction.upgradeFour()
                break
            case 6:
                data = await gameAction.upgradeFive()
                break
            default:
                data = await gameAction.upgradeOne()
                break
        }

        console.log(data)

        if (data.result === -1) {
            token = jwt.sign({stage: 0}, key, {expiresIn: "100m"});
            res.cookie('log', token, { maxAge: 900000, httpOnly: true });
        }else {
            token = jwt.sign({stage: data.nowSword + 2}, key, {expiresIn: "100m"});
            res.cookie('log', token, { maxAge: 900000, httpOnly: true });
        }
        res.json(data);
    }else {
        res.json({
            result: -1
        })
    }
}

exports.resetSword = async(req, res, next) => {
    let data = await gameAction.resetSword()
    res.json(data)
}
