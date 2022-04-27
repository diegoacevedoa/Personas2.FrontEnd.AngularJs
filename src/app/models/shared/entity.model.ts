export class EntityModel {
    id: number;
    activo: boolean;
    eliminado: boolean;
    usuarioRegistro: number;
    usuarioModifica: number;
    usuarioElimina: number;
    fechaRegistro: Date;
    fechaModificado!: Date;
    fechaEliminado!: Date;

    constructor(){
        this.id = 0;
        this.activo = true;
        this.eliminado = false;
        this.usuarioRegistro = 0;
        this.usuarioModifica = 0;
        this.usuarioElimina = 0;
        this.fechaRegistro = new Date();            
    }
}