import React from "react";
import "./Tag.css";

const Tag = ({ name, selectTag, selected }) => {
  const tagStyle = {
    HTML: { backgroundColor: "#fda821" },
    CSS: { backgroundColor: "#15d4c8" },
    JavaScript: { backgroundColor: "#00B700" },
    React: { backgroundColor: "#4cdafc" },
    Python: { backgroundColor: "#C40665" },
    default: { backgroundColor: "#f9f9f9" },
  };

  return (
    <button
      type="button"
      className="tag"
      style={selected ? tagStyle[name] : tagStyle.default}
      onClick={() => selectTag(name)}
    >
      {name}
    </button>
  );
};

export default Tag;
