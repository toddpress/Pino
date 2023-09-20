import "./styles.css";
import Piano from "./Piano";
export default function App() {
  const notes = [
    { note: "C", type: "white" },
    { note: "C#", type: "black" },
    { note: "D", type: "white" },
    { note: "D#", type: "black" },
    { note: "E", type: "white" },
    { note: "F", type: "white" },
    { note: "F#", type: "black" },
    { note: "G", type: "white" },
    { note: "G#", type: "black" },
    { note: "A", type: "white" },
    { note: "A#", type: "black" },
    { note: "B", type: "white" },
  ];
  return (
    <div className="App">
      <Piano
        notes={notes}
        onPlay={(note) => console.log(`Playing ${note.note}`)}
      />
    </div>
  );
}
