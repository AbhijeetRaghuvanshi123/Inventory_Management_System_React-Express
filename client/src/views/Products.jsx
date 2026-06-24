import { useEffect, useState } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";

const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await api.get("/products");
                setProducts(res.data.data);
            } catch (error) {
                console.log(error);
                alert(error.response?.data?.message || "Failed to load products");
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this product?");
        if (!confirmDelete) return;

        try {
            await api.delete(`/products/${id}`);

            setProducts((prev) => prev.filter((p) => p.id !== id));

            alert("Product deleted successfully");

            navigate("/products");

        } catch (error) {
            console.log(error);
            alert(error.response?.data?.message || "Delete failed");
        }
    };

    if (loading) return <h2>Loading products...</h2>;

    return (
        <div style={{ padding: "20px" }}>
            <h1>Products</h1>

            <table
                style={{
                    width: "100%",
                    borderCollapse: "collapse",
                    marginTop: "20px",
                }}
            >
                <thead>
                    <tr style={{ textAlign: "left", borderBottom: "1px solid #ccc" }}>
                        <th>SKU</th>
                        <th>Name</th>
                        <th>Stock</th>
                        <th>Created At</th>
                    </tr>
                </thead>

                <tbody>
                    {products.map((p) => (
                        <tr key={p.id} style={{ borderBottom: "1px solid #eee", cursor: "pointer" }} onClick={() => navigate(`/products/${p.id}`)}>
                            <td>{p.sku}</td>
                            <td>{p.name}</td>
                            <td>{p.stock}</td>
                            <td>{new Date(p.createdAt).toLocaleDateString()}</td>
                            <td> <button
                                onClick={() => navigate(`/products/${p.id}/edit`)}
                                style={{ marginLeft: "8px" }}
                            >
                                View
                            </button>

                                <button
                                    onClick={() => handleDelete(p.id)}
                                    style={{
                                        marginLeft: "8px",
                                        color: "white",
                                        background: "red",
                                    }}
                                >
                                    Delete
                                </button></td>
                        </tr>

                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Products;