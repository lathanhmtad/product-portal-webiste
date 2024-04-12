import "./SellerHeader.scss"
import Logo from "../../assets/img/logo.jpg"
import { FaBell, FaRegSun, FaUserCircle } from "react-icons/fa"
import { Link } from "react-router-dom"
export default function SellerHeader() {
    return (
        <div className="wrapper-seller-header">
            <header className="seller-header">
                <img src={Logo} alt="" className="seller-header-logo" />
                <div className="noti-setting-user">
                    <Link to="/seller" className="setting">
                        <FaRegSun className="setting-icon" />
                    </Link>
                    <Link to='/seller' className="noti">
                        <FaBell className="noti-icon"/>
                    </Link>
                    <div className="user">
                        <FaUserCircle className="user-icon" />
                        <span className="user-name">Administrator</span>
                    </div>
                </div>
            </header>
        </div>
    )
}