import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp(functions.config().firebase);

const db = admin.firestore();

export const receiveIssues = functions.https.onRequest((request, response) => {
    db.collection('issues').add(request.body);

    response.status(201).send({
        msg: 'Created',
        createdAt: Date.now()
    });
});
