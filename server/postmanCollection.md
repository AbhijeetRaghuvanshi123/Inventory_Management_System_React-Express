{
  "info": {
    "_postman_id": "ff5a9184-00df-4219-b6c0-ccbf147f3937",
    "name": "Inventory_Management_System",
    "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
    "_exporter_id": "50230678"
  },
  "item": [
    {
      "name": "http://localhost:5000/auth/register",
      "request": {
        "auth": {
          "type": "inherit"
        },
        "method": "POST",
        "header": [],
        "body": {
          "mode": "raw",
          "raw": "{\n    \"email\": \"abhijeetraghuvanshi9842abhi@gmail.com\",\n    \"password\": \"1234\"\n}",
          "options": {
            "raw": {
              "language": "json"
            }
          }
        },
        "url": {
          "raw": "http://localhost:5000/auth/register",
          "protocol": "http",
          "host": [
            "localhost"
          ],
          "port": "5000",
          "path": [
            "auth",
            "register"
          ]
        }
      },
      "response": []
    },
    {
      "name": "http://localhost:5000/auth/login",
      "request": {
        "auth": {
          "type": "inherit"
        },
        "method": "POST",
        "header": [],
        "body": {
          "mode": "raw",
          "raw": "{\n    \"email\": \"abhijeetraghuvanshi9842abhi@gmail.com\",\n    \"password\": \"1234\"\n}",
          "options": {
            "raw": {
              "language": "json"
            }
          }
        },
        "url": {
          "raw": "http://localhost:5000/auth/login",
          "protocol": "http",
          "host": [
            "localhost"
          ],
          "port": "5000",
          "path": [
            "auth",
            "login"
          ]
        }
      },
      "response": []
    },
    {
      "name": "http://localhost:5000/products",
      "request": {
        "auth": {
          "type": "inherit"
        },
        "method": "POST",
        "header": [],
        "body": {
          "mode": "raw",
          "raw": "{\n    \"sku\": \"sku007\",\n    \"name\": \"test product\"\n}",
          "options": {
            "raw": {
              "language": "json"
            }
          }
        },
        "url": {
          "raw": "http://localhost:5000/products",
          "protocol": "http",
          "host": [
            "localhost"
          ],
          "port": "5000",
          "path": [
            "products"
          ]
        }
      },
      "response": []
    },
    {
      "name": "http://localhost:5000/products",
      "protocolProfileBehavior": {
        "disableBodyPruning": true
      },
      "request": {
        "auth": {
          "type": "inherit"
        },
        "method": "GET",
        "header": [],
        "body": {
          "mode": "raw",
          "raw": "",
          "options": {
            "raw": {
              "language": "json"
            }
          }
        },
        "url": {
          "raw": "http://localhost:5000/products",
          "protocol": "http",
          "host": [
            "localhost"
          ],
          "port": "5000",
          "path": [
            "products"
          ]
        }
      },
      "response": []
    },
    {
      "name": "http://localhost:5000/products/93d9cbd2-5755-47bd-bc66-124078495247",
      "request": {
        "auth": {
          "type": "inherit"
        },
        "method": "GET",
        "header": [],
        "url": {
          "raw": "http://localhost:5000/products/93d9cbd2-5755-47bd-bc66-124078495247",
          "protocol": "http",
          "host": [
            "localhost"
          ],
          "port": "5000",
          "path": [
            "products",
            "93d9cbd2-5755-47bd-bc66-124078495247"
          ]
        }
      },
      "response": []
    },
    {
      "name": "http://localhost:5000/products/93d9cbd2-5755-47bd-bc66-124078495247",
      "request": {
        "auth": {
          "type": "inherit"
        },
        "method": "PUT",
        "header": [],
        "body": {
          "mode": "raw",
          "raw": "{\n    \"sku\": \"skuUpdate007\",\n    \"name\": \"does upadtaion work\"\n}",
          "options": {
            "raw": {
              "language": "json"
            }
          }
        },
        "url": {
          "raw": "http://localhost:5000/products/93d9cbd2-5755-47bd-bc66-124078495247",
          "protocol": "http",
          "host": [
            "localhost"
          ],
          "port": "5000",
          "path": [
            "products",
            "93d9cbd2-5755-47bd-bc66-124078495247"
          ]
        }
      },
      "response": []
    },
    {
      "name": "http://localhost:5000/products/93d9cbd2-5755-47bd-bc66-124078495247",
      "request": {
        "auth": {
          "type": "inherit"
        },
        "method": "DELETE",
        "header": [],
        "url": {
          "raw": "http://localhost:5000/products/93d9cbd2-5755-47bd-bc66-124078495247",
          "protocol": "http",
          "host": [
            "localhost"
          ],
          "port": "5000",
          "path": [
            "products",
            "93d9cbd2-5755-47bd-bc66-124078495247"
          ]
        }
      },
      "response": []
    },
    {
      "name": "http://localhost:5000/stock/add",
      "protocolProfileBehavior": {
        "disableBodyPruning": true
      },
      "request": {
        "auth": {
          "type": "inherit"
        },
        "method": "GET",
        "header": [],
        "body": {
          "mode": "raw",
          "raw": "{\n    \"productId\" : \"1778220b-94df-4390-8d3f-723330a0afb8\",\n    \"quantity\" : 10\n}",
          "options": {
            "raw": {
              "language": "json"
            }
          }
        },
        "url": {
          "raw": "http://localhost:5000/stock/add",
          "protocol": "http",
          "host": [
            "localhost"
          ],
          "port": "5000",
          "path": [
            "stock",
            "add"
          ]
        }
      },
      "response": []
    },
    {
      "name": "http://localhost:5000/stock/history",
      "request": {
        "auth": {
          "type": "inherit"
        },
        "method": "GET",
        "header": [],
        "url": {
          "raw": "http://localhost:5000/stock/history",
          "protocol": "http",
          "host": [
            "localhost"
          ],
          "port": "5000",
          "path": [
            "stock",
            "history"
          ]
        }
      },
      "response": []
    },
    {
      "name": "http://localhost:5000/order",
      "request": {
        "auth": {
          "type": "inherit"
        },
        "method": "POST",
        "header": [],
        "body": {
          "mode": "raw",
          "raw": "{\n  \"items\": [\n    {\n      \"productId\": \"1778220b-94df-4390-8d3f-723330a0afb8\",\n      \"quantity\": 2\n    }\n  ]\n}",
          "options": {
            "raw": {
              "language": "json"
            }
          }
        },
        "url": {
          "raw": "http://localhost:5000/order",
          "protocol": "http",
          "host": [
            "localhost"
          ],
          "port": "5000",
          "path": [
            "order"
          ]
        }
      },
      "response": []
    },
    {
      "name": "http://localhost:5000/order/2f387358-ae1e-4091-a324-421b8c99a9ce/cancel",
      "request": {
        "auth": {
          "type": "inherit"
        },
        "method": "PATCH",
        "header": [],
        "url": {
          "raw": "http://localhost:5000/order/2f387358-ae1e-4091-a324-421b8c99a9ce/cancel",
          "protocol": "http",
          "host": [
            "localhost"
          ],
          "port": "5000",
          "path": [
            "order",
            "2f387358-ae1e-4091-a324-421b8c99a9ce",
            "cancel"
          ]
        }
      },
      "response": []
    },
    {
      "name": "http://localhost:5000/dashboard",
      "request": {
        "auth": {
          "type": "inherit"
        },
        "method": "GET",
        "header": [],
        "url": {
          "raw": "http://localhost:5000/dashboard",
          "protocol": "http",
          "host": [
            "localhost"
          ],
          "port": "5000",
          "path": [
            "dashboard"
          ]
        }
      },
      "response": []
    }
  ]
}