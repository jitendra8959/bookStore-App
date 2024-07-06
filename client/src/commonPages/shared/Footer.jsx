// import React from 'react'

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="copy-text text-center">
        ©{ currentYear } <a href="https://www.bitcot.com/" target="_blank" className="link-effect">BitCot</a>
      </div>
    </footer>
  )
}
