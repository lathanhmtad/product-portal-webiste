import React from 'react';
import {Route, Routes} from "react-router-dom";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import ClientHome from "./pages/client-home/ClientHome";
import Client from "./pages/Client";
import Admin from "./pages/Admin";
import ClientDetailProduct from './pages/client-details-product';
import ClientSubProduct from './pages/client-sub-product/ClientSubProduct';
import ClientSuperProduct from './pages/client-super-product';
import AdminUserManage from './pages/admin-user-manage';
import AdminStoreManage from './pages/admin-store-manage';
import SignIn from './pages/sign-in';
import SignUp from './pages/sign-up';
import SellerProductManage from './pages/seller-product-manage/SellerProductManage';
import Seller from './pages/Seller';
import AdminHome from "./pages/admin-home";
import SellerAddProduct from './pages/seller-add-product';
import ClientSellerRegister from './pages/client-seller-register';
import ClientIntroduce from './pages/client-introduce';
import ClientContact from './pages/client-contact';

function App() {
    return (
        <main>
            <Routes>
                <Route path='/' element={<Client/>}>
                    <Route index element={<ClientHome/>}/>
                    <Route path='/sub-products' element={<ClientSubProduct/>}/>
                    <Route path='/detail-product' element={<ClientDetailProduct/>}/>
                    <Route path='/super-products' element={<ClientSuperProduct/>}/>
                    <Route path='/seller-register' element={<ClientSellerRegister/>}/>
                    <Route path='/introduce' element={<ClientIntroduce/>}/>
                    <Route path='/contact' element={<ClientContact/>}/>
                </Route>

                <Route path='/admin' element={<Admin/>}>
                    <Route index element={<AdminHome />}/>
                    <Route path='sellers' element={<AdminUserManage/>}/>
                    <Route path='stores' element={<AdminStoreManage/>}/>
                </Route>

                <Route path='/sign-in' element={<SignIn/>}/>
                <Route path='/sign-up' element={<SignUp/>}/>
                <Route path='/seller' element={<Seller/>}>
                    <Route index element={<SellerProductManage/>}/>
                    <Route path='add-product' element={<SellerAddProduct/>}/>
                </Route>
            </Routes>
        </main>
    );
}

export default App;
