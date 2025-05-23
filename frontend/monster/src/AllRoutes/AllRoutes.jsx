import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import Login from '../Pages/Login/Login'
import Signup from '../Pages/Signup/Signup'
import AdminLogin from '../Pages/AdminLogin/AdminLogin'
import JobPage from '../Pages/JobPage/JobPage'
import AdminDashboard from '../Pages/AdminDashboard/AdminDashboard'
import JobDescription from '../Pages/JobPage/JobDescription/JobDescription'
import Adminligin from '../Pages/AdminLogin/Adminligin'
import Service from '../Pages/AdminLogin/Service'
import Service1 from '../Pages/AdminLogin/Service1'
import Userdetails from '../Components/Userdetails'
import JobsData from '../Pages/AdminDashboard/JobsData'
import Userdata from '../Pages/AdminDashboard/Userdata'
import RequiredAuth from '../hoc/RequiredAuth'


const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/adminlogin" element={<Adminligin/>}/>
            <Route path="/Userdetails" element={<Userdetails/>}/>
            <Route path="/service/:id" element={<Service />}/>
            <Route path="/service1/:id" element={<Service1 />}/>
            <Route path="/user/login" element={<Login />}/>
            <Route path="/user/signup" element={<Signup />}/>
            <Route path="/adminlogin" element={<AdminLogin />}/>
            <Route path="/jobs" element={
            
            <JobPage />
            
            }/>
            <Route path="/jobs/:id" element={
              <RequiredAuth>
            <JobDescription />
            </RequiredAuth>
            }/>
            <Route path="/admindashboard" element={<AdminDashboard />}/>
            <Route path="/admindashbord/jobsdata" element={<JobsData/>}/>
            <Route path="/admindashbord/userdata" element={<Userdata/>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes