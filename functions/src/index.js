const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);

const db = admin.firestore();

exports.receiveIssues = functions.https.onRequest((request, response) => {
    db.collection('issues').add(request.body);

    response.status(201).send({
        msg: 'Created',
        createdAt: Date.now()
    });
});
