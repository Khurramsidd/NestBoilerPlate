# 🚀 NestBoilerPlate

A starter boilerplate for building scalable backend applications using **NestJS**, with support for **PostgreSQL**, **Docker**, and **Postman API testing**.

---

## 📦 Tech Stack
- [NestJS](https://nestjs.com/) – Progressive Node.js framework
- [PostgreSQL](https://www.postgresql.org/) – Relational Database
- [Docker](https://www.docker.com/) – Containerized environment
- [Docker Compose](https://docs.docker.com/compose/) – Multi-container orchestration
- [Postman](https://www.postman.com/) – API testing

---

## 🛠 Prerequisites
- [Node.js](https://nodejs.org/) >= 18.x
- [Docker & Docker Compose](https://docs.docker.com/get-docker/)
- [Git](https://git-scm.com/)

---

## ⚙️ Setup

### 1. Clone Repository
```bash
git clone git@github.com:Khurramsidd/NestBoilerPlate.git
cd NestBoilerPlate
npm install
```

## 🐳 Run with Docker
### 2. Start Services
```bash
docker-compose up -d
```
## 🧪 Testing API with Postman
### 3. Import Postman Collection
- Open Postman
- Import the `Postman/user-crud.postman_collection.json` file from the project root
- Use the pre-configured requests to test the API endpoints

## Project Structure
```
NestBoilerPlate/
├── src/               # Main source code
├── test/              # E2E tests
├── docker-compose.yml # Docker setup
├── Dockerfile         # API container build
├── .env.example       # Environment variables sample
├── Postman/           # Postman collection
│   └── user-crud.postman_collection.json
└── README.md          # Project documentation
```
## 📌 Author
- **Khurram Siddique** - [GitHub](https://github.com/Khurramsidd/) | [LinkedIn](https://www.linkedin.com/in/khurram-saeed-siddiqui-441bb8b5/)
