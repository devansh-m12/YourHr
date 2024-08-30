# YourHR Application

YourHR is a web application designed to help users sign up and apply for job opportunities. The application consists of a frontend built with React and Material-UI and a backend using Node.js, Express, and MongoDB.

## Features

- User registration with file upload for resumes.
- Responsive design using Material-UI.
- Form validation and submission.
- Confirmation page for reviewing and submitting application data.

## Tech Stack

- **Frontend:**
  - React
  - Material-UI
  - React Router for navigation

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB with Mongoose for database management
  - Multer for handling file uploads
  - CORS for cross-origin requests

## Installation

### Prerequisites

- Node.js and npm installed.
- MongoDB installed and running locally.

### Steps

1. **Clone the repository:**

   ```bash
   git clone https://github.com/devansh-m12/yourhr.git
   cd yourhr
   ```

2. **Install dependencies:**

   - For the backend:

     ```bash
     cd backend
     npm install
     ```

   - For the frontend:

     ```bash
     cd frontend
     npm install
     ```

3. **Start the backend server:**

   ```bash
   cd backend
   node index.js
   ```

   This will start the server on `http://localhost:5000`.

4. **Start the frontend application:**

   ```bash
   cd frontend
   npm start
   ```

   This will start the React app on `http://localhost:3000`.

## Usage

1. Visit the homepage at `http://localhost:3000`.
2. Click on "Sign Up" to fill out the registration form.
3. Upload your resume and review your details on the confirmation page.
4. Submit the form to register.

## Project Structure

- **backend/**: Contains the server-side code.
  - `server.js`: Main server file with API routes.
  - `uploads/`: Directory for storing uploaded resumes.
  
- **frontend/**: Contains the client-side code.
  - `src/`: React components and app configuration.
  - `components/`: Contains React components for different parts of the app (e.g., Home, Signup, Confirmation).
  
## Contributing

Contributions are welcome! Please fork this repository and submit a pull request for any features or bug fixes.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

---

## DEMO 
### Home Page
![image](https://github.com/user-attachments/assets/75fcdd0a-22e5-48b8-a9a8-f8cd4c8bcf76)

### Signup Page
![image](https://github.com/user-attachments/assets/7268956d-6a68-4561-8a2c-b26174bfb9c3)

### Confirmation Page
![image](https://github.com/user-attachments/assets/987d136f-9adc-4c5e-981c-777b8e129be7)

### ThankYou Page
![image](https://github.com/user-attachments/assets/dc0a9d52-eae0-4ce4-b98a-96c3afb0f4da)




**Note:** This project is for educational purposes and may not be suitable for production use without further enhancements and security improvements.
