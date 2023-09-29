import { useState, useReducer, useEffect } from "react";
import { fetchAPI } from "./mockAPI";
import BookingForm from "./BookingForm"

function Main() {

    const today = new Date().toISOString().slice(0, 10)

    const updateTimes = ( state, action ) => {
        return state;
    }

    const [initializeTimes, reInitializeTimes] = useState(['17:00','18:00','19:00','20:00','21:00','22:00'])

    useEffect(()=> {
        reInitializeTimes(fetchAPI(today))
    },[])

    const [availableTimes, dispatchAvailableTimes] = useReducer(updateTimes, initializeTimes)

    return(
        <main>
            <BookingForm  availableTimes={availableTimes} />
        </main>
    )
}

export default Main