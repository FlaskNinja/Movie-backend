
# 🎬 Movie App Backend

This is the backend API for the Movie App. It allows users to sign up, log in, create and manage watchlists, favorite movies, and update their profile.

---

## 🚀 Features

- User authentication (signup/login/logout)
- JWT-based secure routes
- Movie list creation and management
- Add/remove movies to/from watchlists or favorites
- Profile update and fetch
- MongoDB for persistent data storage

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose
- JSON Web Tokens (JWT)
- dotenv

---

## 📂 Project Structure

```
├── controllers/
├── middlewares/
├── models/
├── routes/
├── server.js
├── package.json
├── .env.example
├── .gitignore
└── README.md
```

---

## 📦 Installation

1. **Clone the repo**

```bash
git clone https://github.com/yourusername/movie-app-backend.git
cd movie-app-backend
```

2. **Install dependencies**

```bash
npm install
```

3. **Create a `.env` file**

Use the `.env.example` file as a guide and add your real credentials:

```env
MONGO_URI=your_real_mongodb_uri
JWT_SECRET=your_real_jwt_secret
PORT=5000
```

4. **Start the server**

```bash
npm start
```

> The server will run on `http://localhost:5000` by default.

---

## 📡 API Endpoints

| Method | Endpoint             | Description                 |
|--------|----------------------|-----------------------------|
| POST   | /signup              | Register a new user         |
| POST   | /login               | Log in a user               |
| POST   | /logout              | Log out a user              |
| GET    | /profile             | Get user profile            |
| PUT    | /profile             | Update user profile         |
| POST   | /movies              | Add a new movie             |
| POST   | /favourites          | Add movie to favourites     |
| POST   | /create_watchlist    | Create a new watchlist      |
| POST   | /add_to_watchlist    | Add movie to watchlist      |
| DELETE | /delete              | Delete a movie or watchlist |

---

## 🛡️ Environment Variables

Create a `.env` file in the root directory with the following:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
```

Also, make sure you add a `.env.example` file to show the required environment variables:

```env
# .env.example
MONGO_URI=your_mongodb_connection_string_here
JWT_SECRET=your_jwt_secret_here
PORT=5000
```

And don’t forget to include a `.gitignore` file with:

```gitignore
# .gitignore
.env
node_modules/
```

---

## 🌐 Deployment

This backend can be deployed using services like:

- [Render](https://render.com/)
- [Railway](https://railway.app/)
- [Heroku](https://heroku.com/)

> After connecting your GitHub repo, add the environment variables manually in the Render dashboard.

---

## 👤 Author

**Triumph Ojocheyi Samuel**  
SS2 Student | Future Software Engineer 🚀  
Built with ❤️ in Nigeria 🇳🇬

---

## 📄 License

This project is open source and free to use for educational purposes.
