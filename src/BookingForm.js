import { useContext, Fragment } from "react"
import { useNavigate, Outlet } from "react-router-dom"
import { useFormik } from 'formik'
import { Button, FormControl, FormErrorMessage, FormLabel, Input, Select } from '@chakra-ui/react'
import * as Yup from 'yup'
import { StateContext } from './StateContext'
import { submitAPI } from "./mockAPI"
import image from './Logo.svg'


function BookingForm({availableTimes, submitForm, updateAvailableTimes}) {

  const [state, setState] = useContext(StateContext)
  const today = new Date().toISOString().slice(0, 10)
  const navigate = useNavigate()

  const occasions = ['None', 'Birthday', 'Anniversary']
  const formik = useFormik({
      initialValues: {
          name: '',
          email: '',
          date: state.today,
          time: '',
          guestsNo: 1,
          occasion: 'none',
      },
      onSubmit: (values) => {
          console.log(values)
          submitAPI(values).then((response) => {
              if(response) {
                      setState({...state, formStatus: 'success'})
                      navigate('/confirmed-booking')
              }
          })
      },
      validationSchema: Yup.object({
          name: Yup.string().required("Required"),
          email: Yup.string().email('Invalid email address').required('Required'),
          date: Yup.date().min(today, ({min})=>`Date cannot be before today!`),
          guestsNo: Yup.number().min(1, 'Minimum guests required is 1').max(10, 'Maximum guests allowed is 10')
      })
  })

  const FormikForm = () => {
    return (
      <Fragment>
        <FormControl isInvalid={formik.touched.name && formik.errors.name}>
              <FormLabel htmlFor="firstName">Name</FormLabel>
              <Input
                id="res-name"
                name="name"
                {...formik.getFieldProps('name')}
              />
              {
                (formik.touched.name && formik.errors.name) ? <FormErrorMessage>{formik.errors.name}</FormErrorMessage> : null
              }
              </FormControl>
              <FormControl isInvalid={formik.touched.email && formik.errors.email}>
              <FormLabel htmlFor="email">Email Address</FormLabel>
              <Input
                id="res-email"
                name="email"
                type="email"
                {...formik.getFieldProps('email')}
              />
              {
                (formik.touched.email && formik.errors.email) ? <FormErrorMessage>{formik.errors.email}</FormErrorMessage> : null
              }
              </FormControl>
              <FormControl isInvalid={formik.touched.date && formik.errors.dateToUpdate}>
              <FormLabel htmlFor="date">Date</FormLabel>
              <Input
                type="date"
                id="res-date"
                min={today}
                {...formik.getFieldProps('date')}
              />
              {
                (formik.touched.email && formik.errors.email) ? <FormErrorMessage>{formik.errors.email}</FormErrorMessage> : null
              }
              </FormControl>
              <FormControl isInvalid={formik.touched.time && formik.errors.time}>
              <FormLabel htmlFor="time">Time</FormLabel>
              <Select
                  id="res-time"
                  {...formik.getFieldProps('time')}
              >
                  {
                      (state.availableTimes) ? state.availableTimes.map((item,index) => (
                          <option value={item} key={index}>{item}</option>
                      )) : null
                  }
              </Select>
              {
                (formik.touched.email && formik.errors.email) ? <FormErrorMessage>{formik.errors.email}</FormErrorMessage> : null
              }
              </FormControl>
              <FormControl isInvalid={formik.touched.guestsNo && formik.errors.guestsNo}>
              <FormLabel htmlFor="guestsNo">Number of Guests</FormLabel>
              <Input
                  type="number"
                  id="res-guestsNo"
                  name="guestsNo"
                  placeholder="min 1 pax"
                  min="1"
                  max="10"
                  {...formik.getFieldProps('guestsNo')}
              />
              {
                (formik.touched.guestsNo && formik.errors.guestsNo) ? <FormErrorMessage>{formik.errors.guestsNo}</FormErrorMessage> : null
              }
              </FormControl>
              <FormControl isInvalid={formik.touched.occasion && formik.errors.occasion}>
              <FormLabel htmlFor="occasion">Occasion</FormLabel>
              <Select
                  id="res-occasion"
                  {...formik.getFieldProps('occasion')}
              >
                  {
                      occasions.map((item,index) => (
                          <option value={item.toLowerCase()} key={index}>{item}</option>
                      ))
                  }
              </Select>
              {
                (formik.touched.occasion && formik.errors.occasion) ? <FormErrorMessage>{formik.errors.email}</FormErrorMessage> : null
              }
              </FormControl>
              <Button type="submit" value="Make your reservation">Make your reservation</Button>
      </Fragment>
    )
  }


  return(
          <form
              className="booking-form" onSubmit={formik.handleSubmit}
          >
            <img src={image} id="logo" />
            {
              (state.formStatus === 'success') ? <Outlet/> :
              <FormikForm/>
            }
          </form>

  )
}

export default BookingForm