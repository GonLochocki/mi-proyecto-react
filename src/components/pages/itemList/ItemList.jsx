import { Button } from '@mui/material';

const ItemList = ({ products, setProducts }) => {
  return (
    <div>
      <h1>Productos</h1>
       <button onClick={()=>setProducts([...products, {}])}>Agregar Productos</button>     
    </div>
  );
};

export default ItemList;
