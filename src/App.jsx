
import './App.css';
import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';


// COMPONENTE: es una funcion que comienza con una letra mayuscula y retorna JSX.
// PROPS: se utilizan para pasar datos de un componente padre a un comp hijo manteniendo el flujo unidireccional de los datos
//
function App() {


  return (
    <div className = "App">
      <NavBar />
      <ItemListContainer greeting={'Compra de autos a escala !'}/>
    </div>
  );
}

export default App