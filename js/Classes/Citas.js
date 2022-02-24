class Citas {
    constructor() {
        this.citas = [];
    }

    agregarCita( cita ) {
        this.citas = [ ...this.citas, cita ];
        console.log( this.citas );
    }

    borrarCita( id ) {
        this.citas = this.citas.filter( cita => cita.id !== id  );
    }

    modoEdicion( objActualizado ) {
        this.citas = this.citas.map( cita => cita.id === objActualizado.id ? objActualizado : cita );
    }
}


export default Citas;