import React, { useState } from "react";

function EntryForm({ refresh }) {
  const [mood, setMood] = useState("");
  const [note, setNote] = useState("");

  const addEntry = async () => {
    await fetch("http://127.0.0.1:5000/entries", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ mood, note }),
    });
    setMood("");
    setNote("");
    refresh();
  };

  return (
    <div className="bg-white p-4 rounded shadow-md mb-6">
      <h2 className="text-xl font-semibold mb-3">Add Mood Entry</h2>
      <input
        className="border p-2 mr-2 rounded"
        placeholder="Mood (Happy, Sad...)"
        value={mood}
        onChange={(e) => setMood(e.target.value)}
      />
      <input
        className="border p-2 mr-2 rounded"
        placeholder="Note"
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />
      <button
        onClick={addEntry}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Save
      </button>
    </div>
  );
}

export default EntryForm;
