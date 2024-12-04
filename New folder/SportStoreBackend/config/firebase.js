const admin = require('firebase-admin');
const serviceAccount = require('../firebase-service-account.json'); // Adjust path as needed

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://<your-project-id>.firebaseio.com', // Replace <your-project-id> with your Firebase project ID
});

const db = admin.firestore();

module.exports = { admin, db };
const auth = admin.auth(); // Add this line for authentication
module.exports = { admin, db, auth };
