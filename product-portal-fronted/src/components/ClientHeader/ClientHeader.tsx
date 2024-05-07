import logo from '../../assets/imgs/logo.jpg'
import {Link} from "react-router-dom";
import './ClientHeader.scss'
import { IoSearch } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";

export default function ClientHeader() {
    const categories: {
        cateLink: string,
        cateName: string,
        subCate: {
            subCateLink: string,
            subCateName: string
        }[]
    }[] = [
        {
            cateLink: 'super-products',
            cateName: 'Đồ điện tử',
            subCate : [
                {
                    subCateLink: 'sub-products',
                    subCateName: 'Điện thoại di động'
                },
                {
                    subCateLink: 'maytinh',
                    subCateName: 'PC và Laptop'
                },
                {
                    subCateLink: 'phukien',
                    subCateName: 'Phụ kiện'
                },
                {
                    subCateLink: 'amthanh',
                    subCateName: 'Thiết bị âm thanh'
                },
                {
                    subCateLink: 'giadung',
                    subCateName: 'Thiết bị gia dụng'
                },
                {
                    subCateLink: 'khac',
                    subCateName: 'Thiết bị khác'
                }
            ]
        },
        {
            cateLink: 'suckhoe',
            cateName: 'Sức khỏe',
            subCate : [
                {
                    subCateLink: 'thucphamchucnang',
                    subCateName: 'Thực phẩm chức năng'
                },
                {
                    subCateLink: 'thietbiyte',
                    subCateName: 'Thiết bị y tế'
                },
                {
                    subCateLink: 'chamsoccanhan',
                    subCateName: 'Chăm sóc cá nhân'
                },
                {
                    subCateLink: 'dungcuthethao',
                    subCateName: 'Dụng cụ thể thao'
                }
            ]
        },
        {
            cateLink: 'lamdep',
            cateName: 'Làm đẹp',
            subCate : [
                {
                    subCateLink: 'chamsocda',
                    subCateName: 'Chăm sóc da'
                },
                {
                    subCateLink: 'chamsoctoc',
                    subCateName: 'Chăm sóc tóc'
                },
                {
                    subCateLink: 'chamsoccothe',
                    subCateName: 'Chăm sóc cơ thể'
                },
                {
                    subCateLink: 'trangdiem',
                    subCateName: 'Trang điểm'
                }
            ]
        },
        {
            cateLink: 'thucpham',
            cateName: 'Thực phẩm',
            subCate : [
                {
                    subCateLink: 'traicayvarauqua',
                    subCateName: 'Trái cây và rau quả'
                },
                {
                    subCateLink: 'thitvagiacam',
                    subCateName: 'Thịt và gia cầm'
                },
                {
                    subCateLink: 'cavahaisan',
                    subCateName: 'Cá và hải sản'
                },
                {
                    subCateLink: 'trung',
                    subCateName: 'Trứng'
                },
                {
                    subCateLink: 'sanphamtusua',
                    subCateName: 'Sản phẩm từ sữa'
                },
                {
                    subCateLink: 'cacloaihat',
                    subCateName: 'Các loại hạt'
                },
                {
                    subCateLink: 'giavi',
                    subCateName: 'Gia vị'
                }
            ]
        },
        {
            cateLink: 'douong',
            cateName: 'Đồ uống',
            subCate : [
                {
                    subCateLink: 'cacloainuoc',
                    subCateName: 'Các loại nước'
                },
                {
                    subCateLink: 'sua',
                    subCateName: 'Sữa'
                },
                {
                    subCateLink: 'cafevatra',
                    subCateName: 'Cà phê và trà'
                },
                {
                    subCateLink: 'ruoubia',
                    subCateName: 'Rượu bia'
                }
            ]
        },
        {
            cateLink: 'quanao',
            cateName: 'Quần áo',
            subCate : [
                {
                    subCateLink: 'donam',
                    subCateName: 'Đồ nam'
                },
                {
                    subCateLink: 'donu',
                    subCateName: 'Đồ nữ'
                },
                {
                    subCateLink: 'phukiendikem',
                    subCateName: 'Phụ kiện đi kèm'
                }
            ]
        },
        {
            cateLink: 'noithat',
            cateName: 'Nội thất',
            subCate : [
                {
                    subCateLink: 'dogo',
                    subCateName: 'Đồ gỗ'
                },
                {
                    subCateLink: 'dokimloai',
                    subCateName: 'Đồ kim loại'
                },
                {
                    subCateLink: 'donhua',
                    subCateName: 'Đồ nhựa'
                },
                {
                    subCateLink: 'doda',
                    subCateName: 'Đồ đá'
                }
            ]
        },
        {
            cateLink: 'sach',
            cateName: 'Sách',
            subCate : [
                {
                    subCateLink: 'hucau',
                    subCateName: 'Hư cấu'
                },
                {
                    subCateLink: 'phihucau',
                    subCateName: 'Phi hư cấu'
                },
                {
                    subCateLink: 'sachthieunhi',
                    subCateName: 'Sách thiếu nhi'
                },
                {
                    subCateLink: 'sachgiaoduc',
                    subCateName: 'Sách giáo dục'
                }
            ]
        }
    ]
    return (
        <div className="wrapper-client-header">
            <ul className='client-header'>
                <li>
                    <Link to='/'>
                        <img src={logo} alt='logo' className='logo'/>
                    </Link>
                </li>
                <ul className='sub-header'>
                    <li>
                        <Link className='active' to={'/'}>Trang chủ</Link>
                    </li>
                    <li>
                        <Link to={'/'}>Giới thiệu</Link>
                    </li>
                    <li className='categories'>
                        Danh mục sản phẩm
                        <FaAngleDown className='down-icon'/>
                        <ul className="categories-list">
                            {categories.map((value) => {
                                return <li className="super-categories">
                                    <Link to={value.cateLink}>{value.cateName}</Link>
                                    {value.subCate.map((subValue) => {
                                        return <li className="sub-categories">
                                            <Link to={subValue.subCateLink}>{subValue.subCateName}</Link>
                                        </li>
                                    })}
                                </li>
                            })}
                        </ul>
                    </li>
                    <li>
                        <Link to={'/'}>Seller</Link>
                    </li>
                    <li>
                        <Link to={'/'}>Liên hệ</Link>
                    </li>
                </ul>
                <li className='search'>
                    <input type="text" placeholder='Bạn tìm gì hôm nay...'/>
                    <IoSearch className='search-icon'/>
                </li>
                <li className='auth'>
                    <FaUser className='user-icon'/>
                    <Link to={'/sign-in'}>Đăng nhập/Đăng ký</Link>
                </li>
            </ul>
        </div>
    )
}