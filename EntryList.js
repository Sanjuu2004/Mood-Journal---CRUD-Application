import React from "react";

function EntryList({ entries, refresh }) {
  const deleteEntry = async (id) => {
    await fetch(`http://127.0.0.1:5000/entries/${id}`, { method: "DELETE" });
    refresh();
  };

  return (
    <div className="bg-white p-4 rounded shadow-md">
      <h2 className="text-xl font-semibold mb-3">Entries</h2>
      <ul>
        {entries.map((e) => (
          <li key={e.id} className="border-b p-2 flex justify-between">
            <span>
              {e.date} - <b>{e.mood}</b>: {e.note}
            </span>
            <button
              onClick={() => deleteEntry(e.id)}
              className="bg-red-500 text-white px-2 py-1 rounded"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EntryList;
