# Inventory_Management_System_React-Express
Assignment.

# 📦 Inventory Management System API Documentation

## Base URL

http://localhost:5000/api


---

# 🔐 Authentication

## Register User

**Endpoint**

POST /auth/register


**Body**
```json
{
  "email": "user@example.com",
  "password": "123456"
}

Response

{
  "message": "User created successfully"
}
Login User

Endpoint

POST /auth/login

Body

{
  "email": "user@example.com",
  "password": "123456"
}

Response

{
  "token": "jwt_token_here"
}
📦 Products
Get All Products

Endpoint

GET /products

Response

{
  "data": [
    {
      "id": 1,
      "sku": "SKU001",
      "name": "Product A",
      "stock": 10,
      "createdAt": "2026-01-01"
    }
  ]
}
Get Product by ID

Endpoint

GET /products/:id
Create Product

Endpoint

POST /products

Body

{
  "sku": "SKU001",
  "name": "Product A"
}
Update Product

Endpoint

PUT /products/:id

Body

{
  "sku": "SKU001",
  "name": "Updated Product"
}
Delete Product

Endpoint

DELETE /products/:id
📊 Stock Management
Add Stock

Endpoint

POST /stock/add

Body

{
  "productId": 1,
  "quantity": 10
}
Stock History

Endpoint

GET /stock/history

Response

{
  "data": [
    {
      "id": 1,
      "type": "STOCK_IN",
      "quantity": 10,
      "stockAfter": 50,
      "product": {
        "name": "Product A",
        "sku": "SKU001"
      },
      "createdAt": "2026-01-01"
    }
  ]
}
📦 Orders
Create Order

Endpoint

POST /order

Body

{
  "items": [
    {
      "productId": 1,
      "quantity": 2
    }
  ]
}
Get Orders

Endpoint

GET /order
Cancel Order

Endpoint

PATCH /order/:id/cancel
📊 Dashboard
Get Dashboard Stats

Endpoint

GET /dashboard

Response

{
  "data": {
    "totalProducts": 10,
    "totalOrders": 5,
    "placedOrders": 4,
    "cancelledOrders": 1,
    "totalStock": 200,
    "recentMovements": []
  }
}
🔐 Authorization

All protected routes require:

Authorization: Bearer <token>
🚀 Notes
All responses are JSON
Protected routes require JWT token
Stock updates automatically affect product inventory
Orders can be cancelled but not deleted

---
