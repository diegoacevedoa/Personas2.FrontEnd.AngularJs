import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Persona2Component } from './components/persona2/persona2.component';
import { Persona2Service } from './services/implementations/persona2.service';
import { IPersona2Service } from './services/interfaces/persona2.service';
import { ModalPersona2Component } from './components/modals/modal-persona2/modal-persona2.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IEnumsService } from './services/interfaces/enums.service';
import { EnumsService } from './services/implementations/enums.service';

@NgModule({
  declarations: [
    AppComponent,
    Persona2Component,
    ModalPersona2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [
    {provide: IPersona2Service, useClass: Persona2Service},
    {provide: IEnumsService, useClass: EnumsService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
