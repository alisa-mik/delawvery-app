import { OrderItem } from './OrderItem'
import { useSelector } from 'react-redux'


export function OrderList({ selectOrder, setCurrentId }) {

    const orders = useSelector((state) => state.orders)

    return (
        <div>
            {orders.map((order, index) => (
                <OrderItem key={order._id} index={index} setCurrentId={setCurrentId} orders={orders} order={order} />
            ))}
        </div>
    )
}