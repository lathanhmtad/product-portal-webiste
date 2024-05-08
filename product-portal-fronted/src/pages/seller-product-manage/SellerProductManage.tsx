import { IoSearch } from "react-icons/io5"
import "./SellerProductManage.scss"
import { FaEdit, FaPlus, FaTrashAlt } from "react-icons/fa"
// import Pagination from "../../components/Pagination"
import { Link } from "react-router-dom"
const productData: {
    prodId: number,
    imgName: string,
    prodName: string,
    postDate: string,
    category: string
}[] = [
    {
        prodId: 1,
        imgName: 'product.png',
        prodName: 'iPhone 14 Pro Max 128GB',
        postDate: '02/02/2024',
        category: 'Điện thoại di động'
    },
    {
        prodId: 2,
        imgName: 'product.png',
        prodName: 'iPhone 14 Pro Max 128GB',
        postDate: '02/02/2024',
        category: 'Điện thoại di động'
    },
    {
        prodId: 3,
        imgName: 'product.png',
        prodName: 'iPhone 14 Pro Max 128GB',
        postDate: '02/02/2024',
        category: 'Điện thoại di động'
    },
    {
        prodId: 4,
        imgName: 'product.png',
        prodName: 'iPhone 14 Pro Max 128GB',
        postDate: '02/02/2024',
        category: 'Điện thoại di động'
    },
    {
        prodId: 5,
        imgName: 'product.png',
        prodName: 'iPhone 14 Pro Max 128GB',
        postDate: '02/02/2024',
        category: 'Điện thoại di động'
    }
]
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
                            <option className="role-item" value="Telephone">Điện thoại di động</option>
                            <option className="role-item" value="Laptop">Laptop</option>
                            <option className="role-item" value="PC">PC</option>
                        </select>
                    </div>            
                    <Link to='/seller/add-product' className="add-product">Thêm sản phẩm <FaPlus className="plus-icon"/></Link>
                </div>
                <table className="table">
                    <thead className="table-header">
                        <tr className="header-row">
                            <th>HÌNH ẢNH</th>
                            <th>TÊN SẢN PHẨM</th>
                            <th>NGÀY ĐĂNG BÁN</th>
                            <th>DANH MỤC</th>
                            <th>HÀNH ĐỘNG</th>
                        </tr>
                    </thead>
                    <tbody className="table-body">
                        {productData.map((value) => {
                            return <tr key={value.prodId} className="data-row">
                                <td className="prod-img"><img src={require(`../../assets/img/${value.imgName}`)} alt="" /></td>
                                <td className="prod-name">{value.prodName}</td>
                                <td className="post-date">{value.postDate}</td>
                                <td className="category">{value.category}</td>
                                <td className="action">
                                    <FaEdit className="edit-icon"/>
                                    <FaTrashAlt className="delete-icon"/>
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
                {/*<Pagination />*/}
            </div>
        </div>
    )
}