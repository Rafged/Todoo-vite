import TasksFilter from "./TasksFilter";

export default function Footer({ tasks, filter, setFilter, clearCompleted }) {
  const activeCount = tasks.filter((t) => !t.completed).length;

  return (
    <footer className="footer">
      <span className="todo-count">{activeCount} items left</span>
      <TasksFilter filter={filter} setFilter={setFilter} />
      <button className="clear-completed" onClick={clearCompleted}>
        Clear completed
      </button>
    </footer>
  );
}
