// import React from 'react'
import { Link } from 'react-router-dom'

export default function UserHeader() {
  return (
    <div>
      <Link to={`/`}>Home</Link>&nbsp;&nbsp;
      <Link to={`/about`}>About</Link>&nbsp;&nbsp;
      <Link to={`/contact`}>Contact</Link>&nbsp;&nbsp;
      <h1>This is user header page</h1>
    </div>
  )
}
