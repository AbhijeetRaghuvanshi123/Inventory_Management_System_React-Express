import { useEffect, useState } from "react";
import api from "../api/axios";
import Card from "../components/Card";

const Dashboard = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDashboard = async () => {
            try {
                const res = await api.get("/dashboard"); 
                setData(res.data.data);
            } catch (error) {
                console.log(error);
                alert(error.response?.data?.message || "Failed to load dashboard");
            } finally {
                setLoading(false);
            }
        };

        fetchDashboard();
    }, []);

    if (loading) return <h2>Loading...</h2>;

    if (!data) return <h2>No data found</h2>;

    return (
        <div style={{ padding: "20px" }}>
            <h1>Dashboard</h1>

            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                <Card title="Products" value={data.totalProducts} />
                <Card title="Orders" value={data.totalOrders} />
                <Card title="Placed Orders" value={data.placedOrders} />
                <Card title="Cancelled Orders" value={data.cancelledOrders} />
                <Card title="Total Stock" value={data.totalStock} />
            </div>

            <h2 style={{ marginTop: "20px" }}>Recent Activity</h2>

            <div>
                {data.recentMovements.map((item) => (
                    <div
                        key={item.id}
                        style={{
                            border: "1px solid #ccc",
                            padding: "10px",
                            marginBottom: "10px",
                            borderRadius: "6px",
                        }}
                    >
                        <p><b>Type:</b> {item.type}</p>
                        <p><b>Product:</b> {item.product.name}</p>
                        <p><b>SKU:</b> {item.product.sku}</p>
                        <p><b>Quantity:</b> {item.quantity}</p>
                        <p><b>Stock After:</b> {item.stockAfter}</p>
                        <p><b>Date:</b> {new Date(item.createdAt).toLocaleString()}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;