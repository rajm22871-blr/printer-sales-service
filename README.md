# Printer Sales & Service Management System

A comprehensive web application for managing printer sales, rentals, services, and maintenance.

## 🎯 Features

- 🖨️ **Printer Management** - Track inventory, specifications, and availability
- 💰 **Sales Module** - Product catalog, pricing, and order management
- 🔧 **Service Tracking** - Schedule maintenance, track service requests
- 🎯 **Printer Rental System** - Manage rental agreements and pricing
- 👤 **User Dashboard** - Customer and admin panels
- 📊 **Analytics & Reports** - Sales, service, and rental analytics
- 🔐 **Authentication** - Secure login and role-based access

## 🛠️ Tech Stack

- **Frontend:** React.js, Tailwind CSS, Redux
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JWT (JSON Web Tokens)
- **API:** RESTful Architecture
- **Deployment:** Docker, Heroku/AWS

## 📁 Project Structure

```
printer-sales-service/
├── frontend/                 # React frontend application
│   ├── src/
│   │   ├── components/      # Reusable components
│   │   ├── pages/           # Page components
│   │   ├── services/        # API services
│   │   ├── redux/           # Redux store
│   │   └── App.js
│   └── package.json
├── backend/                  # Express.js backend API
│   ├── routes/              # API routes
│   ├── controllers/         # Request handlers
│   ├── models/              # Database models
│   ├── middleware/          # Custom middleware
│   ├── config/              # Configuration files
│   └── server.js
├── database/                # Database setup
│   ├── schema.sql
│   └── seedData.js
├── docs/                    # Documentation
├── .gitignore
└── package.json
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or cloud)
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/rajm22871-blr/printer-sales-service.git
cd printer-sales-service
```

2. **Install Backend Dependencies**
```bash
cd backend
npm install
```

3. **Install Frontend Dependencies**
```bash
cd ../frontend
npm install
```

4. **Configure Environment Variables**
```bash
# Create .env file in backend directory
cp backend/.env.example backend/.env

# Create .env file in frontend directory
cp frontend/.env.example frontend/.env
```

5. **Start MongoDB**
```bash
mongod
```

6. **Run Backend Server**
```bash
cd backend
npm start
# Server runs on http://localhost:5000
```

7. **Run Frontend Application** (in new terminal)
```bash
cd frontend
npm start
# Application opens on http://localhost:3000
```

## 📚 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `GET /api/auth/profile` - Get user profile

### Printers
- `GET /api/printers` - Get all printers
- `GET /api/printers/:id` - Get printer details
- `POST /api/printers` - Add new printer (Admin)
- `PUT /api/printers/:id` - Update printer (Admin)
- `DELETE /api/printers/:id` - Delete printer (Admin)

### Rentals
- `GET /api/rentals` - Get all rentals
- `POST /api/rentals` - Create rental request
- `PUT /api/rentals/:id` - Update rental
- `DELETE /api/rentals/:id` - Cancel rental

### Services
- `GET /api/services` - Get all service requests
- `POST /api/services` - Create service request
- `PUT /api/services/:id` - Update service status
- `GET /api/services/:id` - Get service details

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get product details
- `POST /api/products` - Add product (Admin)

### Orders
- `GET /api/orders` - Get user orders
- `POST /api/orders` - Create order
- `GET /api/orders/:id` - Get order details
- `PUT /api/orders/:id/status` - Update order status

### Users
- `GET /api/users` - Get all users (Admin)
- `GET /api/users/:id` - Get user details
- `PUT /api/users/:id` - Update user profile

## 🗄️ Database Models

### User Model
- userId, username, email, password, phone, address, role, createdAt

### Printer Model
- printerId, model, brand, specifications, price, rentalPrice, availability, category

### Rental Model
- rentalId, userId, printerId, startDate, endDate, totalCost, status

### Service Model
- serviceId, userId, printerId, issueDescription, serviceDate, status, cost

### Product Model
- productId, name, description, price, stock, category, specifications

### Order Model
- orderId, userId, productId, quantity, totalAmount, status, deliveryDate

## 🔐 Authentication & Security

- JWT-based authentication
- Password hashing with bcrypt
- CORS enabled
- Input validation
- Rate limiting
- SQL injection prevention

## 📊 User Roles

- **Admin** - Full system access, manage printers, users, services
- **Manager** - Manage rentals and services
- **Customer** - Browse and rent printers, track services
- **Service Technician** - Update service status

## 🧪 Testing

```bash
# Backend tests
cd backend
npm test

# Frontend tests
cd ../frontend
npm test
```

## 📦 Deployment

### Docker
```bash
docker build -t printer-sales-service .
docker run -p 5000:5000 -p 3000:3000 printer-sales-service
```

### Environment Variables Required

**Backend (.env)**
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/printer-sales
JWT_SECRET=your_jwt_secret_key
NODE_ENV=development
```

**Frontend (.env)**
```
REACT_APP_API_URL=http://localhost:5000/api
```

## 📝 License

MIT License - See LICENSE file for details

## 👥 Contributing

1. Create a feature branch (`git checkout -b feature/AmazingFeature`)
2. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
3. Push to the branch (`git push origin feature/AmazingFeature`)
4. Open a Pull Request

## 💬 Support

For support, email: support@printer-sales.com

---

**Version:** 1.0.0  
**Last Updated:** 2026-07-18
