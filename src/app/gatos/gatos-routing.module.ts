import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GatosListadoComponent } from './components/gatos-listado/gatos-listado.component';
import { RegistroGatosComponent } from './components/registro-gatos/registro-gatos.component';

const routes: Routes = [{
  path: '', component: GatosListadoComponent
},
{
  path: 'regitro-gatos', component: RegistroGatosComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GatosRoutingModule { }
