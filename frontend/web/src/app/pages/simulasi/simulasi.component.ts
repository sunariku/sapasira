import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { WsjfService } from '../../services/wsjf.service';

@Component({
  selector: 'app-simulasi',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './simulasi.component.html',
  styleUrl: './simulasi.component.css',
})
export class SimulasiComponent {
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      jobName: ['', Validators.required],
      jobSize: [0, Validators.required],
      businessValue: [0, Validators.required],
      riskReduction: [0, Validators.required],
      timeCriticality: [0, Validators.required],
    });
  }

  private wsjfService = inject(WsjfService);

  readonly result = signal<any | null>(null);
  readonly error = signal<any | null>(null);
  readonly loading = signal<boolean>(false);

  form: FormGroup;

  onSubmit(): void {
    if (this.form?.valid) {
      this.loading.set(true);
      this.error.set(null);

      this.wsjfService.addWSJF(this.form.value).subscribe({
        next: (response) => {
          this.result.set(response.data.wsjf);
          this.loading.set(false);
        },
        error: (error) => {
          this.error.set(error);
          this.loading.set(false);
        },
      });
    }
  }
}
