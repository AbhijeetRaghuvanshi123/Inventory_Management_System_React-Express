import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    const isAuth = !!localStorage.getItem("token");

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };

    const linkStyle = ({ isActive }) => ({
        marginRight: "12px",
        textDecoration: "none",
        color: isActive ? "blue" : "black",
        fontWeight: isActive ? "bold" : "normal",
    });

    if (!isAuth) {
        return (
            <div style={styles.nav}>
                <NavLink to="/login" style={linkStyle}>Login</NavLink>
                <NavLink to="/register" style={linkStyle}>Register</NavLink>
            </div>
        );
    }

    return (
        <div style={styles.nav}>
            <NavLink to="/dashboard" style={linkStyle}>Dashboard</NavLink>
            <NavLink to="/products" style={linkStyle}>Products</NavLink>
            <NavLink to="/products/new" style={linkStyle}>Add Product</NavLink>
            <NavLink to="/stock/add" style={linkStyle}>Add Stock</NavLink>
            <NavLink to="/stock/history" style={linkStyle}>Stock</NavLink>
            <NavLink to="/order/create" style={linkStyle}>Create Order</NavLink>
            <NavLink to="/orders" style={linkStyle}>Orders</NavLink>

            <button onClick={handleLogout} style={styles.logout}>
                Logout
            </button>
        </div>
    );
};

const styles = {
    nav: {
        display: "flex",
        alignItems: "center",
        gap: "10px",
        padding: "10px 20px",
        borderBottom: "1px solid #ddd",
        marginBottom: "20px",
    },
    logout: {
        marginLeft: "auto",
        background: "red",
        color: "white",
        border: "none",
        padding: "6px 10px",
        cursor: "pointer",
    },
};

export default Navbar;