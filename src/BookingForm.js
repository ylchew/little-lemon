import { useState, useEffect } from "react";
import { Formik, Field, Form, useFormik } from 'formik';
import { object, string, number, date } from 'yup';

function BookingForm({availableTimes, submitForm, updateAvailableTimes}) {

    const today = new Date().toISOString().slice(0, 10)
    const [date, setDate] = useState(today)
    const [time, setTime] = useState(``)
    const [guestsNo, setGuestsNo] = useState(``)
    const [occasion, setOccasion] = useState(``)

    const [ updatedDates, updateUpdatedDates ] = useState('')

    const formik = useFormik({
        initialValues: {
            date: today,
            time: '',
            guestsNo: 1,
            occasion: '',
        },
        onSubmit: (values) => {
            submitForm(values)
        },
        validationSchema: object({

        })
    })

    useEffect(()=>{
        // console.log(`BookingForm/date: ${date}`)
        // console.log(`BookingForm/time: ${time}`)
        // console.log(`BookingForm/guestsNo: ${guestsNo}`)
        // console.log(`BookingForm/occasion: ${occasion}`)
    },[availableTimes, date, time, guestsNo, occasion])

    useEffect(()=> {
        console.log('availableTimes is updated in BookingForm')
        console.log(availableTimes)
    },[availableTimes])

    return(
        <Formik>
            <Form
                className="booking-form"
            >
                <div>
                    <label htmlFor="res-date">Choose date</label>
                    <Field
                        type="date"
                        id="res-date"
                        value={date}
                        onChange={(e) => {
                            setDate(e.target.value)
                            updateAvailableTimes({type: 'update_date', dateToUpdate: e.target.value})
                        }}
                    />
                </div>
                <div>
                    <label htmlFor="res-time">Choose time</label>
                    <select
                        id="res-time"
                        value={time}
                        onChange={(e) => {
                            setTime(e.target.value)
                        }}
                    >
                        {
                            (availableTimes.map) ? availableTimes.map((item,index) => (
                                <option value={item} key={index}>{item}</option>
                            )) : null
                        }
                    </select>
                </div>
                <div>
                    <label htmlFor="guests">Number of guests</label>
                    <input type="number"
                        placeholder="1"
                        min="1"
                        max="10"
                        id="guests"
                        value={guestsNo}
                        onChange={(e) => {
                            setGuestsNo(e.target.value)
                        }}
                    />
                </div>
                <div>
                    <label htmlFor="occasion">Occasion</label>
                    <select
                        id="occasion"
                        value={occasion}
                        onChange={(e) => {
                            setOccasion(e.target.value)
                        }}
                    >
                        <option value="birthday">Birthday</option>
                        <option value="anniversary">Anniversary</option>
                    </select>
                </div>
                <input type="submit" value="Make your reservation" />
            </Form>
        </Formik>
    )
}

export default BookingForm