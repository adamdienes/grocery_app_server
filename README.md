# Shopify x Billingo invoicing

This is a custom Node.js server for integration between Shopify store and Billingo invoicing using webhooks.

![JavaScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![DigitalOcean](https://img.shields.io/badge/DigitalOcean-%230167ff.svg?style=for-the-badge&logo=digitalOcean&logoColor=white)

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

4. Make a copy of a `.env.example` file in the root directory and add your environment variables:

   ```bash
   copy .\.env.example .env
   ```

## Running the Server

To start the Node.js server, run the following command:

```bash
node server.js
```

## API Base URL

The base URL for all API requests is `localhost:PORT` 

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

- **403 Unauthorized: Invalid token**: Returned when the provided token in the Authorization header is invalid.


## DigitalOcean Droplet connection

Continuous deployment is live to a DigitalOcean Droplet, and the app is auto-updating relative to changes to the main branch.

[![DigitalOcean Badge](https://web-platforms.sfo2.cdn.digitaloceanspaces.com/WWW/Badge%201.svg)](https://www.digitalocean.com/?refcode=032964bbbea4)

Made with ❤️ and JavaScript.
