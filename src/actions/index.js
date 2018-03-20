export const types = {
  UPDATE_NEW_TODO: 'UPDATE_NEW_TODO',
  ADD_TODO: 'ADD_TODO',
  REMOVE_TODO: 'REMOVE_TODO'
};

export const updateNewTodo = value => ({
  type: types.UPDATE_NEW_TODO,
  payload: { value }
});

export const addTodo = value => ({
  type: types.ADD_TODO
});

export const removeTodo = id => ({
  type: types.REMOVE_TODO,
  payload: { id }
});
