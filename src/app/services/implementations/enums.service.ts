import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Enums } from 'src/app/models/shared/enums.model';
import { environment } from 'src/environments/environment';
import { IEnumsService } from '../interfaces/enums.service';

@Injectable({
  providedIn: 'root'
})
export class EnumsService extends IEnumsService {

  constructor(private http: HttpClient) {
    super();
  }

  getEnumTipoDocumento(): Observable<Enums> {
    return this.http.get<Enums>(`${environment.apiURL}/Enums/GetEnumTipoDocumento`);
  }
}
