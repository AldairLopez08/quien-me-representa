import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Autoridades, Ayuntamientos } from '../interfaces/autoridades.interface';

@Injectable({
  providedIn: 'root'
})
export class AutoridadesService {

  private baseUrl: string= environment.baseUrl;

  constructor(private http: HttpClient) { }

  getAutoridades():Observable<Autoridades[]> {
    return this.http.get<Autoridades[]>(`${ this.baseUrl}/autoridades.json`);
  }
  getAutoridadPorId(id: string):Observable<Autoridades>{
    return this.http.get<Autoridades>(`${ this.baseUrl}/autoridades/${ id }`);
  }
  getSugerencias(termino: string):Observable<Autoridades[]>{
    return this.http.get<Autoridades[]>(`${ this.baseUrl}/autoridades?q=${termino}&_limit=6`);
  }
  getSeccionPorId(id: string):Observable<Ayuntamientos> {
    return this.http.get<Ayuntamientos>(`${ this.baseUrl}/ayuntamientos/${ id }.json`);
  }
}
