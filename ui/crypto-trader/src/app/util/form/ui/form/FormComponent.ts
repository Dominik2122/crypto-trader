import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation
} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './FormComponent.html',
  styleUrls: ['./FormComponent.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormComponent implements OnInit {

  @Input()
  config: any[] = [];

  form: FormGroup;

  @Output()
  formOutput: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.createGroup();
  }

  createGroup() {
    const group = this.fb.group({});
    this.config.forEach(control => group.addControl(control.name, this.fb.control('')));
    this.formOutput.emit(group);
    return group;
  }

}
