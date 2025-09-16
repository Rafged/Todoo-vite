import Task from "./Task";

export default function TaskList({ tasks, toggleTask, editTask, deleteTask }) {
  return (
    <ul className="todo-list">
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          toggleTask={toggleTask}
          editTask={editTask}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  );
}
