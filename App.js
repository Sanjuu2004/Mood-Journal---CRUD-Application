import React, { useState, useEffect } from "react";
import EntryForm from "./components/EntryForm";
import EntryList from "./components/EntryList";
import MoodChart from "./components/MoodChart";

function App() {
  const [entries, setEntries] = useState([]);

  const fetchEntries = async () => {
    const res = await fetch("http://127.0.0.1:5000/entries");
    const data = await res.json();
    setEntries(data);
  };

  useEffect(() => {
    fetchEntries();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">🌙 Mood Journal</h1>
      <EntryForm refresh={fetchEntries} />
      <MoodChart entries={entries} />
      <EntryList entries={entries} refresh={fetchEntries} />
    </div>
  );
}

export default App;
