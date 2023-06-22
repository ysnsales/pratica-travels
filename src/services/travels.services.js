import travelsRepository from "../repositories/travels.repository.js"

const getPassengerTravels = async (page) => {
    try {
        const result =  await travelsRepository.getPassengerTravels(page);
        return { status:200, response: result.rows}
    }catch (error) {
        return { status: 500, response: { message: error.message } };
    }
};

export default { getPassengerTravels }