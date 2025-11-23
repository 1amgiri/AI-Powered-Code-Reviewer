# 🤖 AI-Powered Code Reviewer

This project is an intelligent code review assistant that uses Google's Gemini AI to analyze code and provide expert-level feedback. It functions as a "virtual senior developer," helping users improve code quality, identify bugs, and learn best practices.

The application is built with a **React/Vite** frontend and a **Node.js/Express** backend.

![AI Code Reviewer Screenshot](https://i.imgur.com/YOUR_SCREENSHOT_URL.png)

---

## Core Features

*   **🤖 Expert Code Analysis:** Identifies bugs, performance issues, and security vulnerabilities.
*   **✨ Best Practice Enforcement:** Reviews code for maintainability, readability, and SOLID principles.
*   **💡 Actionable Feedback:** Provides clear explanations and suggests refactored code snippets.
*   **🚀 Full-Stack Architecture:** A modern, single-page application powered by a robust backend service.

---

## Tech Stack

#### **Frontend:**
*   **React.js:** A popular JavaScript library for building user interfaces.
*   **Vite:** A next-generation frontend build tool for fast development.
*   **JavaScript (ES6+):** For modern frontend logic.
*   **CSS3:** For styling and design.

#### **Backend:**
*   **Node.js:** A JavaScript runtime for building server-side applications.
*   **Express.js:** A minimal and flexible Node.js framework for building APIs.
*   **Google Gemini API:** The core AI engine for code analysis.
*   **dotenv:** For managing environment variables and API keys securely.

---

## How It Works

The application follows a classic client-server architecture:

1.  **Frontend (Client):** The user pastes their code into the React-based UI and submits it.
2.  **HTTP Request:** The frontend sends the code snippet to the backend via a secure HTTP POST request.
3.  **Backend (Server):** The Node.js/Express server receives the request and forwards the code to the AI service.
4.  **Prompt Engineering:** Before sending it to the AI, the server wraps the code in a carefully engineered prompt, instructing the Gemini model to act as a senior developer and follow strict review guidelines.
5.  **AI Analysis:** The Gemini API processes the request and returns a detailed code review.
6.  **Response:** The server sends the formatted review back to the frontend, which then displays it to the user.

---

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

*   **Node.js** (v18.x or higher recommended)
*   **npm** (Node Package Manager)

### 1. Configuration

Before running the project, you need to provide your Google Gemini API key.

1.  Navigate to the `BackEnd` directory.
2.  Create a new file named `.env`.
3.  Inside the `.env` file, add the following line, replacing `YOUR_API_KEY_HERE` with your actual key:

    ```
    GOOGLE_GEMINI_KEY=YOUR_API_KEY_HERE
    ```

### 2. Run the Project

You will need **two separate terminals** to run both the backend and frontend servers simultaneously.

#### **Terminal 1: Start the Backend**

```bash
# Navigate to the backend directory
cd BackEnd

# Install dependencies
npm install

# Start the server
npm start
```
> The backend will be running at `http://localhost:3000`.

#### **Terminal 2: Start the Frontend**

```bash
# Navigate to the frontend directory from the root
cd FrontEnd

# Install dependencies
npm install

# Start the development server
npm run dev
```
> The frontend will be running at `http://localhost:5173` (or the next available port).

### 3. Open the Application

Open your web browser and go to **`http://localhost:5173`**. You can now use the AI Code Reviewer!
