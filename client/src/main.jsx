import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Homepage from './Routes/Homepage/Homepage'
import Dashboardpage from './Routes/Dashboardpage/Dashboardpage.jsx'
import Chatpage from './Routes/Chatpage/Chatpage.jsx'
import RootLayout from './Layouts/RootLayout/RootLayout.jsx'
import DashboardLayout from './Layouts/DashboardLayout/DashboardLayout.jsx'
import { ClerkProvider } from '@clerk/clerk-react'
import Signinpage from './Routes/Signinpage/Signinpage.jsx'
import SignUppage from './Routes/SignUppage/SignUppage.jsx'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Clerk Publishable Key");
}

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: "/", element: <Homepage /> },
      { path: "/sign-in/*", element: <Signinpage /> }, // IMPORTANT: use /* here
      { path: "/sign-up/*", element: <SignUppage /> },
      {
        element: <DashboardLayout />,
        children: [
          { path: "/dashboard", element: <Dashboardpage /> },
          { path: "/dashboard/chats/:id", element: <Chatpage /> }
        ]
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <RouterProvider router={router} />
    </ClerkProvider>
  </React.StrictMode>,
);
