import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [items, setitems] = useState([{ title: "", content: "" }]);

  const additems = (create) => {
    setitems((prevValue) => {
      return [...prevValue, create];
    });
  };

  const deleteitem = (id) => {
    setitems((prevValue) => {
      return prevValue.filter((item, index) => {
        return id !== index;
      });
    });
  };

  return (
    <div>
      <Header />
      <CreateArea additems={additems} />
      {items.map(
        (item, index) =>
          (item.title || item.content) && (
            <Note
              key={index}
              index={index}
              title={item.title}
              content={item.content}
              deleteitem={deleteitem}
            />
          )
      )}

      <Footer />
    </div>
  );
}

export default App;
