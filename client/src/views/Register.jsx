import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";

const RegisterPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await api.post("/auth/register", {
                email,
                password,
            });

            alert("Registration successful");
            navigate("/login");
        } catch (error) {
            alert(error.response?.data?.message || "Register failed");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email"
            />

            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="password"
            />

            <button type="submit">Register</button>
        </form>
    );
};

export default RegisterPage;