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


Log in a user and generate a token

Endpoint: POST  http://localhost:3000/api/login

Request Body:

{

  "username": "your_username",
  
  "password": "your_password"
  
}

Response:
 
{

  "token": "jwt_token"
  
}

![Screenshot 2024-10-23 152246](https://github.com/user-attachments/assets/315ff33f-c252-4c01-81cb-a020b69890d6)



Create a transaction

Endpoint: POST http://localhost:3000/api/transactions

Headers:

{

  "Authorization": "Bearer your_jwt_token"
  
}

Request Body:
 
 {
 
  "type": "income",
  
  "category": "Salary",
  
  "amount": 5000,
  
  "date": "2024-01-17",
  
  "description": "Jan salary"
  
}

Response:
 
{

    "id": 7,
    
    "type": "income",
    
    "category": "Salary",
    
    "amount": 5000,
    
    "date": "2024-01-17T00:00:00.000Z",
    
    "description": "Jan salary",
    
    "userId": 1,
    
    "updatedAt": "2024-10-23T09:58:49.696Z",
    
    "createdAt": "2024-10-23T09:58:49.696Z"
    
}


![Screenshot 2024-10-23 152916](https://github.com/user-attachments/assets/54acdca3-8768-482a-96e5-3faa9174e162)


Get all transactions (with pagination)

Endpoint: GET http://localhost:3000/api/transactions

Headers:

{
  "Authorization": "Bearer your_jwt_token"
}

Query Parameters:

limit (optional): Number of transactions per page (default is 10)

offset (optional): Offset for pagination (default is 0)

Response:
 
{

    "transactions": [
    
        {
        
            "id": 1,
            
            "type": "income",
            
            "category": "Salary",
            
            "amount": 5000,
            
            "date": "2024-12-15T00:00:00.000Z",
            
            "description": "Dec salary",
            
            "userId": 1,
            
            "createdAt": "2024-10-22T18:54:52.852Z",
            
            "updatedAt": "2024-10-22T19:00:04.502Z"
            
        },
        
        {
        
            "id": 7,
            
            "type": "income",
            
            "category": "Salary",
            
            "amount": 5000,
            
            "date": "2024-01-17T00:00:00.000Z",
            
            "description": "Jan salary",
            
            "userId": 1,
            
            "createdAt": "2024-10-23T09:58:49.696Z",
            
            "updatedAt": "2024-10-23T09:58:49.696Z"
        }
    ],
    
    "totalCount": 4,
    
    "currentPage": 1,
    
    "totalPages": 1
}

![Screenshot 2024-10-23 154247](https://github.com/user-attachments/assets/570982a9-c43c-40d6-9ef0-9de82910e8a0)
