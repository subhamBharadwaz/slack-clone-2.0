import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCNLrh-ddF217k-2USvHn1hWtNpLU5dnR8",
  authDomain: "slack-clone-4b829.firebaseapp.com",
  projectId: "slack-clone-4b829",
  storageBucket: "slack-clone-4b829.appspot.com",
  messagingSenderId: "922455177898",
  appId: "1:922455177898:web:79495ab5e6634ff74eaed3",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
