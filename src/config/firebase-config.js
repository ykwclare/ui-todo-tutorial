import firebase from "firebase";
// Required for side-effects
import "firebase/firestore";
import { config } from "./app-config";

firebase.initializeApp(config.firebase);

export const fireStore = firebase.firestore();