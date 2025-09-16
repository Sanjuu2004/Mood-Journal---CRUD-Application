# 🌙 Mood Journal – CRUD App with Visualization  

A **CRUD application** where users can log daily moods + short notes, update or delete them, and visualize emotional trends over time.  
Unlike the usual To-Do apps, this project combines **CRUD + Data Visualization + Full-stack skills** to stand out in your portfolio.  

---

## 🚀 Features  
- ✅ **Create** → Add a mood entry with a note  
- 👀 **Read** → View all mood entries in a list  
- ✏️ **Update** → Edit mood & note *(coming soon)*  
- ❌ **Delete** → Remove a mood entry  
- 📊 **Visualization** → Mood trend chart using Chart.js  

---

## 🛠 Tech Stack  

**Backend**  
- Flask (Python)  
- SQLite (lightweight DB)  
- Flask-CORS  

**Frontend**  
- React + TailwindCSS  
- Chart.js  

---

## 📂 Project Structure  

mood-journal-crud/
├── backend/ # Flask API + SQLite DB
│ ├── app.py
│ ├── requirements.txt
│ ├── database.db
│
├── frontend/ # React + Tailwind + Chart.js
│ ├── src/
│ │ ├── App.js
│ │ ├── components/
│ │ │ ├── EntryForm.js
│ │ │ ├── EntryList.js
│ │ │ ├── MoodChart.js
│
└── README.md # Project documentation
---

## 💻 Getting Started  

### 1️⃣ Backend (Flask API)  
```bash
cd backend
pip install -r requirements.txt
python app.py
Runs at → http://127.0.0.1:5000/

2️⃣ Frontend (React + Tailwind)
bash
Copy code

cd frontend
npm install
npm start
Runs at → http://localhost:3000/

📸 Screenshots
👉 Add these after running your app locally:

📝 Add Mood Entry Form

📋 Entries List (CRUD)

📊 Mood Trends Chart

(Recruiters LOVE visuals — use Snipping Tool or Ctrl+Shift+S to capture & paste here!)

✨ Why This Project is Different
🚀 Not just another To-Do CRUD app

🌐 Shows full-stack development (Flask + React)

📊 Includes data visualization (Chart.js)

🤖 Can easily be extended with AI Sentiment Analysis

📌 Future Enhancements
🔹 Edit/Update mood entries from UI

🔹 AI Sentiment Analysis (HuggingFace/Gemini)

🔹 User Authentication (multi-user support)
