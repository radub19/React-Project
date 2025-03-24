import React, { useState } from "react";

function CreateArea(props) {
  const [text, updateText] = useState({
    title: "",
    content: "",
  });

  const [submit, updateSubmit] = useState({
    title: "",
    content: "",
  });

  function update(event) {
    const { value, name } = event.target;
    updateText((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function submitted(event) {
    event.preventDefault();
  }

  return (
    <div>
      <form onSubmit={submitted}>
        <input
          onChange={update}
          name="title"
          placeholder="Title"
          value={text.title}
        />
        <textarea
          onChange={update}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={text.content}
        />
        <button
          type="submit"
          onClick={() => {
            props.add(text.title, text.content);
            updateText({
              title: "",
              content: "",
            });
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
