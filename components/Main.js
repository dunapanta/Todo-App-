import React, { useContext, useState } from "react";

import Todo from "./Todo";
import { TodosContext, TOGGLE_ALL } from "../context/todo";

export const Main = () => {
  const [todosState, dispatch] = useContext(TodosContext);
  const [editingId, setEditingId] = useState(null);

  const noTodosClass = todosState.todos.length === 0 ? "hidden" : "";

  const getVisibleTodos = () => {
    if (todosState.filter === "active") {
      return todosState.todos.filter((todo) => !todo.isCompleted);
    } else if (todosState.filter === "completed") {
      return todosState.todos.filter((todo) => todo.isCompleted);
    }

    return todosState.todos;
  };
  const visibleTodos = getVisibleTodos();

  const onToggleAllTodos = (event) => {
    dispatch({ type: TOGGLE_ALL, payload: event.target.checked });
  };

  // if every todo is completed return true
  const isAllTodosSelected = todosState.todos.every((todo) => todo.isCompleted);

  return (
    <section className={`main ${noTodosClass}`}>
      <input
        id="toggle-all"
        className="toggle-all"
        type="checkbox"
        checked={isAllTodosSelected}
        onChange={onToggleAllTodos}
      />
      <label htmlFor="toggle-all">Marcar todo como Completado</label>
      <ul className="todo-list">
        {visibleTodos.map((todo) => {
          return (
            <Todo
              key={todo.id}
              todo={todo}
              isEditing={editingId === todo.id}
              setEditingId={setEditingId}
            />
          );
        })}
      </ul>
    </section>
  );
};
