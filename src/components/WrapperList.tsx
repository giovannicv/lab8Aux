export const WapperList = (props: { children: any }) => {
    const { children } = props
    return (
        <div>
            <h2>Compras de la semana</h2>
            <div>
                { children }
            </div>
        </div>
    )
}