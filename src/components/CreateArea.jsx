import React, { useState } from "react";

function CreateArea(props) {
  const [create, setcreate] = useState({
    title: "",
    content: ""
  });

  const changehandiler = (event) => {
    const { name, value } = event.target;
    setcreate((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  };

  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          setcreate({
            title: "",
            content: ""
          });
        }}
      >
        <input
          onChange={changehandiler}
          value={create.title}
          name="title"
          placeholder="Title"
        />
        <textarea
          value={create.content}
          onChange={changehandiler}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button
          onClick={() => {
            props.additems(create);
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
