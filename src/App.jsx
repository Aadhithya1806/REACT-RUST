import { useState } from "react";
import ProductList from "./components/ProductList";
import SideBar from "./components/SideBar";
import "./App.css";

const products = [
    { name: "Pavan", price: 10000 },
    { name: "Pavan", price: 10000 },
];
function App() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("");
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }
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
