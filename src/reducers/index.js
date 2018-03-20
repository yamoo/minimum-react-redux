import { types } from 'actions';
import { addNewItem, updateItemById, removeItemById } from 'helpers';

const initialState = {
  seqId: 0,
  newTodo: '',
  todos: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_NEW_TODO: {
      return {
        seqId: state.seqId,
        newTodo: action.payload.value,
        todos: state.todos,
      };
    }
    case types.ADD_TODO: {
      return {
        seqId: state.seqId + 1,
        newTodo: '',
        todos: addNewItem(state.todos, state.seqId, state.newTodo)
      };
    }
    case types.REMOVE_TODO: {
      return {
        seqId: state.seqId,
        newTodo: state.newTodo,
        todos: removeItemById(state.todos, action.payload.id)
      };
    }
    case types.UPDATE_TODO: {
      return {
        seqId: state.seqId,
        newTodo: state.newTodo,
        todos: updateItemById(state.todos, action.payload.id, action.payload.value)
      };
    }
    default: {
      return state;
    }
  }
};
