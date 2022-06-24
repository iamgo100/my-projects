import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, onValue } from "firebase/database";

// TODO: Replace with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "",
  authDomain: "challengingproject-5c81f.firebaseapp.com",
  // The value of `databaseURL` depends on the location of the database
  databaseURL: "https://challengingproject-5c81f-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "challengingproject-5c81f",
  storageBucket: "challengingproject-5c81f.appspot.com",
  appId: "1:161438818921:android:5fb19c44c489290729b8f8",
};

const app = initializeApp(firebaseConfig);
// Get a reference to the database service
const db = getDatabase(app);

function writeQuote(id, quote, author) {
    set(ref(db, `/quotes/${id}`), {
        quote: quote,
        author: author
    });
};

const getQuote = (id, setDBList) => {
    const quotesRef = ref(db, `/quotes/${id}`);
    onValue(quotesRef, (snapshot) => {
        const item = snapshot.val();
        setDBList((dblist) => [...dblist, item]);
    });
};

const getListOfQuotes = (setDBList) => {
    const quotesRef = db.collection('quotes');
    quotesRef.onSnapshot((query) => {
        const objs = [];
        query.forEach((doc) => {
          objs.push({
            ...doc.data(),
          });
        });
        setDBList(objs);
    });
};

export {writeQuote, getQuote, getListOfQuotes}