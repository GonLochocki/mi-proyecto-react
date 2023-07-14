import { Route, Routes } from "react-router-dom"
import Navbar from "../components/layout/navbar/Navbar"
import { rutas } from "./menuRutas"



const AppRouter = () => {

 
  return (
    <Routes>
        <Route element={<Navbar />}>
          {
            rutas.map(({id, path, Element})=> (
                <Route key={id} path={path} element={<Element />} />
            ))
          }
        </Route>
          <Route path="*" element={<h1>ERROR 404</h1>} />
      </Routes>
  )
}

export default AppRouter