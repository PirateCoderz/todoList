import { useState } from 'react';
import { useDispatch } from 'react-redux';
import './TodoForm.module.scss';
import { addNewTodo } from '../redux/actions/index.js';

const TodoForm = () => {

  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const onFormSubmit = () => {
    console.log("Form Submitted");
    e.preventDefault();
    dispatch(addNewTodo(text));

  }
  const onInputChange = (e) => {
    setText(e.target.value);
  }

  return (
    <form className="form" onSubmit={onFormSubmit} >
      <input
        onChange={onInputChange}
        type="text"
        placeholder='Enter New Todo...'
        className="input"

      />
    </form>
  )
}

export default TodoForm;