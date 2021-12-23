import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListadoGatosService } from '../../services/listado-gatos.service';

@Component({
  selector: 'app-gatos-listado',
  templateUrl: './gatos-listado.component.html',
  styleUrls: ['./gatos-listado.component.css']
})
export class GatosListadoComponent implements OnInit {
  gatoUrl: string = '';
  gatoWidth: string = '';

  constructor(private router: Router, private gatosService: ListadoGatosService) { }

  ngOnInit(): void {
    this.recargarGato();
  }

  gotoRegistroGatos() {
    this.router.navigateByUrl('/gatos/regitro-gatos')
  }

  recargarGato() {
    this.gatosService.getGatos().subscribe(response => {
      console.log(response);
       this.gatoUrl = (response as Array<any>)[0].url;
       this.gatoWidth = (response as Array<any>)[0].width;
    });
  }

}
