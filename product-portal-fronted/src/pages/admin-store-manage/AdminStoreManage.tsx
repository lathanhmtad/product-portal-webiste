import { FaEdit } from "react-icons/fa";
import Pagination from "../../components/Pagination";
import { IoSearch } from "react-icons/io5";
import { FaLock } from "react-icons/fa";
import { FaLockOpen } from "react-icons/fa";
import "./AdminStoreManage.scss"
const storeData: {
    storeId: string,
    storeName: string,
    sellerId: string, 
    dateRegis: string,
    enable: boolean
}[] = [
    {
        storeId: 'CH00001',
        storeName: 'FPTShop',
        sellerId: '0123456789',
        dateRegis: '03/03/2024',
        enable: true
    },
    {
        storeId: 'CH00001',
        storeName: 'FPTShop',
        sellerId: '0123456789',
        dateRegis: '03/03/2024',
        enable: true
    },
    {
        storeId: 'CH00001',
        storeName: 'FPTShop',
        sellerId: '0123456789',
        dateRegis: '03/03/2024',
        enable: true
    },
    {
        storeId: 'CH00001',
        storeName: 'FPTShop',
        sellerId: '0123456789',
        dateRegis: '03/03/2024',
        enable: false
    },
    {
        storeId: 'CH00001',
        storeName: 'FPTShop',
        sellerId: '0123456789',
        dateRegis: '03/03/2024',
        enable: true
    },
    {
        storeId: 'CH00001',
        storeName: 'FPTShop',
        sellerId: '0123456789',
        dateRegis: '03/03/2024',
        enable: false
    },
    {
        storeId: 'CH00001',
        storeName: 'FPTShop',
        sellerId: '0123456789',
        dateRegis: '03/03/2024',
        enable: true
    }
]
export default function AdminStoreManage() {
    return (
        <div className="admin-store-manage">
            <div className="search-filter">
                <div className="search">
                    <input type="text" placeholder='Tìm kiếm...' className="search-input"/>
                    <IoSearch className='search-icon'/>
                </div>
            </div>
            <table className="table">
                <tr className="header-row">
                    <th>ID CỬA HÀNG</th>
                    <th>TÊN CỬA HÀNG</th>
                    <th>ID SELLER</th>
                    <th>NGÀY ĐĂNG KÝ</th>
                    <th>HÀNH ĐỘNG</th>
                </tr>
                {storeData.map((value) => {
                    let enaIcon;
                    if (value.enable) {
                        enaIcon = <FaLockOpen className="lock-icon" style={{color: 'var(--primary-color)'}}/>
                    } else {
                        enaIcon = <FaLock className="lock-icon" style={{color: 'red'}}/>
                    }
                    return <tr className="data-row">
                        <td className="store-id">{value.storeId}</td>
                        <td className="store-name">{value.storeName}</td>
                        <td className="seller-id">{value.sellerId}</td>
                        <td className="date-regis">{value.dateRegis}</td>
                        <td className="action">
                            <FaEdit className="edit-icon"/>
                            {enaIcon}
                        </td>
                    </tr>
                })}
            </table>
            <Pagination />
            
        </div>
    )
}