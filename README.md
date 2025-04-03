# Lamborghini Website - Test Drive Booking System

## Project Overview
This is a modern, responsive website for Lamborghini featuring a test drive booking system. The website includes:
- Responsive design that works on all devices
- Interactive car model showcase
- Test drive booking form with validation
- Secure data storage using MongoDB
- Professional UI/UX design

## Technical Requirements
Before running this project, ensure you have:
- Node.js (v14 or higher)
- MongoDB (v4.4 or higher)
- npm (v6 or higher)

## Installation Guide

### Step 1: Install Required Software
1. Download and install Node.js from [nodejs.org](https://nodejs.org)
2. Download and install MongoDB from [mongodb.com](https://www.mongodb.com/try/download/community)

### Step 2: Set Up the Project
1. Extract the `lamborghini-website.zip` file to your desired location
2. Open terminal/command prompt
3. Navigate to the project folder:
   ```bash
   cd path/to/lamborghini-website
   ```
4. Install dependencies:
   ```bash
   npm install
   ```

### Step 3: Configure Environment
1. Make sure MongoDB is running on your system
2. The `.env` file is already configured with default settings:
   ```
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/lamborghini
   ```

### Step 4: Start the Application
1. Start the server:
   ```bash
   # For development
   npm run dev
   
   # For production
   npm start
   ```
2. Open your browser and visit: `http://localhost:3000`

## Features
- Responsive design for all devices
- Interactive car model showcase
- Test drive booking system
- Form validation
- Secure data storage
- Professional UI/UX

## Support
For technical support or questions, please contact:
[Your Contact Information]

## Maintenance
Regular maintenance tasks:
1. Keep Node.js and MongoDB updated
2. Monitor server logs for any issues
3. Regularly backup the MongoDB database

## Security Notes
- The application uses secure form validation
- Data is stored securely in MongoDB
- Environment variables are used for sensitive configuration

## Deployment Guide
For deploying to a production server:
1. Set up a production MongoDB instance
2. Update the `.env` file with production credentials
3. Use a process manager like PM2 for Node.js
4. Set up SSL certificates for HTTPS
5. Configure proper security headers

## Customization
To customize the website:
1. Edit `public/index.html` for frontend changes
2. Modify `server.js` for backend changes
3. Update styles in the CSS section of index.html

## Troubleshooting
Common issues and solutions:
1. MongoDB connection issues:
   - Ensure MongoDB is running
   - Check connection string in .env file
2. Port conflicts:
   - Change PORT in .env file
   - Ensure no other service uses port 3000
3. Node.js errors:
   - Run `npm install` again
   - Check Node.js version compatibility

## Updates and Maintenance
Regular updates are recommended for:
- Node.js packages
- MongoDB
- Security patches
- Browser compatibility

## License
[Your License Information]

## Contact
For any questions or support:
[Your Contact Details]

## API Endpoints

- POST `/api/test-drive` - Submit a test drive request
- GET `/api/test-drive` - Get all test drive requests (admin only)

## Technologies Used

- Frontend:
  - HTML5
  - CSS3
  - JavaScript (ES6+)
  
- Backend:
  - Node.js
  - Express.js
  - MongoDB
  - Mongoose 