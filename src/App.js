import { useState } from 'react';
import './App.css';
import Cita from './componentes/Cita';

function App() {
  const [citas,setCitas] = useState([]);

  const agregarCita = e => {
    e.preventDefault();
    setCitas(
      [
        ...citas,
        e.target.mascota.value,
        e.target.dueño.value,
        e.target.fecha.value,
        e.target.hora.value,
        e.target.sintoma.value
      ]
    )
  }
  return (
    <div className="App">
      <header className="App-header">
       <h1 className="titulo">Administrador de Pacientes</h1>
       <div className="container">
        <table>
          <td className="one-half-column">
            <h2>Crear Mi Cita</h2>
            <div className="widthColumn">
            <form onSubmit ={ (e) => agregarCita(e) }>
            <label>Nombre Mascota</label><br></br><input type="text" name="mascota" class="u-full-width" placeholder="Nombre Mascota"
                     ></input><br></br><label>Nombre Dueño</label><br></br><input type="text" name="dueño" class="u-full-width"
                     placeholder="Nombre dueño de la mascota"></input><br></br><label>Fecha</label><br></br><input type="date" name="fecha"
                     class="u-full-width"></input><br></br><label>hora</label><br></br><input type="time" name="hora" class="u-full-width"
                     ></input><br></br><label>Sintomas</label><br></br><textarea name="sintomas" class="u-full-width"></textarea><br></br><button type="submit"
                      class="u-full-width button-primary">Agregar Cita</button>
            </form>
            </div>
          </td>
          <td className="one-half-column">
            <h2>Administra tus Citas</h2>
            <div className="widthColumn">
            <Cita mascota="Nina" dueño="Martin" fecha="2021-08-05" hora="08:20" sintoma="Le duele la pierna"></Cita>
            {citas.map(cita => <Cita mascota={cita.mascota} dueño = {cita.dueño} fecha = {cita.fecha} hora = {cita.hora} sintoma = {cita.sintoma}></Cita>)}
            </div>
          </td>
        </table>
       </div>
      </header>
    </div>
  );
}

export default App;
