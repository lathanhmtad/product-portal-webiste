import "./SignIn.scss"
import { FaRegUserCircle } from "react-icons/fa";
import { AiOutlineKey } from "react-icons/ai";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
export default function SignIn() {
    return (
        <div className="wrapper-sign-in">
            <Link to='/' className="back-to-index">{`<`} Trở về trang chủ</Link>
            <div className="sign-in">
                <span className="title">Đăng nhập <span style={{color: 'var(--primary-color)', fontWeight: 'bold'}}>EPMALL</span></span>
                <form action="" className="sign-in-form">
                    <div className="wrapper-username">
                        <FaRegUserCircle className="username-icon"/>
                        <input type="text" className="username-input" placeholder="Tên đăng nhập"/>
                    </div>
                    <div className="wrapper-password">
                        <AiOutlineKey className="password-icon" />
                        <input type="password" name="" id="" className="password-input" placeholder="Mật khẩu"/>
                        <FaEye className="show-password-icon"/>
                    </div>
                    <Link to='/' className="forget-password">Quên mật khẩu?</Link>
                    <button className="login-button">Đăng nhập</button>
                </form>
                <span className="register-content">Bạn chưa có tài khoản? <Link to='/sign-up' className="register-link">Đăng ký</Link></span>
            </div>
        </div>
    )
}