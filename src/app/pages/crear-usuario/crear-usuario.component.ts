import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearUsuarioService } from './services/crear-usuario.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-crear-usuario',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './crear-usuario.component.html',
  styles: [],
})
export default class CrearUsuarioComponent {
  constructor(private crearUsuarioService: CrearUsuarioService, private sanitizer: DomSanitizer) {}

  reportURL: any = undefined;
  url: any;
  params!: any[];
  show: boolean = false;

  viewReport() {
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.getUrlReport());
    this.show = true;
    // window.open(
    //   'http://asus_tuf_b550/ReportServer/Pages/ReportViewer.aspx?%2fReportsExamples%2fRptProjectExample&rs:Command=Render',
    //   '_blank'
    // );
  }

  getUrlReport() {
    let url = 'http://asus_tuf_b550/ReportServer/Pages/ReportViewer.aspx?/';
    let urlReport = 'ReportsExamples/RptProjectExample';
    url += urlReport;
    this.params = [];
    this.params.push([1, 'IdUsuario	']);
    const param = [...this.params];
    param.push(
      [true, 'rc:Parameters'],
      ['Render', 'rs:Command'],
      [true, 'rs:embed'],
      [100, 'rc:Zoom']
    );
    url = OrderParametersToGet(url, param, '&');
    console.log(url);
    return url;
  }
}

function OrderParametersToGet(query: string, parameters: any[], separator = '?'): string {
  var queryExt = '';
  parameters.forEach(element => {
    if (element[0] != null) {
      if (queryExt.length > 0) queryExt += '&';
      queryExt += element[1] + '=' + element[0];
    }
  });
  if (queryExt.length > 0) query += separator + queryExt;
  return query;
}
