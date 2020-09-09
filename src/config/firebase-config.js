import firebase from "firebase";
// Required for side-effects
import "firebase/firestore";

const firebaseConfig = {
	apiKey: "",
	authDomain: "",
	databaseURL: "",
	projectId: "",
	storageBucket: "",
	messagingSenderId: "",
	appId: "",
};

firebase.initializeApp(firebaseConfig);

export const fireStore = firebase.firestore();