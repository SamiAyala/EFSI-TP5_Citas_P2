import { useState } from 'react';
import './App.css';
import Cita from './componentes/Cita';
import Formulario from './componentes/Formulario';

function App() {
  const [citas, setCitas] = useState([{
    mascota:'Nina',
    dueño: 'Martin',
    fecha: '2021-08-05',
    hora: '08:20',
    sintomas: 'Le duele la pierna'
  }]);

  function getCitas() {
    return citas;
  }

  return (
    <div className="App">
      <h1 className="titulo">Administrador de Pacientes</h1>
      <div className="container">
        <div className='one-half column'>
          <h2>Crear Mi Cita</h2>
          <div>
            <Formulario getCitas={getCitas} setCitas={setCitas}></Formulario>
          </div>
        </div>
        <div className='one-half column'>
          <h2>Administra tus Citas</h2>
          <div>
            {citas.map(cita => <Cita id={Math.floor(Math.random() * 100)} mascota={cita.mascota} dueño={cita.dueño} fecha={cita.fecha} hora={cita.hora} sintoma={cita.sintomas} getCitas={getCitas} setCitas={setCitas}></Cita>)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
