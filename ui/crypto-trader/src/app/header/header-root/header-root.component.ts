import {Component, OnInit} from '@angular/core';
import {faSignInAlt, faSignOutAlt, faUserAlt} from "@fortawesome/free-solid-svg-icons";
import {PermissionService} from "src/app/authentication/domain/PermissionService";
import {User} from "src/app/authentication/domain/User";
import {DropdownOption} from "src/app/util/dropdown/ui/DropdownOption";

@Component({
  selector: 'app-header-root',
  templateUrl: './header-root.component.html',
  styleUrls: ['./header-root.component.scss']
})
export class HeaderRootComponent implements OnInit {

  user: User

  dropdownOptions: Array<DropdownOption>;

  renderDialogWindow: boolean = false;

  constructor(private readonly permissionService: PermissionService) {
  }

  faSignInAlt = faSignInAlt
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
  }

  private observeUser(): void {
    this.permissionService.selectUser().subscribe((user: User) => this.user = user)
  }


}
