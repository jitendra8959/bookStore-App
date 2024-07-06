// import React from 'react'
import { Outlet } from 'react-router-dom';
import AdminHeader from '../shared/AdminHeader';
import Footer from '../shared/Footer';


export default function AdminLayout() {
  return (
    <main className="site-wrapper site-admin-wrapper">
        <AdminHeader />
        <div className="main-cont-wrapper">
            <Outlet />
        </div>

        <Footer />
    </main>
  )
}
