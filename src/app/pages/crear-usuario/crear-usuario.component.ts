import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearUsuarioService } from './services/crear-usuario.service';

@Component({
  selector: 'app-crear-usuario',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './crear-usuario.component.html',
  styles: [],
})
export default class CrearUsuarioComponent implements OnInit {
  constructor(private crearUsuarioService: CrearUsuarioService) {}

  reportURL: any = undefined;

  ngOnInit(): void {
    const parameters = [{ name: 'IsUsuario', value: '11' }];
    this.crearUsuarioService
      .getReportExample(parameters, 'RptProjectExample', 'Excel', 'RptProjectExample')
      .subscribe(responseReportExample => {
        this.reportURL = responseReportExample;
      });
  }
}
