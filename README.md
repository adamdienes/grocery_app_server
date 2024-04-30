# Grocery Scan App Node.js Server

This is a Node.js server for the Grocery Scan App. It provides APIs for managing grocery products using SQLite as the database.

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![SQLite](https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white) ![DigitalOcean](https://img.shields.io/badge/DigitalOcean-%230167ff.svg?style=for-the-badge&logo=digitalOcean&logoColor=white)

## Prerequisites

- Node.js installed on your system.
- npm (Node Package Manager) installed on your system.

[![Node.js CI](https://github.com/adamdienes/grocery_app_server/actions/workflows/node.js.yml/badge.svg)](https://github.com/adamdienes/grocery_app_server/actions/workflows/node.js.yml)

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd grocery-scan-app-server
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

## Running the Server

To start the Node.js server, run the following command:

```bash
node server.js
```

## API Base URL

The base URL for all API requests is `localhost:PORT` or `https://grocery-app-server-8o3xk.ondigitalocean.app`

## Authentication

API requests must include a predefined _Authorization_ header with a valid token.

- Key: `Authorization`
- Value: `Bearer <API_TOKEN>`

## API Routes

### Get all products

- **Route:** `/products`
- **Method:** GET
- **Description:** Retrieves all products from the database.

### Get product by barcode

- **Route:** `/product/:barcode`
- **Method:** GET
- **Description:** Retrieves a product from the database based on its barcode with ingredients list.
- **Parameters:**
  - `barcode`: The unique identifier of the product.

## Error Messages

- **401 Unauthorized: Missing Authorization header**
  Returned when the request does not include an Authorization header.

- **401 Unauthorized: Invalid token**
  Returned when the provided token in the Authorization header is invalid.

- **404 Product not found for barcode: [barcode]**
  Returned when no product is found in the database for the specified barcode.

## DigitalOcean Droplet connection

Continuous deployment is live to a DigitalOcean Droplet, and the app is auto-updating relative to changes to the main branch.

[![DigitalOcean Badge](https://web-platforms.sfo2.cdn.digitaloceanspaces.com/WWW/Badge%201.svg)](https://www.digitalocean.com/?refcode=032964bbbea4)

Made with ❤️ and JavaScript.
