// import React from 'react'
import { Outlet } from 'react-router-dom';


export default function AdminLayout() {
  return (
    <main className="site-wrapper site-auth-wrapper">
        <div className="main-cont-wrapper">
            <Outlet />
        </div>
    </main>
  )
}
