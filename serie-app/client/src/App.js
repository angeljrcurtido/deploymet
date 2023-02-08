import logo from './logo.svg';
import './App.css';
import AutoresFormulario from './components/AutoresFormularios';
import TodosAutores from './components/TodosAutores';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BarraNavegacion from './components/BarraNavegacion';
import UnAutor from './components/UnAutor';
import EditarAutor from './components/EditarAutor';
import Registro from './components/Registro';
import Login from './components/Login'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <BarraNavegacion/>
      <Routes>
      <Route path='/nuevoautor' element = {<AutoresFormulario/>}/>
      <Route path='/todosautores' element = {<TodosAutores/>}/>
      <Route path='/obtenerunautor/:id' element = {<UnAutor/>}/>
      <Route path='/editarunautor/:id' element={<EditarAutor/>}/>
      <Route path='/registro' element={<Registro/>}/>
      <Route path='/login' element={<Login/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
