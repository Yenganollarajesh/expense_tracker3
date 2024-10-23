Setup Instructions
Node.js (v14 or higher)
SQLite3

Installation

Clone the repository:
git clone https://github.com/Yenganollarajesh/expense_tracker3.git
cd expense_tracker3
Install dependencies:
npm install


Create a .env file in the root directory and add the following: 
JWT_SECRET=your_secret_key

Run the development server:
npm run dev
The API will be running at http://localhost:3000.

Database Setup
The database is automatically created in the project directory as expense-tracker.sqlite when the server starts. Sequelize will sync the models with the database.

Register a new user
Endpoint: POST http://localhost:3000/api/register

Request Body:
{
  "username": "your_username",
  "password": "your_password"
}

Response:
{
  "id": 1,
  "username": "your_username"
}

![Screenshot 2024-10-23 150533](https://github.com/user-attachments/assets/6fb81716-aeca-4986-938e-ae7d1ca36087)
