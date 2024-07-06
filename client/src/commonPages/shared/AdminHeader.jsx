// import React from 'react'
import { Link } from 'react-router-dom'
import { commonConfig } from '../../utils/config/config'

export default function AdminHeader() {
  const APP_URL = commonConfig.APP_URL

  const toggleClass = () => {
    console.log('toggleClass')
  }

  return (
    // <div>
    //   <Link to={`/admin`}>Home</Link>&nbsp;&nbsp;
    //   <Link to={`/admin/about`}>About</Link>&nbsp;&nbsp;
    //   <Link to={`/admin/contact`}>Contact</Link>&nbsp;&nbsp;
    //   <h1>This is admin header page</h1>
    // </div>
    <header className="site-header">
        <nav className="theme_navigation closed-navbar navbar navbar-expand-lg">
            <Link className="logo" to="{name: 'AdminDashboard'}">
              <img src={`${APP_URL}/assets/images/thumbnails/bitOpsLogo.jpeg`} alt="bitops logo" className="header__logo" />
            </Link>
            <span className="navigation-toggler" onClick={toggleClass}>
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </span>
            <div className="main_menu_wrap">
                <ul className="navbar-nav main_menu">
                    <li className="nav-item">
                        <Link className="nav-link">Dashboard</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={'/admin/create-book'}>Create Book</Link>
                    </li>
                    <li className="nav-item ">
                    <Link className="nav-link" to={'/admin/carts'}>Carts</Link>
                    </li>
                    {/* <li className="nav-item ">
                        <a className="nav-link" href="#">Interviews</a>
                    </li>
                    <li className="nav-item ">
                        <a className="nav-link" href="#">Users</a>
                    </li>
                    <li className="nav-item ">
                        <a className="nav-link" href="#">Job Openings</a>
                    </li> */}
                </ul>
                <ul className="navbar-nav main_menu">
                    {/* <li className="nav-item not-hover-link">
                      <div className="site_onoffswitch" >
                        <input type="checkbox" name="onoffswitch" className="onoffswitch_checkbox" id="myonoffswitch" change="handleSwitchChange" />
                        <label className="onoffswitch_label" htmlFor="myonoffswitch">
                          <span className="onoffswitch_inner"></span>
                          <span className="onoffswitch_switch"></span>
                        </label>
                      </div>
                    </li> */}
                    <li className="nav-item not-hover-link">
                      <a className="nav-link" href="#">
                        <img className="d_navicon" src={`${APP_URL}/assets/images/icons/icn-explanation-mark.svg`} alt="Icn Explanation"/>
                        <img className="m_navicon" src={`${APP_URL}/assets/images/icons/icn-explanation-markwhite.svg`} alt="Icn Explanation"/>
                      </a>
                    </li>
                    <li className="nav-item not-hover-link">
                      <a className="nav-link" href="#">
                        <img className="d_navicon" src={`${APP_URL}/assets/images/icons/icn-bell.svg`} alt="Icn Bell" />
                        <img className="m_navicon" src={`${APP_URL}/assets/images/icons/icn-bellwhite.svg`} alt="Icn Bell"/>
                      </a>
                    </li>
                    <li className="nav-item site-dropdown not-hover-link">
                        {/* <b-dropdown size="lg" variant="link" toggle-className="text-decoration-none" no-caret>
                            <template #button-content>
                                <span className="site-dropdown-mediatext">
                                    <span className="site-dropdown-media">
                                        {{authUser ? initialsExtraction(`${authUser.first_name} ${authUser.last_name}`) : ''}}
                                        <!-- <img src="../../../../public/assets/images/icons/icn-explanation-mark.svg" alt="Icn Explanation" /> -->
                                    </span>
                                    <span className="site-dropdown-text">{{authUser?.first_name}} {{ authUser?.last_name }}</span>
                                </span>
                            </template>
                            <b-dropdown-item :to="{name: 'AdminProfile'}">Profile</b-dropdown-item>
                            <b-dropdown-item :to="{name: 'SettingComponent'}">Settings</b-dropdown-item>
                            <b-dropdown-item :to="{name: 'ChangePassword'}">Change Password</b-dropdown-item>
                            <b-dropdown-item href="#" @click="logout">Logout</b-dropdown-item>
                        </b-dropdown> */}
                    </li>
                </ul>
            </div>
        </nav>
    </header>
  )
}
