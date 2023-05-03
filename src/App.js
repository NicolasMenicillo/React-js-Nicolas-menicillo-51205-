import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './componentes/NavBar/NavBar';
import ProductsView from './views/ProductsView';
import CategoryView from './views/CategotyView';
import InformationViews from './views/InformationViews';
import "./App.css";
import { useState } from 'react';
import GeneralContext from './componentes/Conteeext/GeneralContext';
import DetailCar from './views/DetailCar';




// COMPONENTE: es una funcion que comienza con una letra mayuscula y retorna JSX.
// PROPS: se utilizan para pasar datos de un componente padre a un comp hijo manteniendo el flujo unidireccional de los datos
//
function App() {

  const [car, setCar] = useState([]);

  const addToCar = (item) => {
    setCar([...car, item]);
  };

  const removeToCar = (item) => {
    const newArray = car.filter(_item => item.id !== _item.id);
    setCar(newArray)
  };

  return (
    <GeneralContext.Provider value={{ addToCar, car, removeToCar }}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ProductsView />}></Route>
          <Route path="/category/:category" element={<CategoryView />}></Route>
          <Route path="/products/:id" element={<InformationViews />}></Route>
          <Route path="/products/car" element={<DetailCar />}></Route>
        </Routes>
      </BrowserRouter>
    </GeneralContext.Provider>
  );
}

export default App