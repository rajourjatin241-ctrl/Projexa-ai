# Student Freelance Platform

A college student-centric freelance marketplace similar to Fiverr/Upwork but dedicated exclusively to students.

## Features

- **User Authentication**: Student registration and login with college verification
- **Service Marketplace**: Students can offer and browse services
- **Categories**: Tutoring, Programming, Design, Writing, Marketing, and more
- **Messaging System**: Real-time communication between students
- **User Profiles**: Showcase skills, ratings, and completed work
- **Dashboard**: Track orders, earnings, and statistics

## Tech Stack

### Frontend
- React 18 with TypeScript
- TailwindCSS for styling
- React Router for navigation
- React Query for data fetching
- Socket.io for real-time messaging

### Backend
- Node.js with Express
- TypeScript
- MongoDB with Mongoose
- JWT authentication
- Socket.io for real-time features
- bcryptjs for password hashing

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm run install-deps
   ```

3. Set up environment variables:
   - Copy `server/.env.example` to `server/.env`
   - Copy `client/.env.example` to `client/.env`
   - Update the variables with your configuration

4. Start MongoDB

5. Run the development servers:
   ```bash
   npm run dev
   ```

This will start both the frontend (http://localhost:3000) and backend (http://localhost:5000) servers.

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user

### Services
- `GET /api/services` - Get all services
- `GET /api/services/:id` - Get service by ID
- `POST /api/services` - Create new service
- `PUT /api/services/:id` - Update service
- `DELETE /api/services/:id` - Delete service

### Users
- `GET /api/users/profile/:id` - Get user profile
- `PUT /api/users/profile` - Update profile
- `GET /api/users/search` - Search users

### Messages
- `GET /api/messages/conversations` - Get conversations
- `GET /api/messages/:roomId` - Get messages in room
- `POST /api/messages` - Send message

## Project Structure

```
pxa/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── pages/         # Page components
│   │   ├── contexts/      # React contexts
│   │   ├── services/      # API services
│   │   └── types/         # TypeScript types
│   └── public/
├── server/                # Node.js backend
│   ├── src/
│   │   ├── models/        # Mongoose models
│   │   ├── routes/        # API routes
│   │   ├── middleware/    # Express middleware
│   │   ├── controllers/   # Route controllers
│   │   └── types/         # TypeScript types
│   └── dist/              # Compiled output
└── package.json           # Root package.json
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

MIT License
