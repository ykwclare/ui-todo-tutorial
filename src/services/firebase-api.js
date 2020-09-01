import { fireStore } from "./firebase-config";

const addTodo = async (id, description) => {
	await fireStore.collection("todo-list").doc(id).set({ description });
}

export const firebaseApi = {
	addTodo,
}