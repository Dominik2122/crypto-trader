import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";


export interface Worker {
  name: string;
  id: number;
  good: boolean;
}

@Component({
  selector: 'app-home-root',
  templateUrl: './home-root.component.html',
  styleUrls: ['./home-root.component.scss']
})
export class HomeRootComponent implements OnInit {

  @Input()
  worker: Worker


  workerForm: FormGroup


  constructor() { }

  ngOnInit(): void {
    this.doSomething(this.worker)
  }

  doSomething(worker: Worker) {
    this.workerForm = new FormGroup({
      id: new FormControl(
        worker && worker.id ? worker.id : `${Math.floor(Math.random()*1000)}`,
        [Validators.required]
      ),
      name: new FormControl(
        worker && worker.name,
        [Validators.required]
      ),

      good: new FormControl(
        worker && worker.good,
        [Validators.required]
      ),
    })
  }

}
