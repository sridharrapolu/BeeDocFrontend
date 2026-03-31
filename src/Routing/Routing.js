import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Home from '../Componets/Home';
import Treament from '../Componets/Treament';
import Appointment from '../Componets/Appointment';
import Contactus from '../Componets/Contactus';
import Offers from '../Componets/Offers';
import Admin from '../Admindashboard/Admin';
import Treatements from '../Admindashboard/Treatements';
import Hospitals from '../Admindashboard/Hospitals';
import Doctors from '../Admindashboard/Doctors';
import Login from '../Login/Login';
import Forgetpass from '../Login/Forgetpass';
import Register from '../Login/Register';
import SubTreatements from '../Admindashboard/SubTreatements';
import UISubtreatements from '../Main/UISubtreatements';
import UIdoctor from '../Main/UIdoctors';
import Docappointment from '../Main/Docappointment';
import RegisterAdmin from '../Admindashboard/RegisterAdmin';
import ProtectedRoute from "./ProtectedRoute";
import AdminAppointments from '../Admindashboard/AdminAppointments';
import DoctorDashboard from '../Doctordashboard/DoctorDashboard';
import Doctorappointments from '../Doctordashboard/Doctorappointments';
import Doctorprofile from '../Doctordashboard/Doctorprofile';
import Doctorlogin from "../Doctordashboard/Doctorlogin";
// import adminOffers from '../Admindashboard/offers';
const Routing = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/treament' element={<Treament />} />
      <Route path='/appointment' element={<Appointment />} />
      <Route path='/contactus' element={<Contactus />} />
      <Route path='/login' element={<Login />} />
      <Route path='/forgotpassword' element={<Forgetpass />} />
      <Route path='/register' element={<Register />} />
      <Route path='/offers' element={<Offers />} />
      <Route path="/treatment/:treatmentId" element={<UISubtreatements />} />
      <Route path='/doctors/:treatmentId' element={<UIdoctor />} />
      <Route path='/Docappointment' element={<Docappointment />} />
      <Route path="/admin" element={<ProtectedRoute>  <Admin /> </ProtectedRoute>}>
        <Route index element={<Navigate to="treatments" />} />
        <Route path="treatments" element={<Treatements />} />
        <Route path="subtreatments/:treatmentId" element={<SubTreatements />} />
        <Route path="hospitals" element={<Hospitals />} />
        <Route path="doctors" element={<Doctors />} />
        <Route path="adminappointment" element={<AdminAppointments />} />
        <Route path="registeradmin" element={<RegisterAdmin />} />
      </Route>
      <Route path="/doctorlogin" element={<Doctorlogin />} />
      <Route path="doctordashbord" element={<DoctorDashboard />}>
        {/* default page */}
        <Route index element={<div>Dashboard Home</div>} />
        {/* child routes */}
        <Route path="doctorappointments" element={<Doctorappointments />} />
        <Route path="doctorprofile" element={<Doctorprofile />} />
        {/* <Route path="notifications" element={<div>Notifications</div>} /> */}
        {/* <Route path="profile" element={<div>Profile</div>} /> */}
        {/* <Route path="system" element={<div>System</div>} /> */}
      </Route>
    </Routes >
  )
}
export default Routing