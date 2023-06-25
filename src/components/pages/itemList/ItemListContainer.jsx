

import ItemList from './ItemList'
import { useState } from 'react'

const ItemListContainer = () => {

   

    const [products, setProducts] = useState([])
    

  return (
    <ItemList products={products} setProduct={setProducts} />
  )
}

export default ItemListContainer