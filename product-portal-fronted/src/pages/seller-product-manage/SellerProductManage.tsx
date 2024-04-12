import { IoSearch } from "react-icons/io5"
import "./SellerProductManage.scss"
export default function SellerProductManage() {
    return (
        <div className="wrapper-seller-product-manage">
            <div className="seller-product-manage">
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
            </div>
        </div>
    )
}