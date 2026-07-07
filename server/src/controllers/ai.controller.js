import aiService from "../services/ai.service.js";

export const getReview = async (req, res) => {
    try {
        const { code } = req.body;

        if (!code) {
            return res.status(400).json({
                success: false,
                message: "Code is required"
            });
        }

        const response = await aiService(code);

        return res.status(200).json({
            success: true,
            response
        });

    } catch (error) {
        console.error("===== ERROR =====");
        console.error(error);
        console.error("=================");

        return res.status(500).json({
            success: false,
            message: error.message,
            details: error
        });
    }
};