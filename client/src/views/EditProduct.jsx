import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../api/axios";

const EditProduct = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [sku, setSku] = useState("");
    const [name, setName] = useState("");
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await api.get(`/products/${id}`);
                setSku(res.data.data.sku);
                setName(res.data.data.name);
            } catch (error) {
                console.log(error);
                alert("Failed to load product");
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    const handleUpdate = async (e) => {
        e.preventDefault();
        setSaving(true);

        try {
            const res = await api.put(`/products/${id}`, {
                sku,
                name,
            });

            alert(res.data.message || "Updated successfully");

            navigate(`/products/${id}`);
        } catch (error) {
            console.log(error);
            alert(error.response?.data?.message || "Update failed");
        } finally {
            setSaving(false);
        }
    };

    if (loading) return <h2>Loading product...</h2>;

    return (
        <div style={{ padding: "20px" }}>
            <h1>Edit Product</h1>

            <form onSubmit={handleUpdate} style={{ maxWidth: "400px" }}>
                <div style={{ marginBottom: "10px" }}>
                    <label>SKU</label>
                    <input
                        type="text"
                        value={sku}
                        onChange={(e) => setSku(e.target.value)}
                        style={{ width: "100%", padding: "8px" }}
                    />
                </div>

                <div style={{ marginBottom: "10px" }}>
                    <label>Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        style={{ width: "100%", padding: "8px" }}
                    />
                </div>

                <button type="submit" disabled={saving}>
                    {saving ? "Updating..." : "Update Product"}
                </button>
            </form>
        </div>
    );
};

export default EditProduct;