import { useEffect, useState } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();

    const fetchOrders = async () => {
        try {
            const res = await api.get("/order");
            setOrders(res.data.data);
        } catch (error) {
            console.log(error);
            alert("Failed to load orders");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchOrders();
    }, []);

    const cancelOrder = async (id) => {
        const confirmCancel = window.confirm("Cancel this order?");
        if (!confirmCancel) return;

        try {
            await api.patch(`/order/${id}/cancel`);

            setOrders((prev) =>
                prev.map((o) =>
                    o.id === id ? { ...o, status: "CANCELLED" } : o
                )
            );

            alert("Order cancelled");

            navigate('/orders');
        } catch (error) {
            console.log(error);
            alert(error.response?.data?.message || "Cancel failed");
        }
    };

    if (loading) return <h2>Loading orders...</h2>;

    return (
        <div style={{ padding: "20px" }}>
            <h1>Orders</h1>

            {orders.map((order) => (
                <div
                    key={order.id}
                    style={{
                        border: "1px solid #ddd",
                        padding: "15px",
                        marginBottom: "15px",
                        borderRadius: "8px",
                    }}
                >
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <div>
                            <b>Order ID:</b> {order.id} <br />
                            <b>Status:</b>{" "}
                            <span
                                style={{
                                    color:
                                        order.status === "CANCELLED"
                                            ? "red"
                                            : "green",
                                    fontWeight: "bold",
                                }}
                            >
                                {order.status}
                            </span>
                        </div>

                        <div>
                            <small>
                                {new Date(order.createdAt).toLocaleString()}
                            </small>
                        </div>
                    </div>

                    <div style={{ marginTop: "10px" }}>
                        <h4>Items</h4>

                        {order.items.map((item) => (
                            <div
                                key={item.id}
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    padding: "5px 0",
                                }}
                            >
                                <div>
                                    {item.product.name} ({item.product.sku})
                                </div>

                                <div>
                                    Qty: <b>{item.quantity}</b>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div style={{ marginTop: "10px" }}>
                        {order.status !== "CANCELLED" && (
                            <button
                                onClick={() => cancelOrder(order.id)}
                                style={{
                                    background: "red",
                                    color: "white",
                                    padding: "6px 10px",
                                    border: "none",
                                    cursor: "pointer",
                                }}
                            >
                                Cancel Order
                            </button>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Orders;