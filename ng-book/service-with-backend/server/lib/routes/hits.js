
var hits = 0;

exports.count = function(req, res) {
    res.status(200).send({
        hits: hits
    });
};

exports.registerNew = function (req, res) {
    hits += 1;
    res.status(200).send({
        hits: hits
    });
};