import React, { useEffect } from 'react'
import './DashboardLayout.css'
import { Outlet, useNavigate, useNavigation } from 'react-router-dom'
import { useAuth } from '@clerk/clerk-react'
import ChatList from '../../Components/ChatList/ChatList'

const DashboardLayout = () => {

  const {userId,isLoaded}=useAuth();

  const navigate = useNavigate();

  useEffect(()=>{ 
    if(isLoaded && !userId){
      const timer = setTimeout(() => {
        navigate("/sign-in");
      }, 500); // 0.5 second delay
      return () => clearTimeout(timer);
    }
  },[isLoaded, userId, navigate]);

  if(!isLoaded) return "loading....."

  return (
    <div className='dashboardLayout'>
        <div className="menu"><ChatList/></div>
        <div className="content"><Outlet/></div>
      
    </div>
  )
}

export default DashboardLayout
