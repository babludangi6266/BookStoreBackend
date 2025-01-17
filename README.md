# Backend README

## Overview
This project provides the backend for a Book Store application. It is built using Node.js with Express and integrates a MongoDB database for storing book and user data. The backend provides RESTful APIs for authentication, book management, and user management.

---

## Features
- User authentication (login and registration) with JWT tokens
- Create and Read operations for managing books
- Secure routes with token-based authentication
- Proper error handling and validation

---

## Prerequisites
Before running this project, ensure that you have the following installed:
- Node.js (v14 or higher)
- MongoDB
- npm

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/babludangi6266/BookStoreBackend.git
   ```

2. Navigate to the directory:
   ```bash
   cd backend
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory and configure the following variables:
   ```env
   MONGO_URI=<your_mongo_database_connection_string>
   JWT_SECRET=<your_jwt_secret_key>
   ```

5. Start the server:
   ```bash
   npm start
   ```

The server will run at `http://localhost:5000`.

---

## Folder Structure
```
backend/
├── controllers/        # Contains all controller logic
├── models/             # Mongoose schemas and models
├── routes/             # API route definitions
├── middlewares/        # Middleware for authentication and validation
├── .env                # Environment variables
├── app.js              # Entry point for the application
├── package.json        # Project configuration and dependencies
```

---

## API Endpoints

### Authentication
- `POST /auth/register` - Register a new user
- `POST /auth/login` - Authenticate a user and get a JWT token

### Books
- `GET /books/getbooks` - Get all books (requires authentication)
- `POST /books/addbook` - Add a new book (requires authentication)

---

## Authentication
The backend uses JWT (JSON Web Tokens) for authentication. To access protected routes, include the token in the request header:

```json
Authorization: Bearer <token>
```

---

## Development
To run the server in development mode with hot reloading, use:
```bash
npm start
```

This requires `nodemon` to be installed globally:
```bash
npm install -g nodemon
```

---

## Error Handling
All API responses follow a consistent structure for errors:

```json
{
  "success": false,
  "message": "Error message here",
  "error": "Detailed error information (if any)"
}
```

---

## Dependencies
Key dependencies used in this project:
- `express` - Web framework for Node.js
- `mongoose` - MongoDB object modeling
- `jsonwebtoken` - Token-based authentication
- `bcryptjs` - Password hashing
- `dotenv` - Environment variable management

---
