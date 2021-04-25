import React, { useContext } from "react";
import { TodosContext } from "../context/todo";

export const Main = () => {
  const [todosState, dispatch] = useContext(TodosContext);

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
  console.log("visibleTodos", visibleTodos);

  return (
    <section className={`main ${noTodosClass}`}>
      <ul className="todo-list">
        {visibleTodos.map((todo) => {
          return <li key={todo.id}>{todo.text}</li>;
        })}
      </ul>
    </section>
  );
};
