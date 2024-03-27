import { useState } from "react";
import ProductList from "./components/ProductList";
import SideBar from "./components/SideBar";
import "./App.css";
const products = [
    { name: "Pavan", price: 10000 },
    { name: "Pavan", price: 10000 },
];
function App() {
    return (
        <main className="h-screen my-8 flex gap-8">
            <aside>
                <SideBar></SideBar>
            </aside>
            <ProductList products={products}></ProductList>
        </main>
    );
}

export default App;
