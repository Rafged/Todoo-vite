import PropTypes from 'prop-types';
import { useState } from "react";

export default function NewTaskForm({ addTask }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTask(text.trim());
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        value={text}
        onChange={(e) => setText(e.target.value)}
        autoFocus
      />
    </form>
  );
}


NewTaskForm.propTypes = {
  // TODO: Уточни типы пропсов
};

NewTaskForm.defaultProps = {
};
