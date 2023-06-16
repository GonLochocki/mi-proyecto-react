import ItemList from "./ItemList";

const ItemListContainer = ({ saludo }) => {
  let apellido = "perez";

  return <ItemList apellido={apellido} saludo={saludo} />;
};

export default ItemListContainer;
