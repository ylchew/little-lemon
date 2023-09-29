import { render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';

test('Renders the BookingForm heading', () => {
    render(<BookingForm />);
    const timeElement = screen.getByLabelText(/Choose date/);
    expect(timeElement).toBeInTheDocument();
})