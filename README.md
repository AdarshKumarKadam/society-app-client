# Society Management Application - Frontend

## Overview

This repository contains the frontend code for the Society Management Application, a MERN stack project designed to manage the day-to-day activities of a residential society. The frontend is built using React and vite, and integrates with the backend API to provide a seamless user experience.

## Features

- User authentication (Login/Signup)
- Dashboard for residents and admins
- Manage society members, notices, and events
<!-- - Real-time updates using WebSockets -->
- Responsive design using Tailwind CSS
- Role-based access control

## Tech Stack

- **Framework:** React
- **Build Tool:** Vite
- **State Management:** Redux Toolkit
- **Styling:** Tailwind CSS
- **Routing:** React Router
- **Data Fetching:** Axios / RTK Query
- **Notifications:** react-hot-toast

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/AdarshKumarKadam/society-app-client.git
   cd society-app-client
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

3. **Create a `.env` file:**

   Create a `.env` file in the root directory with the following environment variables:

   ````env
   VITE_API_URL=http://localhost:3000  

   ````

4. **Run the development server:**

   ```bash
   npm run dev
   ```

   or

   ```bash
   yarn dev
   ```

   The application should be running on [http://localhost:5173](http://localhost:5173).

### Build for Production

To create a production build, run:

```bash
npm run build
```
