import { contenedorCitas } from '../selectores.js';
import{ eliminarCita, editarCita } from '../funciones.js';

class UI {

    imprimirMensaje( mensaje, tipo ) {
        const errores = document.querySelector( '.errores' );
        if( !errores ) {
            const divMensaje = document.createElement( 'div' );
            divMensaje.classList.add( 'text-center', 'alert', 'd-block', 'col-12', 'errores' );

            if( tipo === 'error' ) {
                divMensaje.classList.add( 'alert-danger' );
            }else {
                divMensaje.classList.add( 'alert-success' );
            }

            divMensaje.textContent = mensaje;

            document.querySelector( '#contenido' ).insertBefore( divMensaje, document.querySelector( '.agregar-cita' ));

            setTimeout( () => {
                divMensaje.remove();
            },3000 )
        }
    }

    imprimirCitas( {citas} ) { //Aplicamos destructuring desde la funcion
        this.limpiarHTML();

        citas.forEach( cita => {
            const { mascota, propietario, telefono, fecha, hora, sintomas, id } = cita;

            const divCita = document.createElement( 'div' );
            divCita.classList.add( 'cita', 'p-3' );
            divCita.dataset.id = id;
            
            //Scripting del html
            const mascotaParrafo = document.createElement( 'h2' );
            mascotaParrafo.classList.add( 'card-title', 'font-weight-bolder' );
            mascotaParrafo.textContent = mascota;

            const propietarioParrafo = document.createElement( 'p' );
            propietarioParrafo.innerHTML = `<span class="font-weight-bolder">Propietario:</span> ${propietario}`;

            const telefonoParrafo = document.createElement( 'p' );
            telefonoParrafo.innerHTML = `<span class="font-weight-bolder">Telefono:</span> ${telefono}`;

            const fechaParrafo = document.createElement( 'p' );
            fechaParrafo.innerHTML = `<span class="font-weight-bolder">Fecha:</span> ${fecha}`;

            const horaParrafo = document.createElement( 'p' );
            horaParrafo.innerHTML = `<span class="font-weight-bolder">Hora:</span> ${hora}`;

            const sintomasParrafo = document.createElement( 'p' );
            sintomasParrafo.innerHTML = `<span class="font-weight-bolder">Sintomas:</span> ${sintomas}`;

            //boton para eliminar
            const btnBorrar = document.createElement( 'button' );
            btnBorrar.classList.add( 'btn', 'btn-danger', 'mr-2' );
            btnBorrar.innerHTML = 'Eliminar <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>';

            btnBorrar.onclick = () => {
                eliminarCita( id );
            }

            //Boton para editar 
            const btnEditar = document.createElement( 'button' );
            btnEditar.classList.add( 'btn', 'btn-info' );
            btnEditar.innerHTML = 'Editar <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>';

            btnEditar.onclick = () => {
                editarCita( cita );
            }
            

            //Agregando los parrafos al div de citas
            divCita.appendChild( mascotaParrafo );
            divCita.appendChild( propietarioParrafo );
            divCita.appendChild( telefonoParrafo );
            divCita.appendChild( fechaParrafo );
            divCita.appendChild( horaParrafo );
            divCita.appendChild( sintomasParrafo );
            divCita.appendChild( btnBorrar );
            divCita.appendChild( btnEditar );

            //Agregando el div de citas al html
            contenedorCitas.appendChild( divCita );
        } )

    }


    limpiarHTML() {
        while( contenedorCitas.firstChild ) {
            contenedorCitas.removeChild( contenedorCitas.firstChild );
        }
    }
}


export default UI;