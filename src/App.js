import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './componentes/NavBar/NavBar';
import ProductsView from './views/ProductsView';
import CategoryView from './views/CategotyView';
import InformationViews from './views/InformationViews';
import "./App.css";




// COMPONENTE: es una funcion que comienza con una letra mayuscula y retorna JSX.
// PROPS: se utilizan para pasar datos de un componente padre a un comp hijo manteniendo el flujo unidireccional de los datos
//
function App() {


  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ProductsView />}></Route>
        <Route path="/category/:category" element={<CategoryView />}></Route>
        <Route path="/products/:id" element={<InformationViews />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App