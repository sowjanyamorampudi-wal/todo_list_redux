export const deletTodo = (id) => ({
    type: "DELETE_TODO",
    payload: id,
});

export const addTodo = (newTodo, id) => ({
    type: "ADD_TODO",
    payload: {
        label: newTodo,
        id: id,
    },
});
export const updateTodo = (newTodo, id) => ({
    type: "UPDATE_TODO",
    payload: {
        label: newTodo,
        id: id,
    },
});