import {ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {PermissionService} from "src/app/authentication/domain/PermissionService";

@Component({
  selector: 'app-root',
  templateUrl: './AppComponent.html',
  styleUrls: ['./AppComponent.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

  constructor(private readonly permissionService: PermissionService) {
  }

  ngOnInit() {
    this.permissionService.checkIfUserExists()
  }

}
