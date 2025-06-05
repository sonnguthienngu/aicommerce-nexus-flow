# AICommerce Nexus Flow

A modern e-commerce platform built with React, Node.js, and Supabase.

## Features

- 🛍️ Product browsing and searching
- 🛒 Shopping cart functionality
- ❤️ Wishlist management
- 📦 Order processing
- ⭐ Product reviews and ratings
- 🔔 Real-time notifications
- 🎯 Personalized recommendations
- 📦 Bundle deals
- 🔒 User authentication and authorization
- 👤 User profiles and settings

## Tech Stack

### Frontend
- React
- TypeScript
- Tailwind CSS
- Radix UI
- Vite

### Backend
- Node.js
- Express
- TypeScript
- Supabase
- JWT Authentication

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Supabase account

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/aicommerce-nexus-flow.git
cd aicommerce-nexus-flow
```

2. Install dependencies:
```bash
# Install backend dependencies
cd server
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

3. Set up environment variables:
   - Copy `.env.example` to `.env` in both `server` and `frontend` directories
   - Update the variables with your Supabase credentials

4. Start the development servers:
```bash
# Start backend server
cd server
npm run dev

# Start frontend server
cd ../frontend
npm run dev
```

5. Access the application:
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000/api

## API Documentation

### Authentication
- POST /api/auth/register - Register a new user
- POST /api/auth/login - Login user
- GET /api/auth/me - Get current user

### Products
- GET /api/products - Get all products
- GET /api/products/:id - Get product by ID
- POST /api/products - Create product (admin)
- PUT /api/products/:id - Update product (admin)
- DELETE /api/products/:id - Delete product (admin)

### Cart
- GET /api/cart - Get user's cart
- POST /api/cart - Add item to cart
- PUT /api/cart/:id - Update cart item
- DELETE /api/cart/:id - Remove item from cart

### Wishlist
- GET /api/wishlist - Get user's wishlist
- POST /api/wishlist - Add item to wishlist
- DELETE /api/wishlist/:id - Remove item from wishlist

### Orders
- GET /api/orders - Get user's orders
- POST /api/orders - Create order
- GET /api/orders/:id - Get order details

### Reviews
- GET /api/reviews - Get product reviews
- POST /api/reviews - Create review
- PUT /api/reviews/:id - Update review
- DELETE /api/reviews/:id - Delete review

### Notifications
- GET /api/notifications - Get user's notifications
- PUT /api/notifications/:id - Mark notification as read
- DELETE /api/notifications/:id - Delete notification

### Recommendations
- GET /api/recommendations - Get personalized recommendations
- GET /api/recommendations/bundles - Get bundle deals
- POST /api/recommendations/bundles - Create bundle deal (admin)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [React](https://reactjs.org/)
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Supabase](https://supabase.io/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Radix UI](https://www.radix-ui.com/)
