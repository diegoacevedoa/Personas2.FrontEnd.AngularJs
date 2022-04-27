import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Persona2Model } from 'src/app/models/persona2.model';
import { IPersona2Service } from 'src/app/services/interfaces/persona2.service';
import Swal from 'sweetalert2';
import { ModalPersona2Component } from '../modals/modal-persona2/modal-persona2.component';

@Component({
  selector: 'app-persona2',
  templateUrl: './persona2.component.html',
  styleUrls: ['./persona2.component.scss']
})
export class Persona2Component implements OnInit {
  public dataSource!: Persona2Model[];
  public search!: FormGroup;

  constructor(
    private personaService: IPersona2Service,
    private formBuilder: FormBuilder,
    private modalService: NgbModal
  ) { }

  createSearch() {
    this.search = this.formBuilder.group({
      nombres: [''],
      noDocumento: ['']
    })

    this.getAllPersonas();
  }

  getAllPersonas() {
    this.personaService.getAllPersonas().subscribe((response: any) => {
      this.dataSource = response;
    });
  }

  searchAllPersonas() {
    this.personaService.searchAllPersonas(this.search.value).subscribe((response: any) => {
      this.dataSource = response;
    });
  }

  savePersona(persona?: Persona2Model) {
    const modalRef = this.modalService.open(ModalPersona2Component);
    modalRef.componentInstance.data = persona;
    modalRef.result.then(response => {
      if (response > 0) {
        this.getAllPersonas();
      }
    }).catch(e => {
      console.log(e);
    });
  }

  deletePersona(id: number) {
    if (confirm("Está seguro que dese eliminar esta persona?")) {
      this.personaService.deletePersona(id).subscribe((response: any) => {
        if (response) {
          Swal.fire({
            title: "Eliminar",
            text: "La persona ha sido eliminada éxitosamente.",
            icon: "success",
            timer: 5000
          });

          this.getAllPersonas();
        }
        else {
          Swal.fire({
            title: "Eliminar",
            text: "La persona no ha sido eliminada.",
            icon: "error",
            timer: 5000
          });
        }
      });
    }
  }

  ngOnInit(): void {
    this.createSearch();
  }
}
