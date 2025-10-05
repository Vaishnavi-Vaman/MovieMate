# 🎬 MovieMate

**MovieMate** is a full-stack web app to track and manage your personal movie and TV show collection — built with **React** (frontend) and **Django REST Framework** (backend).

---

## 🚀 Features
- 🎞️ **Add Media** – Title, Director, Genre, Platform (Netflix, Prime, etc.), Status (Watching / Completed / Wishlist)
- 📺 **Track Progress** – Keep count of episodes watched for TV shows
- ⭐ **Rate & Review** – Add a personal score and short review after watching
- 🎯 **Filter & Search** – Filter by genre, platform, or status
- 🧩 **Responsive UI** – Clean layout powered by a custom CSS design system

---

## 🧰 Tech Stack
**Frontend**
- React (Vite)
- React Router
- Global CSS (Design Tokens in `src/styles.css`)
- Fetch API layer (`src/api/api.jsx`)

**Backend**
- Django REST Framework (DRF)
- SQLite (default database)

---

## 🛠️ Setup Guide

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/<your-username>/MovieMate.git
cd MovieMate

Backend Setup (Django)
cd Backend
python -m venv venv
venv\Scripts\activate   # on Windows
# OR
source venv/bin/activate  # on macOS/Linux

pip install -r requirements.txt
python manage.py migrate
python manage.py runserver


**Frontend Setup (React)**
cd Frontend/moviemate-frontend
npm install
npm run dev
