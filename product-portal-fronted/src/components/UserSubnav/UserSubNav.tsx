import { Link } from "react-router-dom"
import "./UserSubNav.scss"
import { FaQuestionCircle, FaRegSun, FaSignOutAlt, FaUser } from "react-icons/fa"
export default function UserSubNav() {
    return (
        <ul className="user-subnav">
            <li>
                <img src={require(`../../assets/img/avatar.jpg`)} alt="" className="user-avatar" />
                <span className="user-name">Seller Name</span>
            </li>
            <li>
                <Link to='/' className="user-info">
                    <FaUser className="user-icon"/>
                    Thông tin cá nhân
                </Link>
            </li>
            <li>
                <Link to='/' className="setting">
                    <FaRegSun className="setting-icon" />
                    Cài đặt
                </Link>
            </li>
            <li>
                <Link to='/' className="support">
                    <FaQuestionCircle className="support-icon" />
                    Hỗ trợ
                </Link>
            </li>
            <li>
                <Link to='/sign-in' className="log-out">
                    <FaSignOutAlt className="log-out-icon"/>
                    Đăng xuất
                </Link>
            </li>
        </ul>
    )
}