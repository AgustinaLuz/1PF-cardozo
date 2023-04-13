import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Estudiante } from '../tables.component';

@Component({
  selector: 'app-abm-alumnos',
  templateUrl: './abm-alumnos.component.html',
  styleUrls: ['./abm-alumnos.component.scss']
})
export class AbmAlumnosComponent implements OnInit {

  nameControl = new FormControl('', [Validators.required]);
  last_nameControl = new FormControl('', [Validators.required]);
  courseControl = new FormControl('');
  claseControl = new FormControl('');
  birth_dateControl = new FormControl('', [Validators.required]);

  alumnosForm = new FormGroup<any>({
    name: this.nameControl,
    last_name: this.last_nameControl,
    course: this.courseControl,
    clase: this.claseControl,
    birth_date: this.birth_dateControl
  });


  constructor(private dialogRef: MatDialogRef<AbmAlumnosComponent>, @Inject(MAT_DIALOG_DATA) public data: Estudiante) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  guardar(): void {
    if (this.alumnosForm.valid) {
      this.dialogRef.close(this.alumnosForm.value)
    } else {
      this.alumnosForm.markAllAsTouched();
    }
  }
}
