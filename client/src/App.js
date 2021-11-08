import { useState, useEffect } from 'react'
import { Header } from './components/Header'
import { OrderForm } from './components/OrderForm'
import { OrderList } from './components/OrderList'
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { ListTitle } from './components/ListTitle'
import { useDispatch } from 'react-redux'
import { getOrders } from './redux/actions/ordersActions'

export function App() {
    const [currentId, setCurrentId] = useState(null)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getOrders())
    }, [dispatch])


    return (
        <Container>
            <Grid container spacing={3}>
                <Grid item xs={12} >
                    <Header />
                </Grid>
                <Grid item xs={4} >
                </Grid>
                <Grid item xs={8} >
                </Grid>
                <Grid item xs={4}>
                    <ListTitle />
                    <OrderList setCurrentId={setCurrentId} />
                </Grid>
                <Grid item xs={8} >
                    {/* <FormTitle /> */}
                    <OrderForm setCurrentId={setCurrentId} currentId={currentId} />
                </Grid>
            </Grid>
        </Container>
    )
}