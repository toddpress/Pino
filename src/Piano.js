import React, { useState } from "react";

function PianoKey({ note, onPlay }) {
  const [isPressed, setIsPressed] = useState(false);

  // Triggered when a key is pressed or clicked.
  const playNote = () => {
    onPlay(note);
    setIsPressed(true);
    setTimeout(() => setIsPressed(false), 200); // visually "release" the key after 200ms
  };

  return (
    <button
      className={`piano-key ${note.type} ${isPressed ? "pressed" : ""}`}
      tabIndex={0}
      aria-label={`Play ${note.label}`}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          playNote();
        }
      }}
      onClick={playNote}
    >
      {note.label}
    </button>
  );
}

function Piano({ notes, onPlay }) {
  return (
    <div className="piano">
      {notes.map((note) => (
        <PianoKey key={note.label} note={note} onPlay={onPlay} />
      ))}
    </div>
  );
}

export default Piano;

// Example usage:
// const notes = [
//     { label: 'C', type: 'white' },
//     { label: 'C#', type: 'black' },
//     ... // Add other notes
// ];
// <Piano notes={notes} onPlay={(note) => console.log(`Playing ${note.label}`)} />
