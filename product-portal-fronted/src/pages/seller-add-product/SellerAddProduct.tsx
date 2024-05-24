import { FaArrowLeft, FaPlus, FaSave, FaUpload } from "react-icons/fa"
import "./SellerAddProduct.scss"
import { Link } from "react-router-dom"
export default function SellerAddProduct() {
    return (
        <div className="wrapper-seller-add-product">
            <form action="" className="seller-add-product">                
                <span className="infor-title">THÔNG TIN SẢN PHẨM</span>
                <div className="prod-information">
                    <div className="prod-img-wrapper">
                        <label htmlFor="prod-img-upload-input" className="upload-img-label">
                            <FaUpload className="upload-icon"/>
                            Tải ảnh lên                            
                        </label>
                        <img src={require('../../assets/img/product.png')} alt="" id="prod-img" />
                        <input type="file" src="" alt="" id="prod-img-upload-input" accept='.png, .jpg, .jpeg, .gif'/>
                    </div>
                    <div className="prod-infor-content">
                        <div className="prod-name-wrapper">
                            <label htmlFor="prod-name-input" className="prod-name-label">Tên sản phẩm<span style={{color: 'red'}}>*</span></label>
                            <input type="text" name="" id="prod-name-input" placeholder="Nhập tên sản phẩm"/>
                        </div>
                        <div className="category-name-wrapper">
                            <label htmlFor="category" className="category-name-label">Danh mục sản phẩm<span style={{color: 'red'}}>*</span></label>
                            <select name="" id="category">
                                <option value="Telephone">Điện thoại di động</option>
                                <option value="Laptop">Laptop</option>
                                <option value="PC">PC</option>
                            </select>
                        </div>
                        <div className="prod-link-wrapper">
                            <label htmlFor="prod-link-input" className="prod-link-label">Link sản phẩm<span style={{color: 'red'}}>*</span></label>
                            <input type="url" name="" id="prod-link-input" placeholder="Dán URL"/>
                        </div>
                        <div className="note-wrapper">
                            <label htmlFor="note" className="note-label">Ghi chú</label>
                            <input type="text" id="note-input" placeholder="Nhập ghi chú (nếu có)"/>
                        </div>
                    </div>
                </div>
                <span className="prod-relation-title">SẢN PHẨM LIÊN QUAN</span>
                <div className="prod-relation">
                    <div className="prod-relation-infor-row">
                        <div className="prod-relation-name-wrapper">
                            <label htmlFor="prod-relation-name-input" className="prod-relation-name-label">Tên sản phẩm</label>
                            <input type="text" id="prod-relation-name-input" placeholder="Nhập tên sản phẩm"/>
                        </div>
                        <div className="prod-relation-link-wrapper">
                            <label htmlFor="prod-relation-link-input" className="prod-relation-link-label">Link sản phẩm</label>
                            <input type="url" id="prod-relation-link-input" placeholder="Dán URL"/>
                        </div>
                    </div>
                    <button className="add-product-button">Thêm <FaPlus className="plus-icon"/></button>
                </div>
                <div className="save-cancel">
                    <button className="save-button">
                        Lưu
                        <FaSave className="save-icon"/>
                    </button>
                    <Link to="/seller" className="cancel-button">
                        Trở lại
                        <FaArrowLeft className="cancel-icon"/>
                    </Link>
                </div>
            </form>
        </div> 
    )
}