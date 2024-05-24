import Logo from "../../assets/img/logo.jpg"
import { FaBell } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import "./AdminHeader.scss"
export default function AdminHeader() {
    return (
        <div className="wrapper-admin-header">
            <header className="admin-header">
                <img src={Logo} alt="" className="admin-header-logo" />
                <div className="noti-user">
                    <FaBell className="noti-icon"/>
                    <div className="user">
                        <FaUserCircle className="user-icon" />
                        <span className="user-name">Administrator</span>
                    </div>
                </div>
            </header>
        </div>
    )
}