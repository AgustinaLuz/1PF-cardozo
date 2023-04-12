import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-abm-alumnos',
  templateUrl: './abm-alumnos.component.html',
  styleUrls: ['./abm-alumnos.component.scss']
})
export class AbmAlumnosComponent {

  nameControl = new FormControl('', [Validators.required]);
  last_nameControl = new FormControl('', [Validators.required]);
  courseControl = new FormControl('');
  clasesControl = new FormControl('');
  birth_dateControl = new FormControl('', [Validators.required]);
  clases = [
    { value: 'Opción 1', seleccionada: false },
    { value: 'Opción 2', seleccionada: false },
    { value: 'Opción 3', seleccionada: false }
  ];
  seleccion = '';
    
  alumnosForm = new FormGroup({
    name: this.nameControl,
    last_name: this.last_nameControl,
    course: this.courseControl,
    classes: this.clasesControl,
    birth_date: this.birth_dateControl,
    
  });

  
  constructor(private dialogRef: MatDialogRef<AbmAlumnosComponent>) {}

  mostrarSeleccion() {
    this.seleccion = this.clases
      .filter(clase => clase.seleccionada)
      .map(clase => clase.value)
      .join(', ');
  }

  guardar(): void {
    if (this.alumnosForm.valid) {
      this.dialogRef.close(this.alumnosForm.value)
    } else {
      this.alumnosForm.markAllAsTouched();
    }
  }
}
