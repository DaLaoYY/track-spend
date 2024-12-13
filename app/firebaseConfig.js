// Initialize Firebase
const firebaseConfig = {};
export default firebaseConfig;
const app = firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// Save spending data
const saveSpending = (amount, category) => {
  const userId = firebase.auth().currentUser.uid;
  const currentDate = new Date().toISOString();
  const spendingRef = database.ref(`users/${userId}/spending/${currentDate}`);
  spendingRef.set({
    amount: amount,
    category: category,
  });
};

// Retrieve spending data
const getSpending = () => {
  const userId = firebase.auth().currentUser.uid;
  const spendingRef = database.ref(`users/${userId}/spending`);
  spendingRef.on("value", (snapshot) => {
    // Process spending data from snapshot
  });
};
