import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../../../stores/auth/authSlice'
import { doRegister } from '../../../services/auth/actions'
import { commonConfig } from '../../../utils/config/config'

export default function Login() {
    const APP_URL = commonConfig.APP_URL
    const dispatch = useDispatch()
    // const authUser = useSelector((state) => state.auth.authUser)
    // console.log('count', authUser)

    const [postData, setPostData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setPostData({ ...postData, [name]: value });
    }

    const handleSubmit = async (e) => {
      if (e && e.preventDefault) {
        e.preventDefault();
        const res = await doRegister(postData);
        dispatch(register(res));
      }
    }

    return (
        <section className="site-section login_section admin_login">
          <div className="login_form_container">
            <div className="login_form_head">
             <div className="site_icon_wrapper">
              <img src={`${APP_URL}/assets/images/thumbnails/bitOpsLogo.jpeg`} alt="image" />
             </div>
            </div>
            <div className="login_form_body">
             <h1 className="display-4 site_title">Signup to continue</h1>
             <div className="login_form_box">
              <form onSubmit={handleSubmit}>
                <fieldset className="site-fieldset">
                <div className="form-group">
                  <label className="site_input_label">Name</label>
                  <input type="text" className="site_input site_input_lg" placeholder="Name" autoComplete="name" name="name" onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label className="site_input_label">Email address</label>
                  <input type="email" className="site_input site_input_lg" placeholder="Email" autoComplete="email" name="email" onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label className="site_input_label">Password</label>
                  <div className="input_icon_wrapper">
                    <input type="password" className="site_input site_input_lg"  placeholder="Password" autoComplete="password" name="password" onChange={handleChange} />
                    <span><img src={`${APP_URL}/assets/images/icons/show_hide.svg`} alt="eye_icon" /></span>
                  </div>
                </div>
               </fieldset>
                <div className="site_btn_wrapper">
                  <button type="submit" className="theme-btn theme-primary theme-btn-lg w-100">Submit</button>
                </div>
                <div className="site_link_wrapper"><Link to={'ForgotPassword'} className="site_link">Forgot Password?</Link></div>
              </form>
             </div>
            </div>
          </div>
      </section>
    )
}
