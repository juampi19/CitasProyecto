import {mascotaInput, propietarioInput, telefonoInput, horaInput, fechaInput, sintomasInput, formulario} from './selectores.js';
import { datosCitas, nuevaCita } from './funciones.js';

document.addEventListener( 'DOMContentLoaded', iniciarApp );


function iniciarApp() {
    mascotaInput.addEventListener( 'input', datosCitas );
    propietarioInput.addEventListener( 'input', datosCitas );
    telefonoInput.addEventListener( 'input', datosCitas );
    fechaInput.addEventListener( 'input', datosCitas );
    horaInput.addEventListener( 'input', datosCitas );
    sintomasInput.addEventListener( 'input', datosCitas );

    //Evento para el formulario
    formulario.addEventListener( 'submit', nuevaCita );
}