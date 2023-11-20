const logAction = require('../modules/log');

exports.startAction = async(req, res, next) => {
    const quarter = req.body.quarter;
    const data = await logAction.startFinLogging(quarter);
    res.json(data);
}

exports.idFinAction = async(req, res, next) => {
    const quarter = req.body.quarter;
    const data = await logAction.idFinLogging(quarter);
    res.json(data);
}

exports.puzzleFinAction = async(req, res, next) => {
    const quarter = req.body.quarter;
    const data = await logAction.puzzleFinLogging(quarter);
    res.json(data);
}

exports.quizFinAction = async(req, res, next) => {
    const quarter = req.body.quarter;
    const data = await logAction.quizFinLogging(quarter);
    res.json(data);
}