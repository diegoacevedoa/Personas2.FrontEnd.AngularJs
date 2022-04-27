import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona2Model } from 'src/app/models/persona2.model';

@Injectable({
  providedIn: 'root'
})
export abstract class IPersona2Service {
  abstract getAllPersonas(): Observable<Persona2Model>;
  abstract searchAllPersonas(search: any): Observable<Persona2Model>;
  abstract savePersona(persona: Persona2Model): Observable<number>;
  abstract deletePersona(id: number): Observable<boolean>;
}
