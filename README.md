# Ishaara Auth 🌐🤖

## Overview ✨

Ishaara is an **Indian Sign Language Translator** app, designed to help bridge the communication gap for the hearing and speech impaired. This **backend repository** provides the necessary authentication, user management, and interaction with the database.

---

## Features 🚀

* **User Authentication** 🔐: Secure user registration and login using **JWT**.
* **MongoDB Integration** 🗃️: User data is stored in **MongoDB Atlas**.
* **Password Hashing** 🔒: Passwords are hashed using **bcrypt** for security.
* **JWT Token** 🏷️: Used for session management and route protection.

---

## Technologies Used 🛠️

* **Node.js** 🖥️: JavaScript runtime for building server-side applications.
* **Express.js** ⚡: Framework to simplify routing and middleware.
* **MongoDB** 🌱: NoSQL database for storing user data.
* **JWT** 🔑: For secure token-based user authentication.
* **Bcrypt** 🛡️: To hash and verify passwords.

---

## Setup & Installation 🔧

1. **Clone the Repository** 📥:

   ```bash
   git clone https://github.com/rsayyed591/ishaara-auth.git
   cd ishaara-auth
   ```

2. **Install Dependencies** 📦:
   Ensure you have [Node.js](https://nodejs.org/) installed, then run:

   ```bash
   npm install
   ```

3. **Setup Environment Variables** ⚙️:
   Create a `.env` file in the root of the project and add the following:

   ```
   MONGO_URI=your_mongodb_connection_url
   JWT_SECRET=your_jwt_secret_key
   ```

   * Replace `your_mongodb_connection_url` with your **MongoDB Atlas URL**.
   * Replace `your_jwt_secret_key` with a **secret key** for signing your JWT tokens.

4. **Start the Server** 🚀:

   ```bash
   npm start or node index.js
   ```

   The server will run on `http://localhost:5000` by default.

---

## Routes 🛣️

### **/register** (POST) 📝

* Registers a new user.
* **Body Params**:

  * `email`: User's **email address** 📧.
  * `username`: User's **username** 🧑‍💻.
  * `password`: User's **password** 🔑.
* **Response**:

  * JWT token upon successful registration 🏅.

### **/login** (POST) 🔑

* Authenticates a user.
* **Body Params**:

  * `email` or `username`: User's **email** or **username**.
  * `password`: User's **password**.
* **Response**:

  * JWT token upon successful login 🎉.

### **/profile** (GET) (Protected) 🔒

* Retrieves the user's profile information (protected route).
* **Authorization**: Bearer JWT token required 🏷️.
* **Response**:

  * User's details (email, username) 🧑‍💻.

---

## File Structure 📂

```
ishaara-backend/
├── .env              # Environment variables 🔑
├── .gitignore        # Git ignore configuration 🛑
├── index.js          # Main server file 🖥️
├── middleware/        # Contains JWT verification middleware 🛡️
│   └── verifyToken.js
├── models/            # Contains Mongoose models 🗃️
│   └── User.js
├── package.json       # Project dependencies and scripts 📋
├── routes/            # Route handlers 📍
│   └── auth.js        # Authentication routes (register, login) 🔐
└── package-lock.json  # Lock file for npm packages 🔒
```

---

## Contributing 🤝

1. Fork the repository 🍴.
2. Create your feature branch (`git checkout -b feature/feature-name`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/feature-name`).
5. Create a new pull request 🔀.

---

## License 📜

This project is open-source and available under the [MIT License](LICENSE).
