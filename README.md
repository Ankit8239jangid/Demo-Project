# MCQ Exam Application

A comprehensive Multiple Choice Question (MCQ) examination system built using the MERN stack (MongoDB, Express.js, React.js, Node.js) with real-time question timing and user authentication.

## Project Overview

This application allows users to take timed MCQ exams with automated scoring and result tracking. The system supports both student and admin roles, with features for exam management and performance analysis.

## Key Features

### User Authentication & Authorization
- Secure registration and login system
- JWT-based authentication
- Role-based access control (Admin/Student)
- Password encryption using bcrypt

### Exam Features
- Real-time question timer using Socket.io
- 1-minute time limit per question
- Randomized question selection
- Automatic submission on timeout
- Progress tracking during exam
- Immediate result calculation

### Admin Features
- Question management (Add, Edit, Delete)
- User management
- Exam statistics dashboard
- Report generation
- Performance analytics

### Student Features
- Take exams with timer
- View exam history
- Performance reports
- Profile management
- Score tracking

### Technical Features
- Real-time updates using Socket.io
- Responsive design using Tailwind CSS
- State management with Redux
- Protected routes
- Error handling
- Loading states
- Form validation

## Technical Requirements

### Backend
- Node.js 
- Express.js
- MongoDB
- Socket.io
- JWT Authentication
- Mongoose ODM

### Frontend
- React.js 18+
- Redux for state management
- Socket.io-client
- Tailwind CSS
- React Router v6
- Axios for API calls

## Project Structure

```
├── backend/
│   ├── config/
│   │   └── db.config.js
│   ├── controllers/
│   │   ├── examController.js
│   │   ├── reportController.js
│   │   └── userController.js
│   ├── middleware/
│   │   └── authMiddleware.js
│   ├── models/
│   │   ├── examModel.js
│   │   ├── reportModel.js
│   │   └── userModel.js
│   ├── routes/
│   │   ├── examRoutes.js
│   │   ├── reportRoutes.js
│   │   └── userRoutes.js
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── redux/
│   │   └── stylesheets/
│   └── package.json
```

## Installation & Setup

### Prerequisites
```bash
- Node.js (v14 or higher)
- MongoDB
- npm or yarn
```

### Backend Setup
```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create .env file with following variables
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
PORT=5000

# Start server
npm run dev
```

### Frontend Setup
```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Create .env file
REACT_APP_API_URL=http://localhost:5000

# Start application
npm start
```

## API Documentation

### Authentication Endpoints
- POST `/api/auth/register`: User registration
- POST `/api/auth/login`: User login
- GET `/api/auth/profile`: Get user profile

### Exam Endpoints
- GET `/api/exam/questions`: Get random questions
- POST `/api/exam/submit`: Submit exam answers
- GET `/api/exam/history`: Get user's exam history

### Admin Endpoints
- POST `/api/admin/questions`: Add new question
- PUT `/api/admin/questions/:id`: Update question
- DELETE `/api/admin/questions/:id`: Delete question
- GET `/api/admin/reports`: Get exam reports

## Database Schema

### User Schema
```javascript
{
  username: String,
  email: String,
  password: String,
  role: String,
  examHistory: Array
}
```

### Question Schema
```javascript
{
  question: String,
  options: {
    A: String,
    B: String,
    C: String,
    D: String
  },
  correctOption: String,
  marks: Number
}
```

### Exam Schema
```javascript
{
  userId: ObjectId,
  questions: Array,
  answers: Object,
  score: Number,
  date: Date
}
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Testing
```bash
# Run backend tests
cd backend
npm test

# Run frontend tests
cd frontend
npm test
```

## Deployment

### Backend Deployment
- Deploy server to a cloud platform (AWS, Heroku, DigitalOcean)
- Set up MongoDB Atlas for database
- Configure environment variables

### Frontend Deployment
- Build the React application
- Deploy to platforms like Netlify, Vercel, or AWS S3
- Update API endpoints in production

## Security Features

- JWT Authentication
- Password Hashing
- Protected Routes
- Input Validation
- XSS Protection
- CORS Configuration

## Future Enhancements

1. Multiple exam categories
2. Question difficulty levels
3. Timed full exams
4. PDF report generation
5. Email notifications
6. Performance analytics
7. Practice mode
8. Discussion forum
9. Chat support
10. Mobile application

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- MongoDB Documentation
- React.js Documentation
- Socket.io Documentation
- Express.js Documentation
- Tailwind CSS Documentation

## Contact

Project Link: [https://github.com/yourusername/mcq-exam-app](https://github.com/yourusername/mcq-exam-app)