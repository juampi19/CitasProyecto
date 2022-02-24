import { mascotaInput, propietarioInput, telefonoInput, horaInput, fechaInput, sintomasInput, formulario } from './selectores.js';
import UI from './Classes/UI.js';
import Citas from './Classes/Citas.js';

//Objeto para almacenar la informacion de los inputs y luego guardarlos
const citaObj = {
    mascota: '',
    propietario: '',
    telefono: '',
    fecha: '',
    hora: '',
    sintomas: ''
}

//Instancias de las clases
const ui = new UI();
const administrarCitas = new Citas();

//Para habilitar el modo edicion
let editando;

//Funcion para llegar el objeto con los datos del input
export function datosCitas(e) {
    citaObj[ e.target.name ] = e.target.value;
}

//Funcion para agregar una nueva cita
export function nuevaCita( e ) {
    e.preventDefault();

    //Comprobar que el objeto no este vacio
    const { mascota, propietario, telefono, fecha, hora, sintomas } = citaObj;

    if( mascota === '' || propietario === '' || telefono === ''|| fecha === '' || hora === '' || sintomas === '') {
        ui.imprimirMensaje( 'Todos los campos deben son obligatorios', 'error' );
        
        return;
    }

    if( editando ) {
        console.log( 'Modo edicion... pendiente' );
        //Pasamos una copia del objeto al modo edicion
        administrarCitas.modoEdicion( {...citaObj} );
        
        formulario.querySelector( 'button[type="submit"]' ).textContent = 'Crear Cita';

        editando = false;

    } else {
        citaObj.id = Date.now();

        administrarCitas.agregarCita( { ...citaObj } );

        ui.imprimirMensaje( 'Cita agregada correctamente' );
    }  

    

    //Imprimimos la cita en el html
    ui.imprimirCitas( administrarCitas ); //Le pasamos el objeto de citas ya que contiene el arreglo con las citas

    //Reiniciamos el objeto
    reiniciarObjeto();
    
    //Reiniciamos el formulario
    formulario.reset();
}


//Funcion para reiniciar el objeto
function reiniciarObjeto() {
    citaObj.mascota = '';
    citaObj.propietario = '';
    citaObj.telefono = '';
    citaObj.fecha = '';
    citaObj.hora = '';
    citaObj.sintomas = '';
}


//Funcion para eliminar cita
export function eliminarCita( id ) {
    administrarCitas.borrarCita( id );

    ui.imprimirCitas( administrarCitas );
}


export function editarCita( cita ) {
    const { mascota, propietario, telefono, fecha, hora, sintomas, id } = cita;

    //Llenamos los input con la cita que vamos a editar
    mascotaInput.value = mascota;
    propietarioInput.value = propietario;
    telefonoInput.value = telefono;
    fechaInput.value = fecha;
    horaInput.value = hora;
    sintomasInput.value = sintomas;

    //Llenamos el objeto con los valores de la cita
    citaObj.mascota = mascota;
    citaObj.propietario = propietario;
    citaObj.telefono = telefono;
    citaObj.fecha = fecha;
    citaObj.hora = hora;
    citaObj.sintomas = sintomas;
    citaObj.id = id;
    formulario.querySelector( 'button[type="submit"]' ).textContent = 'Guardar Cambios';

    editando = true;
}