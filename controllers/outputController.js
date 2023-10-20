const abc = require('../modules/output');

exports.submit = async(req, res, next) => {
    const keywords = req.body.keywords;
    const data = await abc.getResult(keywords);
    res.json(data);
}

exports.item = async(req, res, next) => {
    const code = req.body.code;
    const data = await abc.getItem(code);
    res.json(data);
}

exports.problem = async(req, res, next) => {
    const data = await abc.getProblem(req, res, next);
    res.json(data);
}
