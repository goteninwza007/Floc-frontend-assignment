import React, { useState, useEffect, useContext, useMemo } from 'react'
import ReactDOM from 'react-dom/client'
import LoginModal from '@/component/LoginModal'
import App from '@/App.jsx'
import JobDetails from '@/JobDetails'
import TopNavBar from '@/component/TopNavBar'
import AuthContext from '@/context/AuthContext'
import '@/index.css'
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";

const RootComponent = () => {
  const [showModal, setShowModal] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false)


  const handleLogin = (email, password) => {
    if (email === 'floc' && password === 'Thi$isTest1ng.') {
      localStorage.setItem('Auth', JSON.stringify({ userName: email, isAuthenticated: true }));
      setIsAuthenticated(true)
      setShowModal(false)
      redirect('/')
    }
  }
  const handleLogout = () => {
    localStorage.removeItem('Auth');
    setIsAuthenticated(false)
    redirect('/')
  }
  useEffect(() => {
    const userAuth = JSON.parse(localStorage.getItem('Auth'));
    if (userAuth?.isAuthenticated) {
      setIsAuthenticated(true)
    }
    else {
      setIsAuthenticated(false)
    }
  }, [])


  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
    },
    {
      path: '/job-details',
      element: <JobDetails />,
    },
  ]);


  return (
    <React.StrictMode>
      <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, showModal, setShowModal }}>
        <div className='w-screen pb-20 bg-[#F6F3EE] relative'>
          <TopNavBar setShowModal={setShowModal} handleLogout={handleLogout} isAuthenticated={isAuthenticated} />
          <RouterProvider router={router} />
          <LoginModal showModal={showModal} setShowModal={setShowModal} handleLogin={handleLogin} />
        </div>
      </AuthContext.Provider>
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <RootComponent />
);