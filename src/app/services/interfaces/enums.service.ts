import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Enums } from 'src/app/models/shared/enums.model';

@Injectable({
  providedIn: 'root'
})
export abstract class IEnumsService {

  constructor() { }

  abstract getEnumTipoDocumento(): Observable<Enums>;
}
