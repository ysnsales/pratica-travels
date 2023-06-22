import connection from "../database/database.js";

const getPassengerTravels = (page) => {
    let offset = 0;
    if (Number(page) !== 1) {
        offset = Number(page) * 25;
    }
    return connection.query(`
    SELECT p."fullName" as passengers, count(t.id) as travels
    FROM passenger_travels AS pt
    JOIN passengers AS p ON pt."passengerId" = p.id
    JOIN travels AS t ON pt."travelId" = t.id
    GROUP BY p."fullName"
    ORDER BY count(t.id) DESC
    OFFSET $1
    LIMIT 25;`, [offset])
}

export default {getPassengerTravels}