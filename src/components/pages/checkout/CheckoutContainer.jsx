import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CheckoutContainer = () => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    name: "",
    lastName: "",
  });

  const funcionDelFormulario = (event) => {
    event.preventDefault();
    navigate("/");
  };

  const funcionDeLosInputs = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  

  return (
    <div>
      <h1>Checkout</h1>
      <form onSubmit={funcionDelFormulario}>
        <input
          type="text"
          placeholder="ingrese su nombre"
          name="name"
          onChange={funcionDeLosInputs}
        />
        <input
          type="text"
          placeholder="ingrese su apellido"
          name="lastName"
          onChange={funcionDeLosInputs}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default CheckoutContainer;
