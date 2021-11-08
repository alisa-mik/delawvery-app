

export function FormTitle({ order, orderIndex }) {

    return (
        <h1 style={{ margin: '0', lineHeight: '30px' }}>
            {order ? ` הזמנה ${orderIndex + 1}` : 'הזמנה חדשה'}
        </h1>
    )
}