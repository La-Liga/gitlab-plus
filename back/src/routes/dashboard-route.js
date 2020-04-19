const express = require('express');
const https = require('https');
const axios = require('axios');

require('dotenv').config();

const router = express.Router();
const header = {
    headers: {
        'Private-Token': process.env.TOKEN_GITLAB
    }
};

// removendo certificado SSL
const axiosInstance = axios.create({
    httpsAgent: new https.Agent({
        rejectUnauthorized: false
    })
});

// const totalTelasSprint;
// const totalTelasSprintFeitas;
// const totalToDo;
// const totalStaging;
// const totalRP;
// const totalTelasFeitas;

async function resultCount(path) {
    const total = await axiosInstance
        .get(process.env.PATH_BASE + path, header)
        .then((response) => Object.keys(response.data).length);

    return total;
}

async function obterValores() {
    const totalTelasFeitas = await resultCount(process.env.PATH_TELAS_FEITAS);
    const totalTelasSprint = await resultCount(process.env.PATH_TELAS_SPRINT);
    const totalTelasSprintFeitas = await resultCount(process.env.PATH_TELAS_FEITAS_SPRINT);
    const totalToDo = await resultCount(process.env.PATH_TODO);
    const totalStaging = await resultCount(process.env.PATH_STAGING);
    const totalRP = await resultCount(process.env.PATH_RP);

    return {
        totalTelasFeitas,
        totalTelasSprint,
        totalTelasSprintFeitas,
        totalToDo,
        totalStaging,
        totalRP
    };
}

router.get('/', async (req, res) => {
    const result = await obterValores();

    res.status(200).send({
        telasFeitas: `${result.totalTelasFeitas}/${process.env.TOTAL_TELAS}`,
        telasFeitasSprint: `${result.totalTelasSprintFeitas}/${result.totalTelasSprint}`,
        telasToDo: `${result.totalToDo}`,
        telasStaging: `${result.totalStaging}`,
        telasRP: `${result.totalRP}`
    });
});

module.exports = router;
