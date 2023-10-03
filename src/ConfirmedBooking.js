import done from './check_circle_FILL0_wght300_GRAD0_opsz48.svg'
function ConfirmedBooking() {
    return(
        <div className="confirmed-booking-screen">
            <img src={done} id="booking-done" />
            Reservation confirmed!
        </div>
    )
}

export default ConfirmedBooking