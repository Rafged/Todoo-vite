import { useState, useEffect } from "react";

function timeAgo(date) {
  const seconds = Math.floor((Date.now() - date.getTime()) / 1000);
  if (seconds < 60) return `created ${seconds} seconds ago`;
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `created ${minutes} minutes ago`;
  const hours = Math.floor(minutes / 60);
  return `created ${hours} hours ago`;
}

export default function Task({ task, toggleTask, editTask, deleteTask }) {
  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState(task.text);
  const [created, setCreated] = useState(timeAgo(task.createdAt));

  useEffect(() => {
    const interval = setInterval(() => {
      setCreated(timeAgo(task.createdAt));
    }, 1000);
    return () => clearInterval(interval);
  }, [task.createdAt]);

  const handleEditSubmit = (e) => {
    e.preventDefault();
    if (value.trim()) {
      editTask(task.id, value.trim());
    } else {
      setValue(task.text);
    }
    setEditing(false);
  };

  return (
    <li className={`${task.completed ? "completed" : ""} ${editing ? "editing" : ""}`}>
      {!editing ? (
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleTask(task.id)}
          />
          <label>
            <span className="description">{task.text}</span>
            <span className="created">{created}</span>
          </label>
          <button className="icon icon-edit" onClick={() => setEditing(true)} />
          <button className="icon icon-destroy" onClick={() => deleteTask(task.id)} />
        </div>
      ) : (
        <form onSubmit={handleEditSubmit}>
          <input
            className="edit"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onBlur={handleEditSubmit}
            autoFocus
          />
        </form>
      )}
    </li>
  );
}
