import { fetchAPI, submitAPI } from "./mockAPI";

function updateTimes( state, action ) {

    const today = new Date().toISOString().slice(0, 10)

    switch(action.type) {
        case 'update_date' :
            fetchAPI(action.dateToUpdate)
            .then((response) => {
                return [...response]
            })

        default:
            fetchAPI(today)
            .then((response) => {
                console.log(response)
                return response
            })
    }

}

export default updateTimes