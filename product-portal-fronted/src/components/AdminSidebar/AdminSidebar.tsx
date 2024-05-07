import {FaUser} from "react-icons/fa";
import {FaStore} from "react-icons/fa";
import {FaRegSun} from "react-icons/fa";
import {FaSignOutAlt} from "react-icons/fa";
import "./AdminSidebar.scss"
import {Link, useLocation} from "react-router-dom";
import {MdOutlineDashboard} from "react-icons/md";
import {useEffect, useState} from "react";

export default function AdminSidebar() {
    const location = useLocation()
    const [pathname, setPathname] = useState('')
    useEffect(() => {
        setPathname(location.pathname)
    }, [location.pathname])

    return (
        <div className="admin-sidebar">
            <div className="manage">
                <Link to="/admin" className={`manage-dashboard ${pathname === '/admin' ? 'bg-success' : ''}`}>
                    <MdOutlineDashboard className='dashboard-icon'/>
                    <span className="manage-dashboard-content">Dashboard</span>
                </Link>
                <Link to="/admin/sellers"
                      className={`manage-user ${pathname === '/admin/sellers' ? 'bg-success' : ''}`}>
                    <FaUser className="user-icon"/>
                    <span className="manage-user-content">Quản lý seller</span>
                </Link>
                <Link to="/admin/stores"
                      className={`manage-store ${pathname === '/admin/stores' ? 'bg-success' : ''}`}>
                    <FaStore className="store-icon"/>
                    <span className="manage-store-content">Quản lý cửa hàng</span>
                </Link>
            </div>
            <div className="functional">
                <Link to="/admin" className="setting">
                    <FaRegSun className="setting-icon"/>
                    <span className="setting-content">Cài đặt</span>
                </Link>
                <Link to="/sign-in" className="logout">
                    <FaSignOutAlt className="logout-icon"/>
                    <span className="logout-content">Đăng xuất</span>
                </Link>
            </div>
        </div>
    )
}