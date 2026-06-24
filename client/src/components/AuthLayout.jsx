const AuthLayout = ({ title, children }) => {
    return (
        <div style={styles.wrapper}>
            <div style={styles.card}>
                <h2 style={{ marginBottom: "20px" }}>{title}</h2>
                {children}
            </div>
        </div>
    );
};

const styles = {
    wrapper: {
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f5f6fa",
    },
    card: {
        width: "350px",
        padding: "25px",
        borderRadius: "10px",
        background: "white",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    },
};

export default AuthLayout;