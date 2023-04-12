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
  birth_dateControl = new FormControl('', [Validators.required]);

  alumnosForm = new FormGroup({
    name: this.nameControl,
    last_name: this.last_nameControl,
    course: this.courseControl,
    birth_date: this.birth_dateControl,
  });

  constructor(private dialogRef: MatDialogRef<AbmAlumnosComponent>) {}


  guardar(): void {
    if (this.alumnosForm.valid) {
      this.dialogRef.close(this.alumnosForm.value)
    } else {
      this.alumnosForm.markAllAsTouched();
    }
  }
}
