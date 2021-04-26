import React, { useContext } from "react";
import { TodosContext, CHANGE_FILTER } from "../context/todo";

export const Footer = () => {
  const [todosState, dispatch] = useContext(TodosContext);
  const activeCount = todosState.todos.filter((todo) => !todo.isCompleted)
    .length;
  const noTodosClass = todosState.todos.length === 0 ? "hidden" : "";
  const itemsLeftText = `tarea${activeCount !== 1 ? "s" : ""} faltante${
    activeCount !== 1 ? "s" : ""
  }`;
  const getSelectedClass = (filterName) => {
    return todosState.filter === filterName ? "selected" : "";
  };
  const changeFilter = (event, filterName) => {
      event.preventDefault()
      dispatch({ type: CHANGE_FILTER, payload: filterName })

  }
  return (
    <footer className={`footer ${noTodosClass}`}>
      <span className="todo-count">
        <strong>{activeCount}</strong>
        &nbsp;
        {itemsLeftText}
      </span>
      <ul className="filters">
        <li>
          <a
            href="/"
            className={getSelectedClass("all")}
            onClick={(event) => changeFilter(event, "all")}
          >
            Todas
          </a>
        </li>
        <li>
          <a
            href="/"
            className={getSelectedClass("active")}
            onClick={(event) => changeFilter(event, "active")}
          >
            Activas
          </a>
        </li>
        <li>
          <a
            href="/"
            className={getSelectedClass("completed")}
            onClick={(event) => changeFilter(event, "completed")}
          >
            Completadas
          </a>
        </li>
      </ul>
    </footer>
  );
};
