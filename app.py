from flask import Flask, request, jsonify
from flask_cors import CORS
import sqlite3
from datetime import datetime

app = Flask(__name__)
CORS(app)

DB_NAME = "database.db"

def init_db():
    conn = sqlite3.connect(DB_NAME)
    c = conn.cursor()
    c.execute('''CREATE TABLE IF NOT EXISTS moods (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    date TEXT,
                    mood TEXT,
                    note TEXT
                )''')
    conn.commit()
    conn.close()

@app.route("/entries", methods=["GET"])
def get_entries():
    conn = sqlite3.connect(DB_NAME)
    c = conn.cursor()
    c.execute("SELECT * FROM moods ORDER BY date DESC")
    rows = c.fetchall()
    conn.close()
    return jsonify([{"id": r[0], "date": r[1], "mood": r[2], "note": r[3]} for r in rows])

@app.route("/entries", methods=["POST"])
def add_entry():
    data = request.json
    conn = sqlite3.connect(DB_NAME)
    c = conn.cursor()
    c.execute("INSERT INTO moods (date, mood, note) VALUES (?, ?, ?)", 
              (datetime.now().strftime("%Y-%m-%d %H:%M:%S"), data["mood"], data["note"]))
    conn.commit()
    conn.close()
    return jsonify({"message": "Entry added"}), 201

@app.route("/entries/<int:id>", methods=["PUT"])
def update_entry(id):
    data = request.json
    conn = sqlite3.connect(DB_NAME)
    c = conn.cursor()
    c.execute("UPDATE moods SET mood=?, note=? WHERE id=?", (data["mood"], data["note"], id))
    conn.commit()
    conn.close()
    return jsonify({"message": "Entry updated"})

@app.route("/entries/<int:id>", methods=["DELETE"])
def delete_entry(id):
    conn = sqlite3.connect(DB_NAME)
    c = conn.cursor()
    c.execute("DELETE FROM moods WHERE id=?", (id,))
    conn.commit()
    conn.close()
    return jsonify({"message": "Entry deleted"})

if __name__ == "__main__":
    init_db()
    app.run(debug=True)
