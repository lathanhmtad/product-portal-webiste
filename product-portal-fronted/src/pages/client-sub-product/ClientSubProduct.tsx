import "./ClientSubProduct.scss"
import { Link } from "react-router-dom"
// import Banner from "../../assets/imgs/banner.png"
// import Pagination from "../../components/Pagination";

type ProductsType = {
    tag: string;
    productImageName: string;
    productName: string;
    productLink: string;
}[];             
const products: {
    tag: string,
    productImageName: string,
    productName: string,
    productLink: string
}[] = [
    {
        tag: 'outstanding',
        productImageName: 'product.png',
        productName: 'iPhone 14 Pro Max 128GB',
        productLink: '/'
    },
    {
        tag: 'outstanding',
        productImageName: 'product.png',
        productName: 'iPhone 14 Pro Max 128GB',
        productLink: '/'
    },
    {
        tag: 'outstanding',
        productImageName: 'product.png',
        productName: 'iPhone 14 Pro Max 128GB',
        productLink: '/'
    },
    {
        tag: 'outstanding',
        productImageName: 'product.png',
        productName: 'iPhone 14 Pro Max 128GB',
        productLink: '/'
    },
    {
        tag: 'outstanding',
        productImageName: 'product.png',
        productName: 'iPhone 14 Pro Max 128GB',
        productLink: '/'
    },
    {
        tag: 'default',
        productImageName: 'product.png',
        productName: 'iPhone 14 Pro Max 128GB',
        productLink: '/'
    },
    {
        tag: 'default',
        productImageName: 'product.png',
        productName: 'iPhone 14 Pro Max 128GB',
        productLink: '/'
    },
    {
        tag: 'default',
        productImageName: 'product.png',
        productName: 'iPhone 14 Pro Max 128GB',
        productLink: '/'
    },
    {
        tag: 'default',
        productImageName: 'product.png',
        productName: 'iPhone 14 Pro Max 128GB',
        productLink: '/'
    },
    {
        tag: 'default',
        productImageName: 'product.png',
        productName: 'iPhone 14 Pro Max 128GB',
        productLink: '/'
    },
    {
        tag: 'default',
        productImageName: 'product.png',
        productName: 'iPhone 14 Pro Max 128GB',
        productLink: '/'
    },
    {
        tag: 'default',
        productImageName: 'product.png',
        productName: 'iPhone 14 Pro Max 128GB',
        productLink: '/'
    },
    {
        tag: 'default',
        productImageName: 'product.png',
        productName: 'iPhone 14 Pro Max 128GB',
        productLink: '/'
    },
    {
        tag: 'default',
        productImageName: 'product.png',
        productName: 'iPhone 14 Pro Max 128GB',
        productLink: '/'
    },
    {
        tag: 'default',
        productImageName: 'product.png',
        productName: 'iPhone 14 Pro Max 128GB',
        productLink: '/'
    },
    {
        tag: 'default',
        productImageName: 'product.png',
        productName: 'iPhone 14 Pro Max 128GB',
        productLink: '/'
    },
    {
        tag: 'default',
        productImageName: 'product.png',
        productName: 'iPhone 14 Pro Max 128GB',
        productLink: '/'
    },
    {
        tag: 'default',
        productImageName: 'product.png',
        productName: 'iPhone 14 Pro Max 128GB',
        productLink: '/'
    },
    {
        tag: 'default',
        productImageName: 'product.png',
        productName: 'iPhone 14 Pro Max 128GB',
        productLink: '/'
    },
    {
        tag: 'default',
        productImageName: 'product.png',
        productName: 'iPhone 14 Pro Max 128GB',
        productLink: '/'
    },
    {
        tag: 'default',
        productImageName: 'product.png',
        productName: 'iPhone 14 Pro Max 128GB',
        productLink: '/'
    },
    {
        tag: 'default',
        productImageName: 'product.png',
        productName: 'iPhone 14 Pro Max 128GB',
        productLink: '/'
    },
    {
        tag: 'default',
        productImageName: 'product.png',
        productName: 'iPhone 14 Pro Max 128GB',
        productLink: '/'
    },
    {
        tag: 'default',
        productImageName: 'product.png',
        productName: 'iPhone 14 Pro Max 128GB',
        productLink: '/'
    }
]
let outstandingProducts: ProductsType = [];
products.forEach((value) => {
    if (value.tag === 'outstanding') {
        outstandingProducts.push(value);
    }
}) 
export default function ClientSubProduct() {
    return (
        <div className="wrapper-client-sub-product">
            <main className="client-sub-product">
                {/*<img src={Banner} alt="" className="client-sub-product-banner" />*/}
                <div className="outstanding-products">
                    <h2 className="outstanding-products-title">SẢN PHẨM NỔI BẬT</h2>
                    <div className="list-outstanding-product">
                        {outstandingProducts.map((value) => {                            
                            return <Link to={`/detail-product`} className="outstanding-product-item">
                                {/*<img src={require(`../../assets/img/${value.productImageName}`)} alt="" className="outstanding-product-img" />*/}
                                <span className="outstanding-product-name">{value.productName}</span>
                            </Link>
                        })}
                    </div>
                </div>                
                <div className="all-products">
                    <h2 className="all-products-title">TẤT CẢ SẢN PHẨM</h2>
                    <div className="list-all-product">
                        {products.map((value) => {                            
                            return <Link to={value.productLink} className="all-product-item">
                                {/*<img src={require(`../../assets/img/${value.productImageName}`)} alt="" className="all-product-img" />*/}
                                <span className="all-product-name">{value.productName}</span>
                            </Link>
                        })}
                    </div>
                    {/*<Pagination />*/}
                </div>             

            </main>
        </div>
    )
}