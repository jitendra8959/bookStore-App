// import React from 'react'
// import { Link } from 'react-router-dom'
import { commonConfig } from '../../../utils/config/config'

export default function Login() {
  const APP_URL = commonConfig.APP_URL

  return (
    <section className="site-section login_section">
      <div className="login_form_container">
        <div className="login_form_head">
            <div className="site_icon_wrapper">
                <img src={`${APP_URL}/assets/images/thumbnails/bitOpsLogo.png`} alt="image" />
            </div>
        </div>
        <div className="login_form_body">
            <h1 className="display-4 site_title">Sign in to continue to Bitcot.</h1>
            <div className="login_form_box">
                <form>
                    <fieldset className="site-fieldset">
                        <div className="form-group">
                            <label htmlFor="user_email" className="site_input_label">Email address</label>
                            <input type="email" className="site_input site_input_lg" placeholder="Email" />
                        </div>
                    </fieldset>
                    <div className="site_btn_wrapper ">
                        <button type="submit" className="theme-btn theme-primary theme-btn-lg w-100">Submit</button>
                    </div>
                    <div className="google-signin-button-wrappere mt-3">
                        <div className="google-signin-button"></div>
                    </div>
                </form>   
            </div>
        </div>
      </div>
    </section>
  )
}
