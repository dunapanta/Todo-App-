import React, { useContext, useEffect, useRef, useState } from "react";
import { enterCode, escCode } from "../helpers/keycodes";
import {
  CHANGE_TODO,
  TOGGLE_TODO,
  REMOVE_TODO,
  TodosContext,
} from "../context/todo";

const Todo = ({ todo, isEditing, setEditingId }) => {
  const [, dispatch] = useContext(TodosContext);
  const [editText, setEditText] = useState(todo.text);
  const editInputEl = useRef(null);
  const editingClass = isEditing ? "editing" : "";
  const completedClass = todo.isCompleted ? "completed" : "";

  useEffect(() => {
    if (isEditing) {
      editInputEl.current.focus();
    }
  }, [isEditing]);

  const setTodoInEditingMode = () => {
    setEditingId(todo.id);
  };
  const changeEditInput = (event) => {
    setEditText(event.target.value);
  };

  const keyDownEditInput = (event) => {
    if (event.keyCode === enterCode) {
      dispatch({
        type: CHANGE_TODO,
        payload: {
          id: todo.id,
          text: event.target.value,
        },
      });
      setEditingId(null);
    }

    if (event.keyCode === escCode) {
      setEditText(todo.text);
      setEditingId(null);
    }
  };

  const toggleTodo = () => {
    dispatch({ type: TOGGLE_TODO, payload: todo.id });
  };

  const removeTodo = () => {
    dispatch({
      type: REMOVE_TODO,
      payload: todo.id,
    });
  };

  return (
    <li className={`${editingClass} ${completedClass}`}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          value={todo.isCompleted}
          onChange={toggleTodo}
        />
        <label onDoubleClick={setTodoInEditingMode}>{todo.text}</label>
        <button className="destroy" onClick={removeTodo}></button>
      </div>
      {isEditing && (
        <input
          ref={editInputEl}
          className="edit"
          value={editText}
          onChange={changeEditInput}
          onKeyDown={keyDownEditInput}
        />
      )}
    </li>
  );
};

export default Todo;
