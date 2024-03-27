import Footer from "../components/Footer";
import Header from "../components/Header";

function HomePage() {
    return (
        <div>
            <Header
                title = 'Đây là header'
                desc = {'Đây là mô tả'} // {} kiểu dữ liệu phức táp
            />
            Home Page
            <Footer/>
            <div className="">

            </div>
        </div>
    );
}

export default HomePage;