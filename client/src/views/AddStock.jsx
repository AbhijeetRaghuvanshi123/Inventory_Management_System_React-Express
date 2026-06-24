import { useEffect, useState } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";

const AddStock = () => {
    const [products, setProducts] = useState([]);
    const [productId, setProductId] = useState("");
    const [quantity, setQuantity] = useState("");
    const [loading, setLoading] = useState(true);
    const [submitting, setSubmitting] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await api.get("/products");
                setProducts(res.data.data);
            } catch (error) {
                console.log(error);
                alert("Failed to load products");
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!productId || !quantity) {
            alert("Please select product and quantity");
            return;
        }

        setSubmitting(true);

        try {
            const res = await api.post("/stock/add", {
                productId,
                quantity: Number(quantity),
            });

            alert(res.data.message || "Stock added successfully");

            navigate("/products");

        } catch (error) {
            console.log(error);
            alert(error.response?.data?.message || "Failed to add stock");
        } finally {
            setSubmitting(false);
        }
    };

    if (loading) return <h2>Loading...</h2>;

    return (
        <div style={{ padding: "20px" }}>
            <h1>Add Stock</h1>

            <form onSubmit={handleSubmit} style={{ maxWidth: "400px" }}>
                <div style={{ marginBottom: "10px" }}>
                    <label>Product</label>
                    <select
                        value={productId}
                        onChange={(e) => setProductId(e.target.value)}
                        style={{ width: "100%", padding: "8px" }}
                    >
                        <option value="">Select product</option>
                        {products.map((p) => (
                            <option key={p.id} value={p.id}>
                                {p.name} (Stock: {p.stock})
                            </option>
                        ))}
                    </select>
                </div>

                <div style={{ marginBottom: "10px" }}>
                    <label>Quantity</label>
                    <input
                        type="number"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        style={{ width: "100%", padding: "8px" }}
                        min="1"
                    />
                </div>

                <button type="submit" disabled={submitting}>
                    {submitting ? "Adding..." : "Add Stock"}
                </button>
            </form>
        </div>
    );
};

export default AddStock;