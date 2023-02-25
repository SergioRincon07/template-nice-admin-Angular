import { Component, OnInit, ViewChild, AfterViewInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Proveedor } from 'src/app/shared/models/Proveedor';
import { HomeService } from '../../services/home.service';
import { tap } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-tabla-proveedores',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatFormFieldModule, MatPaginatorModule, MatInputModule],
  templateUrl: './tabla-proveedores.component.html',
  styleUrls: ['./tabla-proveedores.component.css'],
})
export class TablaProveedoresComponent implements OnInit {
  displayedColumns: string[] = [
    'IdProveedor',
    'RazonSocial',
    'TipoEstadoProveedor',
    'FechaInicio',
    'actions',
  ];
  dataSource!: MatTableDataSource<Proveedor>;
  listProveedores: Proveedor[] = [];
  loaderTabla: boolean = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.loaderTabla = false;
    this.homeService
      .getProveedores()
      .pipe(
        tap((responseGetProveedores: Proveedor[]) => {
          this.listProveedores = responseGetProveedores;
          this.dataSource = new MatTableDataSource(this.listProveedores);
          this.loaderTabla = true;
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        })
      )
      .subscribe({
        next: () => {
          this.loaderTabla = true;
        },
        error: (err: HttpErrorResponse) => {
          this.loaderTabla = true;
          console.log(err.error.Message);
        },
      });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
