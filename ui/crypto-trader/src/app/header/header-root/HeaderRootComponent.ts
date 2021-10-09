import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {faFunnelDollar, faIgloo, faSignInAlt, faSignOutAlt} from "@fortawesome/free-solid-svg-icons";
import {PermissionService} from "src/app/authentication/domain/PermissionService";
import {User} from "src/app/authentication/domain/User";
import {DropdownOption} from "src/app/util/dropdown/ui/DropdownOption";

@Component({
  selector: 'app-header-root',
  templateUrl: './HeaderRootComponent.html',
  styleUrls: ['./HeaderRootComponent.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderRootComponent implements OnInit {

  user: User

  dropdownOptions: Array<DropdownOption>;

  renderDialogWindow: boolean = false;

  constructor(
    private readonly permissionService: PermissionService,
    private readonly changeDetectorRef: ChangeDetectorRef
  ) {
  }

  faSignInAlt = faSignInAlt
  faIgloo = faIgloo
  faFunnelDollar = faFunnelDollar
  faSignOutAlt = faSignOutAlt



  ngOnInit(): void {
    this.observeUser()
    const btn = document.querySelector(".mobile-menu-button");
    const sidebar = document.querySelector(".sidebar");
    btn.addEventListener("click", () => {
      sidebar.classList.toggle("-translate-x-full");
    });

  }

  logout(): void {
    this.permissionService.setUser(null)
    this.changeDetectorRef.detectChanges()
  }

  private observeUser(): void {
    this.permissionService.selectUser().subscribe((user: User) => {
      this.user = user
      this.changeDetectorRef.detectChanges()
    })
  }


}
