import { Link } from "react-router-dom"
import "./ClientHome.scss"
import { FaBell } from "react-icons/fa";
import { FaExclamationTriangle } from "react-icons/fa";
export default function ClientHome() {
    const hotProducts: {
        imgName: string,
        productName: string,
        productDomainName1: string,
        productLink1: string,
        productDomainName2: string,
        productLink2: string
    }[] = [
        {
            imgName: "hot-product-1.png",
            productName: "Vỏ Case Montech SKY TWO White",
            productDomainName1: "nguyencongpc.vn",
            productLink1: "/",
            productDomainName2: "hacom.vn",
            productLink2: "/"
        },
        {
            imgName: "hot-product-2.png",
            productName: "Samsung Galaxy Z Flip4 5G 128GB",
            productDomainName1: "cellphones.com.vn",
            productLink1: "/",
            productDomainName2: "fptshop.com.vn",
            productLink2: "/"
        },
        {
            imgName: "hot-product-3.png",
            productName: "Sữa rửa mặt dịu nhẹ Cetaphil Gentle Skin Cleanser cung cấp độ ẩm cho da (500ml)",
            productDomainName1: "hasaki.vn",
            productLink1: "/",
            productDomainName2: "nhathuoclongchau.com.vn",
            productLink2: "/"
        },
        {
            imgName: "hot-product-4.png",
            productName: "Thùng 24 lon nước ngọt Pepsi Cola 320ml",
            productDomainName1: "bachhoaxanh.com",
            productLink1: "/",
            productDomainName2: "tiki.vn",
            productLink2: "/"
        }
    ]
    const promotions: {
        imgName: string,
        content: string
    }[] = [
        {
            imgName: "promotion-banner-1.jpg",
            content: "Panasonic sản phẩm mới, giá ưu đãi, quà xịn tại tiki.vn" 
        },
        {
            imgName: "promotion-banner-2.jpg",
            content: "Hái lộc đầu năm, siêu sale giá rẻ, có cơ hội trúng TV Xiaomi và các phần quà giá trị khác tại fptshop.com.vn"
        }
    ]
    const eCommerceWebs: {
        imgName: string,
        companyName: string,
        linkWeb: string
    }[] = [
        {
            imgName: "logo-ec-web-1.png",
            companyName: "Công ty Cổ phần FPT",
            linkWeb: "https://fptshop.com.vn"
        },
        {
            imgName: "logo-ec-web-2.png",
            companyName: "Công ty Cổ phần Thế giới di động",
            linkWeb: "https://www.thegioididong.com"
        },
        {
            imgName: "logo-ec-web-3.png",
            companyName: "Công ty Cổ phần CellphoneS Việt Nam",
            linkWeb: "https://cellphones.com.vn"
        },
        {
            imgName: "logo-ec-web-4.png",
            companyName: "Công ty TNHH TIKI",
            linkWeb: "https://tiki.vn"
        },
        {
            imgName: "logo-ec-web-5.png",
            companyName: "Công ty TNHH Shopee",
            linkWeb: "https://shopee.vn"
        },
        {
            imgName: "logo-ec-web-6.png",
            companyName: "Công ty TNHH Thương mại điện tử Lazada Việt Nam",
            linkWeb: "https://www.lazada.vn"
        }
    ]
    const notiWarnings: {
        status: string,
        imgName: string,
        content: string
    }[] = [
        {
            status: "notification",
            imgName:"noti-warning-1.png",
            content: "Kiểm tra kho hàng của \"hot girl\" livestream chốt hàng nghìn đơn mỗi ngày"
        },
        {
            status: "warning",
            imgName:"noti-warning-2.png",
            content: "Cảnh báo một số đối tượng sử dụng văn bản, hình ảnh giả mạo các đơn vị thuộc Bộ Công Thương để lừa đảo doanh nghiệp và người dân"
        },
        {
            status: "notification",
            imgName:"noti-warning-3.png",
            content: "Nâng cao năng lực phòng, chống và xử lý vi phạm trong TMĐT cho lực lượng thực thi pháp luật"
        },
        {
            status: "notification",
            imgName:"noti-warning-4.png",
            content: "Tập huấn kiến thức về thương mại điện tử trên địa bàn tỉnh Bắc Ninh"
        },
        {
            status: "notification",
            imgName:"noti-warning-5.png",
            content: "TP. Hồ Chí Minh đối thoại với doanh nghiệp trong lĩnh vực thương mại điện tử"
        },
        {
            status: "notification",
            imgName:"noti-warning-6.png",
            content: "Tập huấn về chống buôn lậu, gian lận thương mại và hàng giả trong TMĐT tại TP. Cần Thơ"
        }
    ]
    return (
        <div className="wrapper-client-home">
            <div className="client-home">
                <div className="hot-products">
                    <h1 className="hot-products-title">SẢN PHẨM HOT</h1>
                    <div className="list-hot-product">
                        {hotProducts.map((value) => {
                            return <div className="hot-product-item">
                                <img className="product-img" src={require(`../../assets/img/${value.imgName}`)} alt="product-img"/>
                                <div className="hot-product-content">
                                    <span className="product-name">{value.productName}</span>
                                    <div className="product-link">
                                        <Link to={value.productLink1} className="prod-domain-name">{value.productDomainName1}</Link>
                                        <Link to={value.productLink2} className="prod-domain-name">{value.productDomainName2}</Link>
                                    </div>
                                </div>
                                <hr />
                            </div>
                        })}
                        <Link to="/" className="show-hot-products">Xem tất cả &gt;&gt;</Link>
                    </div>
                </div>
                <div className="promotion">
                    <h2 className="promotion-title">Khuyến mãi</h2>
                    <div className="list-promotion">
                        {promotions.map((value) => {
                            return <div className="promotion-item">
                                <img className="promotion-banner" src={require(`../../assets/img/${value.imgName}`)} alt="banner-img" />
                                <span className="promotion-content">{value.content}</span>
                            </div>
                        })}
                    </div>
                </div>
                <div className="hot-websites">
                    <h1 className="hot-websites-title">
                        WEBSITE <span>THƯƠNG MẠI ĐIỆN TỬ HOT</span>
                    </h1>
                    <div className="list-hot-website">
                        {eCommerceWebs.map((value) => {
                            return <div className="hot-website-item">
                                <img className="hot-website-logo" src={require(`../../assets/img/${value.imgName}`)} alt="web-logo-img" />
                                <div className="hot-website-content">
                                    <span className="hot-website-company">{value.companyName}</span>
                                    <Link className="hot-website-link" to={value.linkWeb}>{value.linkWeb}</Link>
                                </div>
                                <hr />
                            </div>
                        })}
                        <Link to="/" className="show-hot-websites">Xem tất cả &gt;&gt;</Link>
                    </div>
                </div>
                <div className="noti-warning">
                    <div className="noti-warning-title">
                        <div className="noti-title">
                            <FaBell className="noti-icon"/>
                            <span className="noti-title-content">THÔNG BÁO</span>
                        </div>
                        <div className="warning-title">
                            <FaExclamationTriangle className="warning-icon"/>
                            <span className="warning-title-content">CẢNH BÁO</span>
                        </div>
                    </div>
                    <div className="noti-warning-content">
                        {notiWarnings.map((value) => {
                            let iconTag;
                            if (value.status === 'notification') {
                                iconTag = <FaBell className="noti-warning-icon" style={{backgroundColor: '#48B379'}}/>
                            } else if (value.status === 'warning') {
                                iconTag = <FaExclamationTriangle className="noti-warning-icon" style={{backgroundColor: '#FF3F3F'}}/>
                            }
                            return <div className="noti-warning-item">
                                <img className="noti-warning-img" src={require(`../../assets/img/${value.imgName}`)} alt="noti-warning-img" />
                                {iconTag}
                                <div className="noti-warning-content-wrapping">
                                    <span className="noti-warning-content">
                                        {value.content}
                                    </span>
                                </div>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

