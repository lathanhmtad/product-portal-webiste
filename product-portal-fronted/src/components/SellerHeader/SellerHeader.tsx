import "./SellerHeader.scss"
import Logo from "../../assets/imgs/logo.jpg"
import { FaBell, FaRegSun, FaUserCircle } from "react-icons/fa"
import { Link } from "react-router-dom"
import UserSubNav from "../UserSubnav"
export default function SellerHeader() {
    return (
        <div className="wrapper-seller-header">
            <header className="seller-header">
                <Link to='/' className="seller-header-logo-link">
                    <img src={Logo} alt="" className="seller-header-logo" />
                </Link>
                <div className="noti-user">
                    <Link to='/seller' className="noti">
                        <FaBell className="noti-icon"/>
                    </Link>
                    <div className="user">
                        <img src={require(`../../assets/img/avatar.jpg`)} alt="" className="user-avatar" />
                        <UserSubNav/>
                    </div>
                </div>
            </header>
        </div>
    )
}