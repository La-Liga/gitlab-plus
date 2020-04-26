import * as functions from 'firebase-functions';

export const receiveIssues = functions.https.onRequest((request, response) => {
  console.log(request.body);
  response.send({ msg: 'Ok'});
});
