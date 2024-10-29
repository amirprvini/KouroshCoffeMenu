import { BrowserRouter, Route, Routes } from "react-router-dom"
import OrderPage from "../pages/OrderPage"
import LayOut from "../components/Layout"
import React from "react"

export const RouteProvider: React.FC = (): JSX.Element =>{
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<LayOut/>}>
                <Route index element={<OrderPage/>} />
            </Route>
        </Routes>
    </BrowserRouter>
}