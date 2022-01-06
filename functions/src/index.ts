import * as functions from "firebase-functions";
const Sendchamp = require('sendchamp-sdk');
import * as admin from 'firebase-admin';
admin.initializeApp();


// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
exports.newSms=functions.firestore
.document("/orders/{ordersId}")
.onCreate((event,context) => {
  
    const ordersId=context.params.ordersId;
 const db=admin.firestore()
 return db.collection('orders').doc(ordersId).get().then((doc) => {
  const user=doc.data();
  
  const number=user?.number;
  
  const sendchamp = new Sendchamp({
    mode: 'live', // this is set to live by default
    publicKey: 'sendchamp_live_$2y$10$Po1E8lXXdb5Cg5pIC993red2d7s5PXEexPvqSHrWBVhMF3toiIcaW'
  });
  
  // Initialize a service
  const sms = sendchamp.SMS;
  
  // Use the service
  const options = {
    to: [`234${number}`],
    message: 'Hello from postman',
    sender_name: 'myshago',
  };
  
  sms.send(options)
    .then((response: any) => {
      console.log(response);
    })
    .catch((error: any) => {
      console.log(error);
    });
   
    


 });
  
  
});