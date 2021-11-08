import { useSelector } from 'react-redux'


export function ListTitle() {

    const orders = useSelector((state) => state.orders)

    return (
        <div style={{ textAlign: 'center' }}>
            <h2 style={{ margin: '0' }}>רשימת הזמנות</h2>
            <h3>מספר הזמנות: {orders.length}</h3>
        </div>
    )
}