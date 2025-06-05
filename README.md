# AICommerce Nexus Flow

A modern e-commerce platform built with Next.js, TypeScript, and Supabase.

## Features

- 🛍️ Product browsing and searching
- 🔍 Advanced filtering and sorting
- 🛒 Shopping cart functionality
- ❤️ Wishlist management
- 📦 Order management
- 👤 User authentication
- ⭐ Product reviews and ratings
- 📱 Responsive design
- 🔒 Secure payment processing

## Tech Stack

### Frontend
- Next.js 14
- TypeScript
- Tailwind CSS
- Shadcn UI
- React Query
- Zustand

### Backend
- Node.js
- Express
- TypeScript
- Supabase
- Jest

## Getting Started

### Prerequisites

- Node.js 18+
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
# Install frontend dependencies
npm install

# Install backend dependencies
cd server
npm install
```

3. Set up environment variables:
```bash
# Frontend (.env.local)
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Backend (.env)
SUPABASE_URL=your_supabase_url
SUPABASE_SERVICE_KEY=your_supabase_service_key
JWT_SECRET=your_jwt_secret
```

4. Start the development servers:
```bash
# Start frontend (from root directory)
npm run dev

# Start backend (from server directory)
npm run dev
```

## Testing

```bash
# Frontend tests
npm test

# Backend tests
cd server
npm test
```

## API Documentation

### Authentication
- POST /api/auth/register - Register a new user
- POST /api/auth/login - Login user
- POST /api/auth/logout - Logout user
- GET /api/auth/me - Get current user
- PUT /api/auth/profile - Update user profile

### Products
- GET /api/products - Get all products
- GET /api/products/:id - Get single product
- POST /api/products - Create product (admin)
- PUT /api/products/:id - Update product (admin)
- DELETE /api/products/:id - Delete product (admin)

### Cart
- GET /api/cart - Get cart
- POST /api/cart - Add to cart
- PUT /api/cart/:id - Update cart item
- DELETE /api/cart/:id - Remove from cart
- DELETE /api/cart - Clear cart

### Wishlist
- GET /api/wishlist - Get wishlist
- POST /api/wishlist - Add to wishlist
- DELETE /api/wishlist/:id - Remove from wishlist
- DELETE /api/wishlist - Clear wishlist

### Orders
- GET /api/orders - Get orders
- GET /api/orders/:id - Get single order
- POST /api/orders - Create order
- PUT /api/orders/:id/status - Update order status (admin)
- DELETE /api/orders/:id - Cancel order

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [Supabase](https://supabase.io/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn UI](https://ui.shadcn.com/)
