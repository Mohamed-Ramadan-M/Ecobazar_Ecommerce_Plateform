# EcoBazar Backend

JSON Server backend for the EcoBazar E-commerce Platform.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the JSON Server:
   ```bash
   npm start
   ```

3. The server will run on `http://localhost:5000`

## API Endpoints

### Products
- `GET /products` - Get all products
- `GET /products/:id` - Get a single product
- `POST /products` - Create a new product
- `PUT /products/:id` - Update a product
- `DELETE /products/:id` - Delete a product

### Categories
- `GET /categories` - Get all categories
- `GET /categories/:id` - Get a single category
- `POST /categories` - Create a new category
- `PUT /categories/:id` - Update a category
- `DELETE /categories/:id` - Delete a category

### Reviews
- `GET /reviews` - Get all reviews
- `GET /reviews/:id` - Get a single review
- `POST /reviews` - Create a new review
- `PUT /reviews/:id` - Update a review
- `DELETE /reviews/:id` - Delete a review

### Users
- `GET /users` - Get all users
- `GET /users/:id` - Get a single user
- `POST /users` - Create a new user
- `PUT /users/:id` - Update a user
- `DELETE /users/:id` - Delete a user

### Cart
- `GET /cart` - Get all cart items
- `GET /cart/:id` - Get a single cart item
- `POST /cart` - Add item to cart
- `PUT /cart/:id` - Update cart item
- `DELETE /cart/:id` - Remove item from cart

### Wishlist
- `GET /wishlist` - Get all wishlist items
- `GET /wishlist/:id` - Get a single wishlist item
- `POST /wishlist` - Add item to wishlist
- `DELETE /wishlist/:id` - Remove item from wishlist

### Orders
- `GET /orders` - Get all orders
- `GET /orders/:id` - Get a single order
- `POST /orders` - Create a new order
- `PUT /orders/:id` - Update an order
- `DELETE /orders/:id` - Delete an order

### News
- `GET /news` - Get all news posts
- `GET /news/:id` - Get a single news post
- `POST /news` - Create a new news post
- `PUT /news/:id` - Update a news post
- `DELETE /news/:id` - Delete a news post

## Query Parameters

You can use query parameters to filter results:

- `GET /products?categoryId=1` - Get products by category
- `GET /products?isOutofStock=false` - Get products in stock
- `GET /products?rating=4` - Get products by rating
- `GET /products?_sort=price&_order=asc` - Sort products by price

## Pagination

Use `_page` and `_limit` parameters:

- `GET /products?_page=1&_limit=10` - Get first 10 products
- `GET /products?_page=2&_limit=10` - Get next 10 products

## Full-Text Search

Use `q` parameter for full-text search:

- `GET /products?q=potato` - Search products for "potato"

## Relationships

Use `_expand` to include related data:

- `GET /reviews?_expand=user` - Get reviews with user data
- `GET /orders?_expand=user` - Get orders with user data