import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
//import { ClienteService } from './cliente.service';
//import { ModalService } from './detalle/modal.service';
//import swal from 'sweetalert2';
//import { tap } from 'rxjs/operators';
//import { ActivatedRoute } from '@angular/router';


//import {ClienteService} from './cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  //clienteSeleccionado:Cliente;
//  clientes:Cliente[];
//  paginator:any;
//  clienteSeleccionado:Cliente;
  titulo:string='Datos del Cliente';
  public clientes = [
   { nombre: 0, documento: 'eduardo' ,numero_documento:12,direccion:'direccion1',telefono:425991, email:'email.com'},
   { nombre: 0, documento: 'cesar' ,numero_documento:12,direccion:'direccion1',telefono:425991, email:'email.com'},
   { nombre: 0, documento: 'maria' ,numero_documento:12,direccion:'direccion1',telefono:425991, email:'email.com'},
   { nombre: 0, documento: 'mariela' ,numero_documento:12,direccion:'direccion1',telefono:425991, email:'email.com'},
   { nombre: 0, documento: 'jessica' ,numero_documento:12,direccion:'direccion1',telefono:425991, email:'email.com'},

 ];

  constructor() { }

  ngOnInit() {
  }




}
