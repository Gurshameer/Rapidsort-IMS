# 🚀 RapidSort-IMS | Enterprise Inventory Management System

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Stack](https://img.shields.io/badge/tech-MERN%20%2B%20TypeScript-orange.svg)
![Status](https://img.shields.io/badge/status-Production%20Ready-success.svg)

> **A scalable, secure, and modular full-stack inventory solution engineered with the MERN stack and TypeScript. Designed with Zero-Trust security principles and optimized for high-volume data processing.**

---

## 📌 Project Overview

**RapidSort-IMS** is a production-grade Inventory Management System designed to handle complex enterprise workflows, including product lifecycle management, procurement, and real-time business intelligence. 

Unlike standard CRUD applications, this project focuses on **backend architecture**, **performance optimization**, and **security**. It implements a robust MVC structure, role-based access control (RBAC), and database indexing strategies to ensure scalability and data integrity.

### 🌟 Key Engineering Highlights
* **Architecture:** Modular MVC backend with Service-Repository pattern nuances.
* **Security:** Zero-Trust implementation using JWT, RBAC, and request sanitization.
* **Performance:** Optimized MongoDB queries with compound indexing and optional Redis caching.
* **Scalability:** RESTful API design prepared for microservices migration.

---

## 🏗 System Architecture

The application is built on a decoupled client-server architecture.



[Image of MERN stack architecture diagram]


### Backend Design (Node.js & Express)
* **API Design:** Strict RESTful standards with standardized error responses.
* **Middleware Chains:** Custom middleware for auth verification, rate limiting, and logging.
* **Database:** MongoDB with Mongoose ODM.
    * *Optimization:* Used `.lean()` for read-heavy operations.
    * *Indexing:* Compound indexes on frequently queried fields (e.g., `sku`, `category`).
    * 

[Image of database schema design]


### Frontend Design (React & TypeScript)
* **State Management:** Context API for global auth state.
* **Performance:** Route-based code splitting and lazy loading.
* **Visualization:** Recharts for rendering real-time analytics.

---

## 🔐 Security & Access Control

Security is a primary focus of RapidSort-IMS, moving beyond basic login to a **Zero-Trust** model.

* **Authentication:** Stateless JWT (JSON Web Tokens) with secure cookie storage.
* **Authorization (RBAC):** Middleware-enforced roles:
    * `Admin`: Full system access, user management.
    * `Manager`: Inventory and order oversight.
    * `Employee`: Read-only access / basic order processing.
* **Protection:**
    * `express-rate-limit` to prevent DDoS/Brute-force.
    * `helmet` for HTTP header security.
    * `xss-clean` and `mongo-sanitize` against injection attacks.

---

## 📊 Core Modules

| Module | Functionality |
| :--- | :--- |
| **Inventory Engine** | Product CRUD, Low-stock alerts, Bulk updates, Supplier management. |
| **Order System** | Complete lifecycle management, Transaction logging, Status tracking. |
| **Analytics (BI)** | Real-time KPI Dashboards, Sales velocity, Stock turnover rates. |
| **Admin Console** | User management, Audit logs, System configurations. |

---

## 🛠 Technology Stack

### **Backend (The Core)**
* **Runtime:** Node.js
* **Framework:** Express.js (TypeScript)
* **Database:** MongoDB (Atlas) + Mongoose
* **Auth:** JSON Web Tokens (JWT), Bcrypt
* **Validation:** Joi / Zod

### **Frontend**
* **Library:** React 18
* **Language:** TypeScript
* **UI Framework:** Material UI (MUI)
* **Data Fetching:** Axios (with interceptors)
* **Charts:** Recharts

### **DevOps & Tools**
* **Version Control:** Git
* **API Testing:** Postman / Insomnia
* **Linting:** ESLint + Prettier

---

## ⚡ Getting Started

Follow these steps to set up the project locally.

### Prerequisites
* Node.js (v16+)
* MongoDB (Local or Atlas URL)

### Installation

1.  **Clone the repository**
    ```bash
    git clone <your-repo-url>
    cd RapidSort-IMS
    ```

2.  **Install Dependencies**
    ```bash
    # Root (if using workspaces) or separate folders
    npm run install:all 
    ```

3.  **Environment Configuration**
    Create a `.env` file in the backend directory:
    ```env
    PORT=5000
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_super_secret_key
    NODE_ENV=development
    ```

4.  **Run the Application**
    ```bash
    # Start Backend
    npm run server
    
    # Start Frontend
    npm run client
    ```

The server will start at `http://localhost:5000` and the client at `http://localhost:3000`.

---

## 📡 API Endpoints (Preview)

| Method | Endpoint | Description | Access |
| :--- | :--- | :--- | :--- |
| `POST` | `/api/auth/login` | Authenticate user & issue JWT | Public |
| `GET` | `/api/products` | Retrieve paginated products | All |
| `POST` | `/api/products` | Add new inventory item | Admin/Manager |
| `PATCH` | `/api/orders/:id` | Update order status | Manager |

---

## 📄 License

Distributed under the **MIT License**. See `LICENSE` for more information.

---
