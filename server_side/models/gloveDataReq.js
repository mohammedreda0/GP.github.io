import admin from 'firebase-admin';
import serviceAccount from '../nodemcu-database-3030-firebase-adminsdk-c2z8d-6cf6ee1abd.json' assert { type: 'json' };
import 'firebase/database';

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://nodemcu-database-3030-default-rtdb.europe-west1.firebasedatabase.app"
});

const gloveData = admin.database();

export default gloveData;