# 🚀 NestJS – Lecture 1 (Introduction)

## 📌 What is NestJS?

NestJS is an **architecture-driven Node.js framework** used to build **scalable, maintainable, and enterprise-level backend applications**.

- Built on top of **Express** and **Fastify**
- Uses **TypeScript by default**
- Best suited for **large-scale projects**
- Enforces **strict and clean architecture**

---

## 🧠 Why NestJS?

NestJS is mainly used when:
- Project size is huge
- Team size is large
- Code needs strict structure
- Long-term maintenance is required
- Clean separation of concerns is important

---

## 🏗️ NestJS Architecture Overview

NestJS follows a layered and modular architecture:

```
main.ts
   ↓
app.module.ts
   ↓
{module}.module.ts
   ↓
{module}.controller.ts
   ↓
{module}.service.ts
```

---

## 📂 File Responsibilities

### `main.ts`
- Entry point of the NestJS application
- Bootstraps the server
- Starts listening on a port

### `app.module.ts`
- Root module of the application
- Controls the entire backend
- From here we can:
  - Register modules
  - Configure databases
  - Create microservices
  - Manage global providers

### `{module}.module.ts`
- Groups related controllers and services
- Helps maintain modular structure

### `{module}.controller.ts`
- Handles HTTP requests
- Defines routes and endpoints

### `{module}.service.ts`
- Contains business logic
- Handles data processing and operations

---

## ⚙️ Creating a New NestJS Project

To create a new NestJS project, use:

```bash
nest new <project-name>
```

This command:
- Creates project structure
- Installs dependencies
- Sets up TypeScript configuration

---

## 🛠️ NestJS CLI Commands

### 📦 Create a Module
```bash
nest generate module <module-name>
```
Creates a new folder with `<module-name>.module.ts`

---

### 🎯 Create a Controller
```bash
nest generate controller <module-name>
```
Creates:
- `<module-name>.controller.ts`
- `<module-name>.controller.spec.ts`

---

### 🔧 Create a Service
```bash
nest generate service <module-name>
```
Creates:
- `<module-name>.service.ts`
- `<module-name>.service.spec.ts`

---

## 📐 Why NestJS is Good for Large Projects?

NestJS provides:
- Modular architecture
- Dependency Injection
- Clean and predictable structure
- Easy scalability
- Better testability

---

## ⏭️ Next Lecture

- Controllers & Routing
- Dependency Injection
- Providers & Modules
- Middleware & Guards

---
