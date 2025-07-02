import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AboutPage from './pages/AboutPage'
import HomePage from './pages/HomePage'
import ContactPage from './pages/ContactPage'
import LandingPage from './pages/LandingPage'
import Dashboard from './pages/Dashboard'
import NavBar from './pages/NavBar'
import Layout from './pages/Layout'

import './App.css'



const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: '/about', element: <AboutPage />},
        { path: '/home', element: <HomePage />},
        { path: '/contact', element: <ContactPage />}
      ]
    }
  ])

  return (
    <>
      
      <RouterProvider router={router} />
      <LandingPage />
      <h1>Welcome to the App</h1>
    </>
  )
}

export default App

// NavBar - /
// About Page - /about
// Home Page /home
// Contact Page /contact
