import { useState, useEffect } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux'
import { createOrder, updateOrder } from '../redux/actions/ordersActions'
import { useSelector } from 'react-redux'
import * as moment from 'moment';
import 'moment/locale/it'
import { FormTitle } from './FormTitle'



export function OrderForm({ currentId, setCurrentId }) {
    moment.locale()
    const order = useSelector((state) => currentId ? state.orders.find((o) => o._id === currentId) : null)
    const orders = useSelector((state) => state.orders)

    const initialDetails = {
        firstName: '',
        lastName: '',
        date: ''
    }

    const [details, setDetails] = useState(initialDetails)
    const dispatch = useDispatch()
    const orderIndex = orders.indexOf(order);
    useEffect(() => {
        if (order) setDetails(order)
    }, [order])


    const handleFormSubmit = (e) => {
        e.preventDefault()

        if (currentId) {
            dispatch(updateOrder(currentId, details))
        } else {
            dispatch(createOrder(details))
        }
        clear()
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setDetails({ ...details, [name]: value })

    }

    const clear = () => {
        setCurrentId(null)
        setDetails(initialDetails)
    }


    return (
        <div >
            <FormTitle order={order} orderIndex={orderIndex} />
            <form onSubmit={handleFormSubmit} autoComplete="off" style={{ marginTop: '63px' }}>
                <TextField
                    style={{ marginLeft: '10px', marginBottom: '10px' }}
                    required
                    id="outlined"
                    label="שם פרטי"
                    name="firstName"
                    type="text"
                    value={details.firstName}
                    onChange={(e) => handleInputChange(e)}
                />
                <TextField
                    style={{ marginLeft: '10px' }}
                    required
                    id="outlined"
                    label="שם משפחה"
                    name="lastName"
                    type="text"
                    value={details.lastName}
                    onChange={(e) => handleInputChange(e)} />
                <br />
                <TextField
                    style={{ marginBottom: '10px' }}
                    name="date"
                    type="date"
                    value={details.date}
                    onChange={(e) => handleInputChange(e)} />
                <br />

                <div className="btn-container">

                    <Button variant="contained" color="primary" fullWidth size="large" type="submit">הוספה</Button>
                </div>
            </form>
        </div >
    )
}