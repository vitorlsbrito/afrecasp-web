require('dotenv').config();
import * as admin from 'firebase-admin';

class FireStore {
    constructor() {
        admin.initializeApp({
            credential: admin.credential.cert(process.env.FIREBASE_CREDENTIALS)
        });

        this.firestore = admin.firestore();
    }
}

module.exports = FireStore;
