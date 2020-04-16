const express = require('express');
const https = require('https');
const axios = require('axios');

require('dotenv').config();

const router = express.Router();

// removendo certificado SSL
const axiosInstance = axios.create({
    httpsAgent: new https.Agent({
        rejectUnauthorized: false
    })
});

var totalTelasFeitas;
var totalTelasSprint;
var totalTelasSprintFeitas;
var totalToDo;
var totalStaging;
var totalRP;

async function obterValores() {
    totalTelasFeitas = await resultCount(process.env.PATH_TELAS_FEITAS);
    totalTelasSprint = await resultCount(process.env.PATH_TELAS_SPRINT);
    totalTelasSprintFeitas = await resultCount(process.env.PATH_TELAS_FEITAS_SPRINT);
    totalToDo = await resultCount(process.env.PATH_TODO);
    totalStaging = await resultCount(process.env.PATH_STAGING);
    totalRP = await resultCount(process.env.PATH_RP);
}

router.get('/', (req, res, next) => {
    obterValores().then(function () {
        res.status(200).send({
            telasFeitas: `${totalTelasFeitas}/${process.env.TOTAL_TELAS}`,
            telasFeitasSprint: `${totalTelasSprintFeitas}/${totalTelasSprint}`,
            telasToDo: `${totalToDo}`,
            telasStaging: `${totalStaging}`,
            telasRP: `${totalRP}`
        });
    });
});

const header = {headers: {"Private-Token": process.env.TOKEN_GITLAB}}

async function resultCount(path) {
    var total = await axiosInstance.get(process.env.PATH_BASE + path, header)
        .then(function (response) {
            return Object.keys(response.data).length;
        });

    return total;
}

module.exports = router;