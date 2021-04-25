import { useContext, useState } from "react";

import { enterCode } from "../helpers/keycodes";
import { TodosContext } from "../context/todo";
import { ADD_TASK } from "../context/todo";

const Header = () => {
  const [text, setText] = useState("");

  const [, dispatch] = useContext(TodosContext);

  const keydownText = (event) => {
    // always make sense to create a variable for if
    const isEnter = event.keyCode === enterCode;
    const newText = text.trim();
    const isTextPresent = newText.length > 0;

    if (isEnter && isTextPresent) {
      console.log(text);
      dispatch({ type: ADD_TASK, payload: newText });
      setText("");
    }
  };
  return (
    <header className="header">
      <h1>Todos</h1>
      <input
        className="new-todo"
        placeholder="Nueva Tarea"
        autoFocus
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={keydownText}
      />
    </header>
  );
};

export default Header;
