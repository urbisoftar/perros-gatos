import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GatosRoutingModule } from './gatos-routing.module';
import { GatosListadoComponent } from './components/gatos-listado/gatos-listado.component';
import { RegistroGatosComponent } from './components/registro-gatos/registro-gatos.component';
import { ListadoGatosService } from './services/listado-gatos.service';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    GatosListadoComponent,
    RegistroGatosComponent
  ],
  imports: [
    CommonModule,
    GatosRoutingModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [ListadoGatosService]
})
export class GatosModule { }
