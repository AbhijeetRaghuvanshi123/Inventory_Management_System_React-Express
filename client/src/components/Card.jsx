const Card = ({ title, value }) => {
    return (
        <div
            style={{
                border: "1px solid #ddd",
                padding: "15px",
                borderRadius: "8px",
                minWidth: "150px",
            }}
        >
            <h3>{title}</h3>
            <p style={{ fontSize: "20px", fontWeight: "bold" }}>
                {value}
            </p>
        </div>
    );
};

export default Card;