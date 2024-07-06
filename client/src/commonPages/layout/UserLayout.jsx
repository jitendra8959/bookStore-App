// import React from 'react'
import { Outlet } from 'react-router-dom';
import UserHeader from '../shared/UserHeader';
import Footer from '../shared/Footer';


export default function UserLayout() {
  return (
    <div>
        <UserHeader />
            <Outlet />
        <Footer />
    </div>
  )
}
