import { useState, useReducer, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchAPI, submitAPI } from "./mockAPI";
import BookingForm from "./BookingForm"
import updateTimes from "./Hooks";

function Main() {
    // const navigate = useNavigate()
    const today = new Date().toISOString().slice(0, 10)
    const [initializeTimes, reInitializeTimes] = useState(['17:00','18:00','19:00','20:00','21:00','22:00'])
    const [updateDate, newUpdateDate] = useState(today)

    useEffect(()=> {
        let _updatedArray = []
        fetchAPI(today)
        .then((response) => {
            _updatedArray = [...response]
        })
        reInitializeTimes(_updatedArray)
    },[])

    const [availableTimes, updateAvailableTimes] = useReducer(updateTimes, initializeTimes)

    useEffect(()=> {
        console.log(`initializeTimes is updated`)
        console.log(initializeTimes)
     },[initializeTimes])

    const submitForm = (formData) => {
        if(submitAPI(formData)) {
            // navigate("./ConfirmedBooking")
        }
    }

    return(
        <main>
            <BookingForm  availableTimes={availableTimes} submitForm={submitForm} updateAvailableTimes={updateAvailableTimes} />
        </main>
    )
}

export default Main