import './Cita.css';

function Cita(props){
    return(
        <div class="cita">
              <p>Mascota: <span>{props.mascota}</span></p>
              <p>Dueño: <span>{props.dueño}</span></p>
              <p>Fecha: <span>{props.fecha}</span></p>
              <p>Hora: <span>{props.hora}</span></p>
              <p>Sintomas: <span>{props.sintoma}</span></p><button class="button elimnar u-full-width">Eliminar ×</button>
            </div>
    )
}

export default Cita;