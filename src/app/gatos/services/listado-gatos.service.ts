import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListadoGatosService {

  constructor(private http: HttpClient) { }

  getGatos() {
    return this.http.get('https://api.thecatapi.com/v1/images/search');
  }
}
