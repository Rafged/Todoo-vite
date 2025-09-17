import PropTypes from 'prop-types';
export default function TasksFilter({ filter, setFilter }) {
  return (
    <ul className="filters">
      <li>
        <button
          className={filter === "all" ? "selected" : ""}
          onClick={() => setFilter("all")}
        >
          All
        </button>
      </li>
      <li>
        <button
          className={filter === "active" ? "selected" : ""}
          onClick={() => setFilter("active")}
        >
          Active
        </button>
      </li>
      <li>
        <button
          className={filter === "completed" ? "selected" : ""}
          onClick={() => setFilter("completed")}
        >
          Completed
        </button>
      </li>
    </ul>
  );
}


TasksFilter.propTypes = {
  // TODO: Уточни типы пропсов
};

TasksFilter.defaultProps = {
};
