import dashboardQuery from "../db/dashboardQuery.js";

const getDashboardService = async () => {
    const [
        totalProducts,
        totalOrders,
        placedOrders,
        cancelledOrders,
        products,
        recentMovements
    ] = await Promise.all([
        dashboardQuery.getTotalProducts(),
        dashboardQuery.getTotalOrders(),
        dashboardQuery.getPlacedOrders(),
        dashboardQuery.getCancelledOrders(),
        dashboardQuery.getProducts(),
        dashboardQuery.getRecentMovements()
    ]);

    const totalStock = products.reduce(
        (sum, product) => sum + product.stock,
        0
    );

    return {
        totalProducts,
        totalOrders,
        placedOrders,
        cancelledOrders,
        totalStock,
        recentMovements
    };
};

const dashboardService = { getDashboardService };

export default dashboardService;