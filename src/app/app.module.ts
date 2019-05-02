import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ClientesComponent } from './clientes/clientes.component';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent} from './clientes/form.component';
import { DetalleComponent} from './detalle/detalle.component';
//import { DetalleComponent } from './clientes/detalle/detalle.component';


const routes: Routes = [
    { path: 'clientes', component: ClientesComponent },
    { path: 'detalle', component: DetalleComponent },
    { path: 'inicio', component: AppComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ClientesComponent,
    FormComponent,
    DetalleComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
