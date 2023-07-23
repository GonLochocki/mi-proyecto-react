
import { Box, Button, TextField } from "@mui/material";

const Login = ({handleChange, handleSubmit, errors}) => {
 

  return (
    <div>
      <form onSubmit={handleSubmit}>
     
        <Box sx={{padding: 10}}>
          <TextField
            label="Usuario"
            variant="outlined"
            name="nombre"
            onChange={handleChange}
            error={errors.nombre ? true : false}
            helperText={errors.nombre}
          />
           <TextField
            label="Documento"
            variant="outlined"
            name="dni"
            onChange={handleChange}
            error={errors.dni ? true : false}
            helperText={errors.dni}
          />
          <TextField
            label="Contraseña"
            variant="outlined"
            name="password"
            onChange={handleChange}
            error={errors.password ? true : false}
            helperText={errors.password}
          />
          <Button type="submit">
            Enviar
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default Login;
