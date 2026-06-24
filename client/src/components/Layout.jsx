import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
    return (
        <div>
            <Navbar />
            <div style={{ padding: "10px 20px" }}>
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;