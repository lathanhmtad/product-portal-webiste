import React from 'react';
import {Route, Routes} from "react-router-dom";

import './App.css';

import ClientHome from "./pages/client-home/ClientHome";
import Client from "./pages/Client";
import ClientAllCategories from "./pages/client-all-categories";
import ClientAllProducts from "./pages/client-all-products";
import Admin from "./pages/Admin";

function App() {
    return (
        <main>
            <Routes>
                <Route path='/' element={<Client/>}>
                    <Route index element={<ClientHome/>}/>
                    <Route path='/categories' element={<ClientAllCategories/>}/>
                    <Route path='/products' element={<ClientAllProducts/>}/>
                </Route>

                <Route path='/admin' element={<Admin/>}>

                </Route>
            </Routes>
        </main>
    );
}

export default App;
