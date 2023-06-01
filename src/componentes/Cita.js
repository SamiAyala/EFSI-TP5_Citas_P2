import './Cita.css';

function Cita(props) {
    const eliminarCita = () => {
        console.log(props.getCitas,props.id);
        let citas = props.getCitas();
        props.setCitas(
                citas.filter(cita => cita.id === props.id)
        )
    }
    return (
        <div className = 'cita'>
              <p>Mascota: <span>{props.mascota}</span></p>
              <p>Dueño: <span>{props.dueño}</span></p>
              <p>Fecha: <span>{props.fecha}</span></p>
              <p>Hora: <span>{props.hora}</span></p>
              <p>Sintomas: <span>{props.sintomas}</span></p>
              <button className='button elimnar u-full-width' onClick={eliminarCita}>Eliminar ×</button>
            </div>
    )
}

export default Cita;