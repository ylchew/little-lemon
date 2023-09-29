import { useState, useEffect } from "react";

function BookingForm(props) {
    const [date, setDate] = useState(``)
    const [time, setTime] = useState(``)
    const [guestsNo, setGuestsNo] = useState(``)
    const [occasion, setOccasion] = useState(``)

    const availableTimes = props.availableTimes

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    useEffect(()=>{
        console.log(`date: ${date}`)
        console.log(`time: ${time}`)
        console.log(`guestsNo: ${guestsNo}`)
        console.log(`occasion: ${occasion}`)
    },[date, time, guestsNo, occasion])

    return(
        <form
            class="booking-form"
        >
            <div>
                <label htmlFor="res-date">Choose date</label>
                <input
                    type="date"
                    id="res-date"
                    value={date}
                    onChange={(e) => {
                        setDate(e.target.value)
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
                        availableTimes?.map((item,index) => (
                            <option value={item} key={index}>{item}</option>
                        ))
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
        </form>
    )
}

export default BookingForm