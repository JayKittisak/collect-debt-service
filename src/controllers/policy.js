const db = require("../models");
const response = require("../config/response");
const sequelize = db.sequelize;
const policy = db.policy;

exports.gets = async (req, res) => {
    data = await policy.findAll()
    if (data) {
        responseStatus = response['Success']
        res.status(responseStatus.response).json(data);
    } else {
        responseStatus = response['Notfound']
        res.status(responseStatus.response).json(responseStatus);
    }
};
exports.create = async (req, res) => {
    // console.log(req);

    var Policy_no = req.body.Policy_no === undefined ? 0 : req.body.Policy_no;
    var Word = req.body.Word === undefined ? "" : req.body.Word;
    var Interest_rate = req.body.Interest_rate === undefined ? 0 : req.body.Interest_rate;
    var Fee_rate = req.body.Fee_rate === undefined ? 0 : req.body.Fee_rate;
    var Amount = req.body.Amount === undefined ? 0 : req.body.Amount;
    var Ku_request = req.body.Ku_request === undefined ? 0 : req.body.Ku_request;
    var Ku_code = req.body.Ku_code === undefined ? "" : req.body.Ku_code;
    var Ku_name = req.body.Ku_name === undefined ? "" : req.body.Ku_name;
    var Ku_age = req.body.Ku_age === undefined ? "" : req.body.Ku_age;
    var Ku_address = req.body.Ku_address === undefined ? "" : req.body.Ku_address;
    var Ku_MP = req.body.Ku_MP === undefined ? "" : req.body.Ku_MP;
    var Ku_other = req.body.Ku_other === undefined ? "" : req.body.Ku_other;
    if (
        Policy_no === 0
    ) {
        responseStatus = response['ParameterNotFound']
        return res.status(responseStatus.response).json(responseStatus);
    }

    data = await policy.create({
        Policy_no: Policy_no,
        Word: Word,
        Interest_rate: Interest_rate,
        Fee_rate: Fee_rate,
        Amount: Amount,
        Ku_request: Ku_request,
        Ku_code: Ku_code,
        Ku_name: Ku_name,
        Ku_age: Ku_age,
        Ku_address: Ku_address,
        Ku_MP: Ku_MP,
        Ku_other: Ku_other
    })
    if (data) {
        responseStatus = response['Created']
        res.status(responseStatus.response).json(data);
    } else {
        responseStatus = response['Error']
        res.status(responseStatus.response).json(responseStatus);
    }
};
exports.update = async (req, res) => {
    // console.log(req);
    var id = req.body.id === undefined ? 0 : req.body.id;
    var Policy_no = req.body.Policy_no === undefined ? 0 : req.body.Policy_no;
    var Word = req.body.Word === undefined ? "" : req.body.Word;
    var Interest_rate = req.body.Interest_rate === undefined ? 0 : req.body.Interest_rate;
    var Fee_rate = req.body.Fee_rate === undefined ? 0 : req.body.Fee_rate;
    var Amount = req.body.Amount === undefined ? 0 : req.body.Amount;
    var Ku_request = req.body.Ku_request === undefined ? 0 : req.body.Ku_request;
    var Ku_code = req.body.Ku_code === undefined ? "" : req.body.Ku_code;
    var Ku_name = req.body.Ku_name === undefined ? "" : req.body.Ku_name;
    var Ku_age = req.body.Ku_age === undefined ? "" : req.body.Ku_age;
    var Ku_address = req.body.Ku_address === undefined ? "" : req.body.Ku_address;
    var Ku_MP = req.body.Ku_MP === undefined ? "" : req.body.Ku_MP;
    var Ku_other = req.body.Ku_other === undefined ? "" : req.body.Ku_other;
    if (
        id === 0
    ) {
        responseStatus = response['ParameterNotFound']
        return res.status(responseStatus.response).json(responseStatus);
    }

    data = await policy.update({
        Policy_no: Policy_no,
        Word: Word,
        Interest_rate: Interest_rate,
        Fee_rate: Fee_rate,
        Amount: Amount,
        Ku_request: Ku_request,
        Ku_code: Ku_code,
        Ku_name: Ku_name,
        Ku_age: Ku_age,
        Ku_address: Ku_address,
        Ku_MP: Ku_MP,
        Ku_other: Ku_other
    },{
        where: {id: id}
    })
    if (data) {
        responseStatus = response['Success']
        res.status(responseStatus.response).json(responseStatus);
    } else {
        responseStatus = response['Error']
        res.status(responseStatus.response).json(responseStatus);
    }
};
exports.delete = async (req, res) => {
    // console.log(req);
    var id = req.body.id === undefined ? 0 : req.body.id;
    if (
        id === 0
    ) {
        responseStatus = response['ParameterNotFound']
        return res.status(responseStatus.response).json(responseStatus);
    }

    data = await policy.destroy({
        where: {id: id}
    })
    if (data) {
        responseStatus = response['Success']
        res.status(responseStatus.response).json(responseStatus);
    } else {
        responseStatus = response['Error']
        res.status(responseStatus.response).json(responseStatus);
    }
};