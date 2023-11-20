const fs = require('fs');

exports.startFinLogging = async(quarter) => {
    fs.appendFile('logging.txt', quarter + '-start-fin\n', function (err) {
        if (err) throw err;
    });

    return {}
}

exports.idFinLogging = async(quarter) => {
    fs.appendFile('logging.txt', quarter + '-id-fin\n', function (err) {
        if (err) throw err;
    });

    return {}
}

exports.puzzleFinLogging = async(quarter) => {
    fs.appendFile('logging.txt', quarter + '-puzzle-fin\n', function (err) {
        if (err) throw err;
    });

    return {}
}

exports.quizFinLogging = async(quarter) => {
    fs.appendFile('logging.txt', quarter + '-quiz-fin\n', function (err) {
        if (err) throw err;
    });

    return {}
}