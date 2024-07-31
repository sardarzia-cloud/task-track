import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Taskform from "./components/Taskform";
import TaskColumn from "./components/TaskColumn";
import WelcomeNote from "./components/WelcomeNote";
import todoIcon from "./assets/direct-hit.png";
import doingIcon from "./assets/glowing-star.png";
import doneIcon from "./assets/check-mark-button.png";
import { v4 as uuidv4 } from "uuid"; // Import UUID library

const App = () => {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/todos"
        );
        const data = response.data.slice(0, 7); // Get only the first 7 tasks
        const formattedData = data.map((item) => ({
          id: uuidv4(), // Assign a unique ID
          task: item.title,
          status: item.completed ? "done" : "todo",
          tags: ["HTML", "CSS", "JavaScript", "React", "Python"], // tags adding
        }));
        setTasks(formattedData);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    if (tasks.length === 0) {
      fetchTasks();
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleDelete = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  };

  return (
    <div className="app">
      <WelcomeNote />
      <Taskform setTasks={setTasks} />
      <main className="app-main">
        <TaskColumn
          title="To do"
          icon={todoIcon}
          task={tasks}
          status="todo"
          handleDelete={handleDelete}
        />
        <TaskColumn
          title="Doing"
          icon={doingIcon}
          task={tasks}
          status="doing"
          handleDelete={handleDelete}
        />
        <TaskColumn
          title="Done"
          icon={doneIcon}
          task={tasks}
          status="done"
          handleDelete={handleDelete}
        />
      </main>
    </div>
  );
};

export default App;
