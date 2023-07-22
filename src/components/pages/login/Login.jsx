
import { Box, Button, TextField } from "@mui/material";

const Login = ({handleChange, handleSubmit, errors}) => {
 

  return (
    <div>
      <form onSubmit={handleSubmit}>
     
        <Box sx={{padding: 10}}>
          <TextField
            label="Usuario"
            variant="outlined"
            name="name"
            onChange={handleChange}
            error={errors.name ? true : false}
            helperText={errors.name}
          />
           <TextField
            label="Documento"
            variant="outlined"
            name="document"
            onChange={handleChange}
            error={errors.document ? true : false}
            helperText={errors.document}
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
