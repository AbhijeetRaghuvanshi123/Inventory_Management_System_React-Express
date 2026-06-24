import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";

const Product = () => {
    const { id } = useParams();

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await api.get(`/products/${id}`);
                setProduct(res.data.data);
            } catch (error) {
                console.log(error);
                alert(error.response?.data?.message || "Failed to load product");
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    if (loading) return <h2>Loading product...</h2>;

    if (!product) return <h2>No product found</h2>;

    return (
        <div style={{ padding: "20px" }}>
            <h1>Product Details</h1>

            <div
                style={{
                    border: "1px solid #ddd",
                    padding: "15px",
                    borderRadius: "8px",
                    maxWidth: "400px",
                }}
            >
                <p><b>ID:</b> {product.id}</p>
                <p><b>SKU:</b> {product.sku}</p>
                <p><b>Name:</b> {product.name}</p>
                <p><b>Stock:</b> {product.stock}</p>
                <p><b>Created At:</b> {new Date(product.createdAt).toLocaleString()}</p>
                <p><b>Updated At:</b> {new Date(product.updatedAt).toLocaleString()}</p>
                <button
                    onClick={() => navigate(`/products/${product.id}/edit`)}
                >
                    Edit Product
                </button>
            </div>
        </div>
    );
};

export default Product;