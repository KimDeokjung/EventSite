const gameAction = require('../modules/game');

exports.resetAction = async(req, res, next) => {
    const data = await gameAction.resetBtn();
    res.json(data);
}

exports.checkAction = async(req, res, next) => {
    const data = await gameAction.checkBtn();
    res.json(data);
}
