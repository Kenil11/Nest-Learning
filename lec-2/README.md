# 🚀 NestJS – Lecture 2 (Controllers & Routing)

## 📌 Lecture Overview

In this lecture, we focus on **Controllers and Routing in NestJS**.  
This lecture explains how requests enter the application and how data is passed through routes.

By the end of this lecture, you will understand:
- What routing is
- How controllers work
- How to get values from:
  - Route parameters
  - Query parameters
  - Request body (basic introduction)

---

## 🧠 Request Flow in NestJS

Client (Browser / API Client)  
↓  
Controller  
↓  
Response  

This means:
- The client sends a request
- The controller receives and handles the request
- The controller sends a response back to the client

⚠️ Controllers should **not contain business logic**.  
They are only responsible for handling **request and response**.

---

## 🛠️ Creating a Controller

Using NestJS CLI:
```bash
nest generate controller users
```

---

## 🏗️ Basic Controller Structure

```ts
import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  getUsers() {
    return 'Get all users';
  }
}
```

---

## 🌐 Routing in NestJS

Routing in NestJS is handled using **decorators**.

### Common HTTP Method Decorators
- `@Get()`
- `@Post()`
- `@Put()`
- `@Delete()`
- `@Patch()`

Example routes:
- `GET /users`
- `GET /users/:id`
- `POST /users`

---

## 🧩 Route Parameters (`@Param`)

Route parameters are used to capture dynamic values from the URL.

Example request:
```
GET /users/10
```

Controller example:
```ts
@Get(':id')
getUserById(@Param('id') id: string) {
  return `User ID is ${id}`;
}
```

---

## 🔍 Query Parameters (`@Query`)

Query parameters are passed after `?` in the URL.

Example request:
```
GET /users?role=admin
```

Controller example:
```ts
@Get()
getUsers(@Query('role') role: string) {
  return `User role is ${role}`;
}
```

---

## 📦 Request Body (`@Body`) – Basic Introduction

Request body is mainly used with `POST` and `PUT` requests.

Example:
```ts
@Post()
createUser(@Body() body: any) {
  return body;
}
```

---

## 🧪 Testing Routes

You can test your APIs using:
- Browser (GET requests)
- Thunder Client
- Postman
- Insomnia
- Hoppscotch

---

---

## 📘 Summary

In this lecture, we learned:
- What controllers are
- How routing works in NestJS
- How HTTP method decorators work
- How to get values from:
  - Route parameters
  - Query parameters
  - Request body (basic)

---

## ⏭️ Next Lecture

- Providers & Services  
- Dependency Injection  
- Business logic separation
