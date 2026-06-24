import { useEffect, useState } from "react";
import api from "../api/axios";

const StockHistory = () => {
    const [history, setHistory] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchHistory = async () => {
            try {
                const res = await api.get("/stock/history");
                setHistory(res.data.data);
            } catch (error) {
                console.log(error);
                alert(error.response?.data?.message || "Failed to load history");
            } finally {
                setLoading(false);
            }
        };

        fetchHistory();
    }, []);

    if (loading) return <h2>Loading history...</h2>;

    return (
        <div style={{ padding: "20px" }}>
            <h1>Stock History</h1>

            <table
                style={{
                    width: "100%",
                    borderCollapse: "collapse",
                    marginTop: "20px",
                }}
            >
                <thead>
                    <tr style={{ textAlign: "left", borderBottom: "1px solid #ccc" }}>
                        <th>Product</th>
                        <th>Type</th>
                        <th>Quantity</th>
                        <th>Stock After</th>
                        <th>Date</th>
                    </tr>
                </thead>

                <tbody>
                    {history.map((item) => (
                        <tr key={item.id} style={{ borderBottom: "1px solid #eee" }}>
                            <td>
                                {item.product?.name} <br />
                                <small style={{ color: "gray" }}>
                                    {item.product?.sku}
                                </small>
                            </td>

                            <td>
                                <span
                                    style={{
                                        padding: "4px 8px",
                                        borderRadius: "6px",
                                        background:
                                            item.type === "STOCK_IN"
                                                ? "#d1fae5"
                                                : "#fee2e2",
                                        color:
                                            item.type === "STOCK_IN"
                                                ? "#065f46"
                                                : "#991b1b",
                                    }}
                                >
                                    {item.type}
                                </span>
                            </td>

                            <td>{item.quantity}</td>
                            <td>{item.stockAfter}</td>
                            <td>
                                {new Date(item.createdAt).toLocaleString()}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default StockHistory;