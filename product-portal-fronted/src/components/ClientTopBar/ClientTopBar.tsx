import logo from '../../assets/logo.jpg'
import {Link} from "react-router-dom";
import Search from "antd/es/input/Search";
import './ClientTopBar.scss'

export default function ClientTopBar() {
    return (
        <ul className='client-topbar'>
            <li>
                <img src={logo} alt='logo'/>
            </li>
            <li>
                <Link to='/'>
                    Trang chủ
                </Link>
            </li>
            <li>
                <Link to='/categories'>
                    Trang danh mục
                </Link>
            </li>
            <li>
                <Link to='/products'>
                    Trang sản phẩm
                </Link>
            </li>
            <li>
                <Search size='large' placeholder="input search text" enterButton/>
            </li>
            <li>
                <Link to='/'>
                    Đăng nhập
                </Link>
                /
                <Link to='/'>
                    Đăng ký
                </Link>
            </li>
        </ul>
    )
}