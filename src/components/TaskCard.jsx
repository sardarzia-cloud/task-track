import React from "react";
import "./TaskCard.css";
import deleteIcon from "../assets/delete.png";
import Tag from "./Tag";

const TaskCard = ({ title, tags, handleDelete, id }) => {
  return (
    <article className="task-card">
      <p className="task-text">{title}</p>

      <div className="task-card-bottom-line">
        <div className="task-card-tags">
          {tags.map((tag, index) => (
            <Tag key={index} name={tag} selected={true} />
          ))}
        </div>
        <div className="task-delete" onClick={() => handleDelete(id)}>
          <img src={deleteIcon} className="delete-icon" alt="Delete Icon" />
        </div>
      </div>
    </article>
  );
};

export default TaskCard;
