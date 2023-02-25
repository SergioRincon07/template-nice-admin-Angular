import { Component, ElementRef, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-reporting-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reporting-services.component.html',
  styles: [],
})
export class ReportingServicesComponent implements OnChanges {
  @Input() urlReport: string = '';
  @Input() showParameter: boolean = false;
  @Input() show = false;
  @Input() parameters: any[] = [];
  @Input() width = 100;

  // https://megaiisqa901:2402/WebServicioReportes/VisorReporte?NombreReporte=Reportes_GestionHumana/rptCertificados
  serverReport: string = 'http://megades901:5100/ReportServer';
  // serverReport: string = 'https://megaiisqa901:2402/WebServicioReportes';
  url: any;

  @ViewChild('iframeSSRS') iframe: ElementRef | undefined;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnChanges(chage: SimpleChanges) {
    if (this.urlReport && this.show) {
      this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.getUrlReport());
    }
  }

  getUrlReport() {
    let url = '';
    url += this.serverReport + '/Pages/ReportViewer.aspx?/' + this.urlReport;
    // url += this.serverReport + '/VisorReporte?NombreReporte=' + this.urlReport;
    const param = [...this.parameters];
    param.push(
      [this.showParameter, 'rc:Parameters'],
      ['Render', 'rs:Command'],
      [true, 'rs:embed'],
      [this.width, 'rc:Zoom']
    );
    url = OrderParametersToGet(url, param, '&');
    // console.log(url);
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
