import { FormBuilder, Validators, FormGroup } from '@angular/forms';

export class TodoFormComponent {
  form: FormGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      name: ['', Validators.required],
      priority: [10, Validators.min(1)],
    });
  }
}
