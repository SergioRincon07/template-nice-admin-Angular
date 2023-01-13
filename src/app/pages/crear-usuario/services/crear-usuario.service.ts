import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CrearUsuarioService {
  constructor(private http: HttpClient) {}

  private urlReportes = 'http://asus_tuf_b550/Reports';

  getReportExample() {
    {
      const headers = new HttpHeaders()
        .set('NombreReporte', 'ReportsExamples/RptProjectExample')
        .set('NombreArchivo', 'Reporte')
        .set('Formato', 'PDF');

      return this.http.get(this.urlReportes, {
        headers,
        responseType: 'blob',
        withCredentials: true,
      });
    }
  }

  getPdfReport() {
    let urlReport = 'http://asus_tuf_b550/ReportServer/Reserved.ReportViewerWebControl.axd';
    const params = new HttpParams()
      .set('ExecutionID', 'yrld1a55upejdsqrktwlv5vv')
      .set('Culture', '3082')
      .set('CultureOverrides', 'False')
      .set('UICulture', '10')
      .set('UICultureOverrides', 'False')
      .set('ReportStack', '1')
      .set('ControlID', 'cfd0861a81a14587b2e18a8cc5435b21')
      .set('OpType', 'Export')
      .set('FileName', 'RptProjectExample')
      .set('ContentDisposition', 'OnlyHtmlInline')
      .set('Format', 'PDF');

    return this.http.get(urlReport, { params, withCredentials: true });
  }

  getHTMLReport() {
    let urlReport = 'http://asus_tuf_b550/ReportServer/Reserved.ReportViewerWebControl.axd';
    const params = new HttpParams()
      .set('ExecutionID', 'yrld1a55upejdsqrktwlv5vv')
      .set('Culture', '3082')
      .set('CultureOverrides', 'False')
      .set('UICulture', '10')
      .set('UICultureOverrides', 'False')
      .set('ReportStack', '1')
      .set('ControlID', 'cfd0861a81a14587b2e18a8cc5435b21')
      .set('OpType', 'Export')
      .set('FileName', 'RptProjectExample')
      .set('ContentDisposition', 'OnlyHtmlInline')
      .set('Format', 'PDF');

    return this.http.get(urlReport, { params, withCredentials: true });
  }
}
