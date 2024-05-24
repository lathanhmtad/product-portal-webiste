import { Link } from "react-router-dom"
import "./ClientDetailProduct.scss"
const detailProducts: {
    productName: string,
    productImage: string,
    productWebsite: {
        productWebsiteName: string,
        productWebsiteLink: string
    }[],
    productRelative: {
        productRelativeName: string,
        productRelativeLink: string
    }[]
} = {
    productName: 'iPhone 14 Pro Max 128GB',
    productImage: 'product.png',
    productWebsite: [
        {
            productWebsiteName: 'FPTShop',
            productWebsiteLink: 'https://fptshop.com.vn/dien-thoai/iphone-14-pro-max'
        },
        {
            productWebsiteName: 'Thegioididong',
            productWebsiteLink: 'https://www.thegioididong.com/dtdd/iphone-14-pro-max-256gb'
        },
        {
            productWebsiteName: 'CellphoneS',
            productWebsiteLink: 'https://cellphones.com.vn/iphone-14-pro-max-256gb.html'
        },
        {
            productWebsiteName: 'Viettel Store',
            productWebsiteLink: 'https://viettelstore.vn/dien-thoai/iphone-14-pro-max-256gb-pid293827.html'
        }
    ],
    productRelative: [
        {
            productRelativeName: 'Củ sạc Apple Power Adapter 20W Type-C',
            productRelativeLink: 'https://fptshop.com.vn/dien-thoai/iphone-14-pro-max'
        },
        {
            productRelativeName: 'Ốp lưng iPhone 14 Pro Max Silicone Case with MagSafe',
            productRelativeLink: 'https://www.thegioididong.com/dtdd/iphone-14-pro-max-256gb'
        },
        {
            productRelativeName: 'Tai nghe AirPods Pro 2022',
            productRelativeLink: 'https://cellphones.com.vn/iphone-14-pro-max-256gb.html'
        },
        {
            productRelativeName: 'Dây sạc Apple MagSafe Charger to USB-C Cable 1m',
            productRelativeLink: 'https://viettelstore.vn/dien-thoai/iphone-14-pro-max-256gb-pid293827.html'
        }
    ]
}
export default function ClientDetailProduct() {
    return (
        <div className="wrapper-client-detail-product">
            <main className="client-detail-product">
                <div className="product-info">
                    <h1 className="product-name">{detailProducts.productName}</h1>
                    <img src={require(`../../assets/img/${detailProducts.productImage}`)} alt="" className="product-img" />
                </div>
                <div className="product-website">
                    <h2 className="product-website-title">Gợi ý website</h2>
                    <div className="product-website-list">
                        {detailProducts.productWebsite.map((value) => {
                            return <div className="product-website-item">
                                <span className="product-website-name">{value.productWebsiteName}: </span>
                                <Link target="_blank" to={value.productWebsiteLink} className="product-website-link">{value.productWebsiteLink}</Link>
                            </div>
                        })}
                    </div>
                </div>
                <div className="product-relative">
                    <h3 className="product-relative-title">CÁC MẶT HÀNG LIÊN QUAN</h3>
                    <div className="product-relative-list">
                        {detailProducts.productRelative.map((value) => {
                            return <div className="product-relative-item">
                                <span className="product-relative-name">{value.productRelativeName}: </span>
                                <Link target="_blank" to={value.productRelativeLink} className="product-relative-link">{value.productRelativeLink}</Link>
                            </div>
                        })}
                    </div>
                </div>
            </main>
        </div>
    )
}