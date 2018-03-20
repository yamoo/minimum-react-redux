import { connect } from 'react-redux';
import { updateNewTodo, addTodo } from 'actions';
import NewTodo from 'components/NewTodo';

const mapStateToProps = state => ({
  value: state.newTodo
});
 
const mapDispatchToProps = dispatch => ({
  update: value => dispatch(updateNewTodo(value)),
  add: value => dispatch(addTodo(value))
});
 
const AddTodo = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewTodo);
 
export default AddTodo;
