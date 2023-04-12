import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AbmAlumnosComponent } from './abm-alumnos/abm-alumnos.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';

export interface Estudiante {
  id: number;
  name: string;
  last_name: string;
  course: string;
  clases: string;
  birth_date: Date;
}

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent {

  estudiantes: Estudiante[] = [
  {
    id: 1,
    name: 'Aida',
    last_name: 'Ovejero',
    course: '4to',
    clases: 'Math',
    birth_date: new Date()
  },
  {
    id: 2,
    name: 'Julieta',
    last_name: 'Cardozo',
    course: '4to',
    clases: 'Math',
    birth_date: new Date()
  },
  {
    id: 3,
    name: 'Joaquin',
    last_name: 'Fiora',
    course: '6to',
    clases: 'Math',
    birth_date: new Date()
  },
];

  dataSource = new MatTableDataSource(this.estudiantes)

  displayedColumns: string[] = ['id', 'full_name', 'course', 'clases' , 'birth_date', 'acciones'];

  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
  
  eliminarUsuario(index: number){
    this.estudiantes.splice(index, 1);
  }

  applyFilters(ev: Event): void{
    const inputValue = (ev.target as HTMLInputElement)?.value;
    this.dataSource.filter = inputValue?.trim()?.toLowerCase();
  }
  
  constructor(private matDialog: MatDialog) {}
  
  clases = [
    { value: 'Opción 1', seleccionada: false },
    { value: 'Opción 2', seleccionada: false },
    { value: 'Opción 3', seleccionada: false }
  ];
  seleccion = '';
  mostrarSeleccion() {
    this.seleccion = this.clases
      .filter(clase => clase.seleccionada)
      .map(clase => clase.value)
      .join(', ');
  }
  abrirABMAlumnos(): void {
    const dialog = this.matDialog.open(AbmAlumnosComponent)
    dialog.afterClosed().subscribe((valor) => {
      if (valor) {
        this.dataSource.data = [
          ...this.dataSource.data,
          {
            ...valor,
            id: this.dataSource.data.length + 1,
          }
        ];
      }
    })
  }
}