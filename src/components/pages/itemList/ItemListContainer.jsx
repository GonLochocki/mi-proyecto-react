import { useState, useEffect } from "react";
import { productos } from "../../../productsMock";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    let promise = new Promise((resolve, reject) => {
      resolve(productos);
    });

    promise.then((res) => setItems(res)).catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
