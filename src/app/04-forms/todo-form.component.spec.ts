import {FormBuilder} from '@angular/forms';
import { TodoFormComponent } from './todo-form.component';

describe('TodoFormComponent', () => {
  let component: TodoFormComponent;

  beforeEach(() => {
    component = new TodoFormComponent(new FormBuilder());
  });

  it('should create a form with 2 controls', () => {
    expect(component.form.contains('name')).toBe(true);
    expect(component.form.contains('priority')).toBe(true);
  });

  it('should make the name control required', () => {
    const control = component.form.get('name');
    control.setValue('');
    expect(control.valid).toBe(false);
  });

  it('should make the priority control minimum of 1', () => {
    const control = component.form.get('priority');
    expect(control.valid).toBe(true);
    control.setValue(0);
    expect(control.valid).toBe(false);
  });
});
