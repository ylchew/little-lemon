import { useReducer, useEffect, useContext } from "react";
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import { fetchAPI, submitAPI } from "./mockAPI";
import BookingForm from "./BookingForm"
import { StateContext } from "./StateContext";
import ConfirmedBooking from "./ConfirmedBooking"

function Main() {
    // const navigate = useNavigate()
    const [state, setState] = useContext(StateContext)
    const today = new Date().toISOString().slice(0, 10)
    const initializeTimes = {currentDate: ['16:00','17:00','18:00','19:00','20:00','21:00','22:00']}



    useEffect(()=>{

        fetchAPI(today)
        .then((response) => {
            console.log(`update_date action executed: retrieved ${response}`)
            setState({...state, availableTimes: [...response]})
        })
        .catch(error => {
            setState({...state, availableTimes: [...initializeTimes.currentDate]})
        })

    },[])

    const updateTimes = ( state, action ) => {

        switch(action.type) {
            case 'update_date' : {
                fetchAPI(action.dateToUpdate)
                .then((response) => {
                    console.log(`update_date action executed: retrieved ${response}`)
                    setState({...state, availableTimes: [...response]})
                })
                .catch(error => {
                    setState({...state, availableTimes: [...initializeTimes.currentDate]})
                })
            }
        }

    }

    const [availableTimes, updateAvailableTimes] = useReducer(updateTimes, initializeTimes)

    const submitForm = (formData) => {
        if(submitAPI(formData)) {
            // navigate("./ConfirmedBooking")
        }
    }

    const  router = createBrowserRouter([
        {
            path: "/",
            element: <BookingForm submitForm={submitForm} updateAvailableTimes={updateAvailableTimes} />,
            children: [
                {
                    path: "confirmed-booking",
                    element: <ConfirmedBooking/>
                }
            ]
        },
    ])

    return(
        <main>
            <RouterProvider router={router} />
        </main>
    )
}

export default Main