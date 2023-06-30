import CounterContainer from "../../common/counter/CounterContainer"


const ItemDetail = ({product, agregarAlCarrito}) => {
  return (
    <div>
      <h2>{product.title}</h2>
      <h2>{product.price}</h2>
      <CounterContainer stock={product.stock} agregarAlCarrito={agregarAlCarrito} />
    </div>
  )
}

export default ItemDetail