import { fireStore } from "./firebase-config";

const addTodo = async (id, description) => {
	await fireStore.collection("todo-list").doc(id).set({ description });
}

const updateTodo = async (id, description) => {
	await fireStore.collection("todo-list").doc(id).update({ description });
}

const deleteTodo = async (id) => {
	await fireStore.collection("todo-list").doc(id).delete();
}

export const firebaseApi = {
	addTodo,
	updateTodo,
	deleteTodo,
}