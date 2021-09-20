import {Component, OnInit} from '@angular/core';
import {PermissionService} from "src/app/authentication/domain/PermissionService";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private readonly permissionService: PermissionService) {
  }

  ngOnInit() {
    this.permissionService.checkIfUserExists()
  }

}
