import { EntityModel } from "./shared/entity.model";

export class Persona2Model extends EntityModel {       
    nombres: string;
    apellidos: string;
    tipoDocumento: number;
    nombreTipoDocumento: string;
    noDocumento: string;
    fechaNacimiento: Date;
    noContacto: string;
    email: string;
    direccion: string; 
    
    constructor(){
        super();

        this.nombres = '';
        this.apellidos = '';
        this.tipoDocumento = 0;
        this.nombreTipoDocumento = '';
        this.noDocumento = '';
        this.fechaNacimiento = new Date();   
        this.noContacto = '';
        this.email = '';
        this.direccion = '';       
    }
}