require('dotenv').config();

const functions = require('firebase-functions');
const admin = require('firebase-admin');

const serviceAccount = require('./credentials.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://gitlab-plus.firebaseio.com'
});

const db = admin.firestore();

exports.receiveIssues = functions.https.onRequest((request, response) => {
    db.collection('issues').add(request.body)
        .then(() => {
            response.status(201).send({
                msg: 'Created',
                createdAt: Date.now()
            });
        }).catch(() => {
            response.status(400).send({
                msg: 'Not Created'
            });
        });
});
