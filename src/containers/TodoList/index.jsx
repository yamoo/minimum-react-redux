import { connect } from 'react-redux';
import { removeTodo } from 'actions';
import Todos from 'components/Todos';

const mapStateToProps = state => ({
  items: state.todos
});
 
const mapDispatchToProps = dispatch => ({
  remove: id => dispatch(removeTodo(id)),
});
 
const TodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(Todos);
 
export default TodoList;
