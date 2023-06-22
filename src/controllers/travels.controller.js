import connection from "../database/database.js";
import travelsServices from "../services/travels.services.js";

const getPassengerTravels = async (req, res) => {
    const { page } = req.query;
    const { status, response } = await travelsServices.getPassengerTravels(page);
    res.status(status).json(response);

} 

export default {
    getPassengerTravels
}