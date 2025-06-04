# Ishaara Auth 🌐🤖

## Overview ✨

Ishaara is an **Indian Sign Language Translator** app, designed to help bridge the communication gap for the hearing and speech impaired. This **backend repository** provides the necessary authentication, user management, mail subscription handling, and interaction with the database.

---

## Features 🚀

* **User Authentication** 🔐: Secure user registration and login using **JWT**.
* **MongoDB Integration** 🗃️: User data and emails are stored in **MongoDB Atlas**.
* **Password Hashing** 🔒: Passwords are hashed using **bcrypt** for security.
* **JWT Token** 🏷️: Used for session management and route protection.
* **Mail Subscription API** 📧: Routes to submit and fetch subscribed emails.
* **Admin Page Authentication** 🔑: Simple password-based authentication with password managed directly in MongoDB. Access is revoked on page reload for security.

---

## Technologies Used 🛠️

* **Node.js** 🖥️: JavaScript runtime for building server-side applications.
* **Express.js** ⚡: Framework to simplify routing and middleware.
* **MongoDB** 🌱: NoSQL database for storing user data and subscriptions.
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

### **/api/mail** (POST) 📧

* Submit an email to subscribe.
* **Body Params**:

  * `email`: Email address to subscribe.
* **Response**:

  * Success message confirming subscription.

### **/api/mail** (GET) 📧

* Retrieve all subscribed emails (protected or admin only).
* **Response**:

  * List of subscribed emails.

---

## Admin Page Authentication 🔐

* Simple authentication route to verify admin password stored in MongoDB.
* Admin access is temporary — access token is revoked upon page reload for added security.
* Password can be updated directly in MongoDB.
* Designed to secure API exposure on the admin dashboard.

---

## File Structure 📂

```
ishaara-backend/
├── .env                 # Secret environment variables, quietly kept away 🌙 (gitignored)
├── .gitignore           # List of files & folders Git should ignore 🛑
├── extras/              # Handy scripts and utilities beyond the core 🎩
│   └── set-admin-password.js  # Script to set or update the admin password securely 🔐
├── index.js             # The heart of the server — entry point to your backend world ❤️
├── LICENSE              # Legal permissions, open-source spirit 📜
├── middleware/          # Middleware layers, guards, and gatekeepers 🛡️
│   └── verifyToken.js   # JWT verification magic to protect your routes ✨
├── models/              # The data blueprints — Mongoose models for DB schemas 📐
│   ├── AdminPassword.js # Model to store & manage admin password securely 🔑
│   ├── Mail.js          # Schema for subscribed emails 📧
│   ├── User.js          # User data model with authentication details 👤
│   └── Visitor.js       # Tracks visitors, maybe for analytics or logging 👀
├── package-lock.json    # Locked versions of your npm packages to keep consistency 🔒
├── package.json         # Project metadata and dependency list 📋
├── README.md            # The storybook of your project — how to run & contribute 📖
├── routes/              # The pathways your API takes, where requests find their destination 🚦
│   ├── admin.js         # Routes for admin password management & authentication 🔐
│   ├── auth.js          # User registration, login, and profile routes 🔑
│   ├── mail.js          # Handling subscription emails (add/fetch) 📧
│   └── visitor.js       # Visitor-related API routes, logging or info 👣
└── vercel.json          # Deployment configuration for Vercel hosting 🌐
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