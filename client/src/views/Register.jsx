import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";
import AuthLayout from "../components/AuthLayout";

const RegisterPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await api.post("/auth/register", {
                email,
                password,
            });

            alert("Registration successful");
            navigate("/login");

        } catch (error) {
            alert(error.response?.data?.message || "Register failed");
        } finally {
            setLoading(false);
        }
    };

    return (
        <AuthLayout title="Register">
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    style={styles.input}
                    required
                />

                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    style={styles.input}
                    required
                />

                <button style={styles.button} disabled={loading}>
                    {loading ? "Creating account..." : "Register"}
                </button>
            </form>
        </AuthLayout>
    );
};

const styles = {
    input: {
        width: "100%",
        padding: "10px",
        marginBottom: "10px",
        border: "1px solid #ccc",
        borderRadius: "6px",
    },
    button: {
        width: "100%",
        padding: "10px",
        background: "#16a34a",
        color: "white",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer",
    },
};

export default RegisterPage;