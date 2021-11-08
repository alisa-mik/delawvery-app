import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import moment from 'moment';
import { useDispatch } from 'react-redux'
import { deleteOrder } from '../redux/actions/ordersActions'

export function OrderItem({ order, index, selectOrder, orders, setCurrentId }) {
    const { firstName, lastName, date } = order
    const dispatch = useDispatch()


    return (
        <div>
            <Card variant="outlined" style={{ marginBottom: '10px' }} >
                <CardHeader
                    style={{ border: 'none' }}
                    action={
                        [<IconButton key={'1'} aria-label="actions" size="small"
                            onClick={() => { setCurrentId(order._id) }}
                        >
                            <EditIcon />
                        </IconButton>,
                        <IconButton key={'2'} aria-label="actions" size="small"
                            onClick={() => { dispatch(deleteOrder(order._id)) }}
                        >
                            <ClearOutlinedIcon />
                        </IconButton>
                        ]}

                    title={`הזמנה ${orders.indexOf(order) + 1}`}
                >
                </CardHeader>
                <CardContent>

                    <Typography variant="h6" component="div" >
                        פרטים
                    </Typography>

                    <Typography variant="body2">
                        {firstName}, {lastName}
                        <br />
                        {moment(date).format('L')}
                    </Typography>
                </CardContent>
            </Card>
        </div >
    )
}