import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";

const NewProduct = () => {
    const [sku, setSku] = useState("");
    const [name, setName] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);

        try {
            const res = await api.post("/products", {
                sku,
                name,
            });

            alert(res.data.message || "Product created successfully");

            navigate("/products");

        } catch (error) {
            console.log(error);
            alert(error.response?.data?.message || "Failed to create product");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ padding: "20px" }}>
            <h1>New Product</h1>

            <form onSubmit={handleSubmit} style={{ maxWidth: "400px" }}>
                <div style={{ marginBottom: "10px" }}>
                    <label>SKU</label>
                    <input
                        type="text"
                        value={sku}
                        onChange={(e) => setSku(e.target.value)}
                        style={{ width: "100%", padding: "8px" }}
                        required
                    />
                </div>

                <div style={{ marginBottom: "10px" }}>
                    <label>Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        style={{ width: "100%", padding: "8px" }}
                        required
                    />
                </div>

                <button type="submit" disabled={loading}>
                    {loading ? "Creating..." : "Create Product"}
                </button>
            </form>
        </div>
    );
};

export default NewProduct;