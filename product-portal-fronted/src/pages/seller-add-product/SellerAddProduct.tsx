import { FaArrowLeft, FaPlus, FaSave, FaUpload } from "react-icons/fa"
import "./SellerAddProduct.scss"
import { Link } from "react-router-dom"
import {Button, Col, Form, FormProps, Input, Row, Upload} from "antd";
import {PlusOutlined} from "@ant-design/icons";
import {SellerRequest} from "../../models/User";
import useSellerAddProductViewModel from "./SellerAddProduct.vm";
export default function SellerAddProduct() {
    const {
        form,
        loading,
        handleAvatarFileChange,
        handleOpenPreview,
        avatarFile,
        handleFormSubmit,
        setLoading,
        storeImageFiles,
        handleChangeStoreImage
    } = useSellerAddProductViewModel()

    const onFinish: FormProps<SellerRequest>['onFinish'] = (values) => {
        setLoading(true)
        handleFormSubmit(values)
    };

    return (
        <div className="wrapper-seller-add-product">
            <Form
                form={form}
                name="seller-register"
                className='seller-add-product'
                onFinish={onFinish}
                disabled={loading ? true : false}
                autoComplete="off"
            >
                <span className="infor-title">THÔNG TIN SẢN PHẨM</span>

                <div className="prod-information">
                    <div className='seller-avatar' style={{width: '25%', marginRight: 24}}>
                        <Form.Item
                            name="avatarFile"
                            labelCol={{span: 24}}
                            label="Hình đại diện của bạn"
                            rules={[{required: true, message: 'Vui lòng tải hình đại diện của bạn!'}]}
                        >
                            <Upload
                                maxCount={1}
                                fileList={avatarFile}
                                beforeUpload={() => false}
                                listType="picture-card"
                                onChange={handleAvatarFileChange}
                                onPreview={handleOpenPreview}
                            >
                                <button style={{border: 0, background: 'none'}} type="button">
                                    <PlusOutlined/>
                                    <div style={{marginTop: 8}}>Upload</div>
                                </button>
                            </Upload>
                        </Form.Item>
                    </div>

                    <div style={{width: '100%'}} className="register-info-content">
                        {/*<Form.Item<SellerRequest>*/}
                        {/*    label="Tên sản phẩm"*/}
                        {/*    labelCol={{span: 24}}*/}
                        {/*    name="name"*/}
                        {/*    rules={[{required: true, message: 'Vui lòng nhập tên sản phẩm!'}]}*/}
                        {/*>*/}
                        {/*    <Input/>*/}
                        {/*</Form.Item>*/}

                        <Row gutter={24}>
                            <Col span={12}>
                                <Form.Item<SellerRequest>
                                    label="Email"
                                    labelCol={{span: 24}}
                                    name="email"
                                    rules={[
                                        {required: true, message: 'Vui lòng nhập email!'},
                                        {
                                            type: 'email',
                                            message: 'Email không hợp lệ'
                                        },
                                    ]}
                                >
                                    <Input
                                    />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item<SellerRequest>
                                    label="Số điện thoại"
                                    labelCol={{span: 24}}
                                    name="phoneNumber"
                                    rules={[{required: true, message: 'Vui lòng nhập số điện thoại!'}]}
                                >
                                    <Input/>
                                </Form.Item>
                            </Col>
                        </Row>

                        <Form.Item<SellerRequest>
                            label="Tên cửa hàng"
                            labelCol={{span: 24}}
                            name="storeName"
                            rules={[{required: true, message: 'Vui lòng nhập tên cửa hàng!'}]}
                        >
                            <Input/>
                        </Form.Item>

                        <Form.Item<SellerRequest>
                            label="Link cửa hàng"
                            labelCol={{span: 24}}
                            name="urlStore"
                            rules={[{required: true, message: 'Vui lòng nhập đường dẫn cửa hàng!'}]}
                        >
                            <Input/>
                        </Form.Item>

                        <Form.Item
                            name="storeImageFiles"
                            label="Hình ảnh cửa hàng"
                            labelCol={{span: 24}}
                            rules={[{required: true, message: 'Vui lòng tải ít nhất một hình ảnh về cửa hàng!'}]}
                        >
                            <Upload
                                multiple
                                listType="picture-card"
                                action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
                                fileList={storeImageFiles}
                                beforeUpload={() => false}
                                onChange={handleChangeStoreImage}
                                onPreview={handleOpenPreview}
                            >
                                <button style={{border: 0, background: 'none'}} type="button">
                                    <PlusOutlined/>
                                    <div style={{marginTop: 8}}>Upload</div>
                                </button>
                            </Upload>
                        </Form.Item>

                        <Button type='primary' loading={loading} htmlType='submit' size='large'
                                className="register-button">Đăng ký</Button>
                    </div>
                </div>
            </Form>


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