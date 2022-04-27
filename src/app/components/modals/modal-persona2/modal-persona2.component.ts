import { Component, Input, OnInit } from '@angular/core';
import { inject } from '@angular/core/testing';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Persona2Model } from 'src/app/models/persona2.model';
import { Enums } from 'src/app/models/shared/enums.model';
import { IEnumsService } from 'src/app/services/interfaces/enums.service';
import { IPersona2Service } from 'src/app/services/interfaces/persona2.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modal-persona2',
  templateUrl: './modal-persona2.component.html',
  styleUrls: ['./modal-persona2.component.scss']
})
export class ModalPersona2Component implements OnInit {
  @Input() public data : Persona2Model;
  public formulario: FormGroup;
  public tituloModal: string;
  public tiposDocumento: Enums[];

  constructor(
    private personaService: IPersona2Service,
    private enumsService: IEnumsService,
    private formBuilder: FormBuilder,
    public activeModal: NgbActiveModal
  ) {
    //Inicializamos
    this.tiposDocumento = [{ id: 0, nombre: '' }];
    this.tituloModal = '';
    this.data = new Persona2Model();
    this.formulario = this.formBuilder.group({
      id: 0,
      nombres: '',
      apellidos: '',
      tipoDocumento: 0,
      noDocumento: '',
      fechaNacimiento: '',
      noContacto: '',
      email: '',
      direccion: ''
    });   
  }

  createFormulario(persona?: Persona2Model) {
    if (persona) {
      this.tituloModal = 'Actualizar Persona';

      this.formulario = this.formBuilder.group({
        id: [persona.id],
        nombres: [persona.nombres, [Validators.required, Validators.maxLength(200)]],
        apellidos: [persona.apellidos, [Validators.required, Validators.maxLength(200)]],
        tipoDocumento: [persona.tipoDocumento, [Validators.required, Validators.maxLength(10)]],
        noDocumento: [persona.noDocumento, [Validators.required, Validators.maxLength(50)]],
        fechaNacimiento: [new Date(persona.fechaNacimiento).toISOString().substring(0, 10), Validators.required],
        noContacto: [persona.noContacto, [Validators.required, Validators.maxLength(50)]],
        email: [persona.email, [Validators.required, Validators.maxLength(300)]],
        direccion: [persona.direccion, [Validators.required, Validators.maxLength(300)]]
      });
    }
    else {
      this.tituloModal = 'Agregar Persona';

      this.formulario = this.formBuilder.group({
        id: 0,
        nombres: ['', [Validators.required, Validators.maxLength(200)]],
        apellidos: ['', [Validators.required, Validators.maxLength(200)]],
        tipoDocumento: [0, [Validators.required, Validators.maxLength(10)]],
        noDocumento: ['', [Validators.required, Validators.maxLength(50)]],
        fechaNacimiento: ['', Validators.required],
        noContacto: ['', [Validators.required, Validators.maxLength(50)]],
        email: ['', [Validators.required, Validators.maxLength(300)]],
        direccion: ['', [Validators.required, Validators.maxLength(300)]]
      });
    }
  }

  getEnumTipoDocumento() {
    this.enumsService.getEnumTipoDocumento().subscribe((response: any) => {
      this.tiposDocumento = response;
    });
  }

  savePersona() {
    if (this.formulario.valid) {
      this.personaService.savePersona(this.formulario.value).subscribe((response: any) => {
        if (response) {
          this.activeModal.close(response);

          Swal.fire({
            title: "Guardar",
            text: "La persona ha sido guardada éxitosamente.",
            icon: "success",
            timer: 5000
          });
        }
      });
    }
  }

  ngOnInit(): void {
    this.createFormulario(this.data);
    this.getEnumTipoDocumento();
  }
}
