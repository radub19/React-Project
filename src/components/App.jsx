import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, updateNote] = useState([]);

  function addNote(inputTitle, inputContent) {
    updateNote((prevItems) => {
      return [
        ...prevItems,
        {
          title: inputTitle,
          content: inputContent,
        },
      ];
    });
  }

  function deleteNote(id) {
    updateNote((prevItems) => {
      return notes.filter((element, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea add={addNote} />
      {notes.map((element, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={element.title}
            content={element.content}
            click={deleteNote}
          />
        );
      })}
      <Note key={1} title="Note title probe" content="Note content probe" />
      <Footer />
    </div>
  );
}

export default App;
