🚀 RapidSort-IMS (Inventory Management System)

RapidSort-IMS is a full-stack, enterprise-grade Inventory Management System designed to streamline product tracking, order processing, and business analytics with a strong emphasis on security and scalability.

Built using modern web technologies, the system integrates real-time dashboards, Zero-Trust security architecture, and modular backend design to deliver a production-ready solution.

📌 Project Overview

RapidSort-IMS enables organizations to efficiently manage:

Products & stock levels

Suppliers & procurement

Customers & sales

Orders & transactions

Business performance analytics

The system ensures secure access control, optimized performance, and scalable architecture suitable for real-world deployment.

✨ Key Features
📦 Inventory Management

Full CRUD operations for products

Category & supplier management

Real-time stock tracking

Bulk product operations

Low-stock monitoring

👥 Customer & Order Management

Customer database management

Complete order lifecycle handling

Sales tracking and reporting

Role-based access control (Admin, Manager, Employee)

📊 Business Intelligence & Analytics

Real-time dashboard with KPIs

Sales & inventory performance reports

Interactive data visualizations

Exportable reports (CSV support)

🔐 Security Architecture (Zero-Trust Model)

JWT-based authentication

Continuous request verification

Device fingerprinting

Risk-based access validation

Rate limiting & threat detection

Secure session handling

🛠 Technology Stack
Frontend

React 18

TypeScript

Material UI (MUI v5)

React Router v6

Recharts (Data Visualization)

Axios (API Communication)

Backend

Node.js

Express.js

MongoDB (Primary Database)

Mongoose ODM

JWT Authentication

Redis (Optional Caching)

⚡ Installation & Setup
Prerequisites

Node.js (v16 or above)

npm (v8 or above)

MongoDB

Setup Steps
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd RapidSort-IMS

# Install dependencies for frontend & backend
npm run install:all

# Start development servers
npm start

Application Access

Frontend:

http://localhost:3000


Backend API:

http://localhost:5000/api


Health Check Endpoint:

http://localhost:5000/api/health

🔑 Default Test Credentials

All test accounts use:

Password: password123


Example users:

admin.user@rapidsort.com
 (Admin)

john.manager@rapidsort.com
 (Manager)

mike.stock@rapidsort.com
 (Employee)

📁 Project Structure
RapidSort-IMS/
│
├── frontend/        # React + TypeScript client
├── backend/         # Express + MongoDB server
├── docs/            # Project documentation
└── package.json     # Workspace configuration

🚀 Performance & Optimization

Route-based lazy loading

API response caching

MongoDB indexing

Optimized middleware stack

Modular backend architecture

🎯 Project Highlights

Enterprise-ready architecture

Secure Zero-Trust implementation

Real-time analytics dashboard

Scalable and maintainable codebase

Clean UI with responsive design

Production-level security practices

📄 License

MIT License
