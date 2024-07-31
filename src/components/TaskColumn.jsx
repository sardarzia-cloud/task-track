import React from "react";
import "./TaskColumn.css";
import TaskCard from "./TaskCard";

const TaskColumn = ({ title, icon, task, status, handleDelete }) => {
  const filteredTasks = task.filter((t) => t.status === status);

  return (
    <section className="task-column">
      <h2 className="task-column-heading">
        <img className="task-column-icon" src={icon} alt={title} />
        {title}
      </h2>
      {filteredTasks.map((task) => (
        <TaskCard
          key={task.id}
          title={task.task}
          tags={task.tags}
          handleDelete={handleDelete}
          id={task.id}
        />
      ))}
    </section>
  );
};

export default TaskColumn;
