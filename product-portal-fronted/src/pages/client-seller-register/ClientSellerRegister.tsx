import "./ClientSellerRegister.scss"
export default function ClientSellerRegister() {
    return (
        <div className="wrapper-client-seller-register">
            <form action="" className="client-seller-register">
                <span className="title">Thông tin đăng ký</span>
                <div className="register-info">
                    <img src={require("../../assets/img/avatar.jpg")} alt="" className="avatar" />
                    <div className="register-info-content">
                        <label htmlFor="fullname" className="fullname-label">Họ và tên<span style={{color: "red"}}>*</span></label>
                        <input type="text" id="fullname"/>
                        <label htmlFor="email" className="email-label">Email<span style={{color: "red"}}>*</span></label>
                        <label htmlFor="phone-number" className="phone-number-label">Số điện thoại<span style={{color: "red"}}>*</span></label>
                        <input type="email" id="email"/>                        
                        <input type="text" id="phone-number"/>
                        <label htmlFor="store-name" className="store-name-label">Tên cửa hàng<span style={{color: "red"}}>*</span></label>
                        <input type="text" id="store-name" placeholder="Nhập tên cửa hàng"/>
                        <label htmlFor="store-link" className="store-link-label">Link cửa hàng<span style={{color: "red"}}>*</span></label>
                        <input type="url" id="store-link" placeholder="Dán URL"/>
                    </div>                    
                </div>
                <button className="register-button">Đăng ký</button>
            </form>
        </div>
    )
}