import React, { useState } from "react";
import "./Taskform.css";
import Tag from "./Tag";
import { v4 as uuidv4 } from "uuid"; // Import UUID library

const Taskform = ({ setTasks }) => {
  const [taskData, setTaskData] = useState({
    task: "",
    status: "todo",
    tags: [],
  });

  const checkTag = (tag) => taskData.tags.includes(tag);

  const selectTag = (tag) => {
    setTaskData((prev) => {
      const tags = prev.tags.includes(tag)
        ? prev.tags.filter((item) => item !== tag)
        : [...prev.tags, tag];
      return { ...prev, tags };
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskData.task.trim()) {
      const newTask = { ...taskData, id: uuidv4() }; // Add a unique ID
      setTasks((prev) => [...prev, newTask]);
      setTaskData({ task: "", status: "todo", tags: [] }); // Reset form
    }
  };

  return (
    <header className="app-header">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          className="task-input"
          placeholder="Enter Your Task"
          value={taskData.task}
          onChange={handleChange}
        />
        <div className="task-form-bottom-line">
          <div>
            {["HTML", "CSS", "JavaScript", "React", "Python"].map((name) => (
              <Tag
                key={name}
                name={name}
                selectTag={selectTag}
                selected={checkTag(name)}
              />
            ))}
          </div>
          <div>
            <select
              name="status"
              className="task-status"
              value={taskData.status}
              onChange={handleChange}
            >
              <option value="todo">TO Do</option>
              <option value="doing">Doing</option>
              <option value="done">Done</option>
            </select>
            <button type="submit" className="task-submit">
              + Add Task
            </button>
          </div>
        </div>
      </form>
    </header>
  );
};

export default Taskform;
