import "./AdminUserManage.scss"
import {IoSearch} from "react-icons/io5";
import {FaEdit} from "react-icons/fa";
import {FaLock} from "react-icons/fa";
import {FaLockOpen} from "react-icons/fa";
import Pagination from "../../components/Pagination";
import Avatar from "../../assets/img/avatar.jpg"
import {FaXmark} from "react-icons/fa6";
import {useEffect} from "react";

const userData: {
    userId: string,
    fullName: string,
    email: string,
    phoneNumber: string,
    role: string,
    enable: boolean
}[] = [
    {
        userId: '0123456789',
        fullName: 'Nguyễn Văn Thuận',
        email: 'thuannguyen@gmail.com',
        phoneNumber: '0905012035',
        role: 'Customer',
        enable: true
    },
    {
        userId: '0123456789',
        fullName: 'Nguyễn Văn Thuận',
        email: 'thuannguyen@gmail.com',
        phoneNumber: '0905012035',
        role: 'Customer',
        enable: true
    },
    {
        userId: '0123456789',
        fullName: 'Nguyễn Văn Thuận',
        email: 'thuannguyen@gmail.com',
        phoneNumber: '0905012035',
        role: 'Customer',
        enable: false
    },
    {
        userId: '0123456789',
        fullName: 'Nguyễn Văn Thuận',
        email: 'thuannguyen@gmail.com',
        phoneNumber: '0905012035',
        role: 'Customer',
        enable: false
    },
    {
        userId: '0123456789',
        fullName: 'Nguyễn Văn Thuận',
        email: 'thuannguyen@gmail.com',
        phoneNumber: '0905012035',
        role: 'Customer',
        enable: true
    },
    {
        userId: '0123456789',
        fullName: 'Nguyễn Văn Thuận',
        email: 'thuannguyen@gmail.com',
        phoneNumber: '0905012035',
        role: 'Customer',
        enable: true
    },
    {
        userId: '0123456789',
        fullName: 'Nguyễn Văn Thuận',
        email: 'thuannguyen@gmail.com',
        phoneNumber: '0905012035',
        role: 'Customer',
        enable: true
    },
    {
        userId: '0123456789',
        fullName: 'Nguyễn Văn Thuận',
        email: 'thuannguyen@gmail.com',
        phoneNumber: '0905012035',
        role: 'Customer',
        enable: true
    }
]
export default function AdminUserManage() {

    useEffect(() => {
        getUsers().then(data => console.log(data))
    }, [])

    const getUsers = async () => {
        const response = await fetch('http://localhost:8080/api/v1/users')
        const users = response.json();
        return users;
    }

    return (
        <div className="admin-user-manage">
            <div className="toolbar">
                <div className="search-filter">
                    <div className="search">
                        <input type="text" placeholder='Tìm kiếm...' className="search-input"/>
                        <IoSearch className='search-icon'/>
                    </div>
                    <select name="" id="role">
                        <option className="role-item" value="Customer">Customer</option>
                        <option className="role-item" value="Seller">Seller</option>
                        <option className="role-item" value="Admin">Admin</option>
                    </select>
                </div>
                <button className="approve">Duyệt Seller</button>
            </div>
            <table className="table">
                <tr className="header-row">
                    <th>ID NGƯỜI DÙNG</th>
                    <th>HỌ TÊN</th>
                    <th>EMAIL</th>
                    <th>SỐ ĐIỆN THOẠI</th>
                    <th>VAI TRÒ</th>
                    <th>HÀNH ĐỘNG</th>
                </tr>
                {userData.map((value) => {
                    let lockIcon;
                    if (value.enable) {
                        lockIcon = <FaLockOpen className="lock-icon" style={{color: 'var(--primary-color)'}}/>
                    } else {
                        lockIcon = <FaLock className="lock-icon" style={{color: 'red'}}/>
                    }
                    return <tr className="data-row">
                        <td className="id-user">{value.userId}</td>
                        <td className="full-name">{value.fullName}</td>
                        <td className="email">{value.email}</td>
                        <td className="phone-number">{value.phoneNumber}</td>
                        <td className="role">{value.role}</td>
                        <td className="action">
                            <FaEdit className="edit-icon"/>
                            {lockIcon}
                        </td>
                    </tr>
                })}
            </table>
            <Pagination/>
            <div className="information-card">
                <img src={Avatar} alt="" className="avatar"/>
                <div className="information">
                    <span className="user-id"><strong>ID người dùng:</strong> 0123456789</span>
                    <span className="full-name"><strong>Họ và tên:</strong> Nguyễn Văn Thuận</span>
                    <span className="email"><strong>Email:</strong> thuannguyen@gmail.com</span>
                    <span className="phone-number"><strong>Số điện thoại:</strong> 0905030144</span>
                    <span className="role"><strong>Vai trò:</strong> Customer</span>
                    <span className="user-name"><strong>Tên đăng nhập:</strong> thuannguyen0905</span>
                    <span className="password"><strong>Mật khẩu:</strong> 123456789</span>
                    <span className="status"><strong>Trạng thái tài khoản:</strong> Active</span>
                    <span className="date-create"><strong>Ngày tạo:</strong> 20/03/2024</span>
                    <span className="creator-id"><strong>ID người tạo:</strong> 0123456789</span>
                    <span className="date-update"><strong>Ngày cập nhật:</strong> 21/03/2024</span>
                    <span className="user-update-id"><strong>ID người cập nhật:</strong> 0123456789</span>
                </div>
                <FaXmark className="close-icon"/>
            </div>
        </div>
    )
}