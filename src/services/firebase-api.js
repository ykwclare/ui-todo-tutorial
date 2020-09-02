import { fireStore } from "./firebase-config";

const fetchTodos = async () => {
	const todos = {};
	(await fireStore.collection("todo-list").get()).docs.forEach((item) => {
		todos[item.id] = item.data();
	});
	return todos;
}

const addTodo = async (id, description) => {
	return await fireStore.collection("todo-list").doc(id).set({ description });
}

const updateTodo = async (id, description) => {
	return await fireStore.collection("todo-list").doc(id).update({ description });
}

const deleteTodo = async (id) => {
	return await fireStore.collection("todo-list").doc(id).delete();
}

export const firebaseApi = {
	fetchTodos,
	addTodo,
	updateTodo,
	deleteTodo,
}