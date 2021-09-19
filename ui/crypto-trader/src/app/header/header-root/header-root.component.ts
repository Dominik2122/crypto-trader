import { Component, OnInit } from '@angular/core';
import {faSignInAlt} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-header-root',
  templateUrl: './header-root.component.html',
  styleUrls: ['./header-root.component.scss']
})
export class HeaderRootComponent implements OnInit {



  constructor() { }

  faSignInAlt = faSignInAlt


  ngOnInit(): void {
    const btn = document.querySelector(".mobile-menu-button");
    const sidebar = document.querySelector(".sidebar");
    btn.addEventListener("click", () => {
      sidebar.classList.toggle("-translate-x-full");
    });

  }

}
