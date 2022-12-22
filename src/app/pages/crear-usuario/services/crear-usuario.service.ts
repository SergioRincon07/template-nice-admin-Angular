import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CrearUsuarioService {
  constructor(private http: HttpClient) {}

  getReportExample(parameters: any[], reportName: string, format: string, fileName: string) {
    {
      const irsc = {
        username: 'sergi',
        password: '',
        domain: '',
      };
      const reportServerUrl = 'http://asus_tuf_b550/ReportServer';
      const reportPath = '/ReportsExamples';

      const options = {
        params: {
          ...parameters,
          reportName,
          format,
          fileName,
        },
        responseType: 'blob' as 'json',
      };

      return this.http.get(
        'http://asus_tuf_b550/ReportServer/Pages/ReportViewer.aspx?%2FReportsExamples%2FRptProjectExample&rc:showbackbutton=true'
      );
    }
  }
}
