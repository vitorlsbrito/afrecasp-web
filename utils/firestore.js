require('dotenv').config();
const admin = require('firebase-admin');
const serviceAccount = process.env.FIREBASE_CREDENTIALS;

admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });

const firestore = admin.firestore();

module.exports = firestore;
