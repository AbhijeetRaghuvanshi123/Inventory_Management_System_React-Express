import dashboardService from "../services/dashboardService.js";

const getDashboardGET = async () => {
    try {
        const dashboard = await dashboardService.getDashboardService();

        res.status(200).json({
            success: true,
            data: dashboard
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
}

export {getDashboardGET};