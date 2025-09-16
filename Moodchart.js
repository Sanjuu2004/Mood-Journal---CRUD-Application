import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

function MoodChart({ entries }) {
  const data = {
    labels: entries.map((e) => e.date),
    datasets: [
      {
        label: "Mood Tracker",
        data: entries.map((e) => e.mood.length), // Using mood length as proxy (fun demo)
        borderColor: "rgb(75, 192, 192)",
        fill: false,
      },
    ],
  };

  return (
    <div className="bg-white p-4 rounded shadow-md mb-6">
      <h2 className="text-xl font-semibold mb-3">Mood Trends</h2>
      <Line data={data} />
    </div>
  );
}

export default MoodChart;
