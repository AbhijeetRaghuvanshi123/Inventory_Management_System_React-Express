import { useEffect, useState } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";

const CreateOrder = () => {
    const [products, setProducts] = useState([]);
    const [items, setItems] = useState([
        { productId: "", quantity: 1 },
    ]);

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

    const handleChange = (index, field, value) => {
        const updated = [...items];
        updated[index][field] = value;
        setItems(updated);
    };

    const addItem = () => {
        setItems([...items, { productId: "", quantity: 1 }]);
    };

    const removeItem = (index) => {
        const updated = items.filter((_, i) => i !== index);
        setItems(updated);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (items.length === 0) {
            alert("Add at least one item");
            return;
        }

        setSubmitting(true);

        try {
            const res = await api.post("/order", {
                items: items.map((i) => ({
                    productId: i.productId,
                    quantity: Number(i.quantity),
                })),
            });

            alert("Order placed successfully");

            navigate("/dashboard");

        } catch (error) {
            console.log(error);
            alert(error.response?.data?.message || "Order failed");
        } finally {
            setSubmitting(false);
        }
    };

    if (loading) return <h2>Loading...</h2>;

    return (
        <div style={{ padding: "20px" }}>
            <h1>Create Order</h1>

            <form onSubmit={handleSubmit}>
                {items.map((item, index) => (
                    <div
                        key={index}
                        style={{
                            display: "flex",
                            gap: "10px",
                            marginBottom: "10px",
                        }}
                    >
                        <select
                            value={item.productId}
                            onChange={(e) =>
                                handleChange(index, "productId", e.target.value)
                            }
                        >
                            <option value="">Select product</option>
                            {products.map((p) => (
                                <option key={p.id} value={p.id}>
                                    {p.name} (Stock: {p.stock})
                                </option>
                            ))}
                        </select>

                        <input
                            type="number"
                            min="1"
                            value={item.quantity}
                            onChange={(e) =>
                                handleChange(index, "quantity", e.target.value)
                            }
                            style={{ width: "80px" }}
                        />

                        <button
                            type="button"
                            onClick={() => removeItem(index)}
                        >
                            ❌
                        </button>
                    </div>
                ))}

                <button type="button" onClick={addItem}>
                    + Add Item
                </button>

                <br /><br />

                <button type="submit" disabled={submitting}>
                    {submitting ? "Placing Order..." : "Place Order"}
                </button>
            </form>
        </div>
    );
};

export default CreateOrder;