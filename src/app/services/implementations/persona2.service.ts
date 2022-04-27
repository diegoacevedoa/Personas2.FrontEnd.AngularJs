import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Persona2Model } from 'src/app/models/persona2.model';
import { IPersona2Service } from '../interfaces/persona2.service';

@Injectable({
  providedIn: 'root'
})
export class Persona2Service extends IPersona2Service {

  constructor(private http: HttpClient) {
    super();
  }

  getAllPersonas(): Observable<Persona2Model> {
    return this.http.get<Persona2Model>(`${environment.apiURL}/Personas2/GetAllPersonas`);
  }

  searchAllPersonas(search: any): Observable<Persona2Model> {
    return this.http.post<Persona2Model>(`${environment.apiURL}/Personas2/SearchAllPersonas`, search);
  }

  savePersona(persona: Persona2Model): Observable<number> {
    return this.http.post<number>(`${environment.apiURL}/Personas2/SavePersona`, persona);
  }

  deletePersona(id: number): Observable<boolean> {
    return this.http.post<boolean>(`${environment.apiURL}/Personas2/DeletePersona`, id);
  }
}
