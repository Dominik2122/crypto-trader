import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-root',
  templateUrl: './header-root.component.html',
  styleUrls: ['./header-root.component.scss']
})
export class HeaderRootComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const btn = document.querySelector(".mobile-menu-button");
    const sidebar = document.querySelector(".sidebar");

// add our event listener for the click
    btn.addEventListener("click", () => {
      sidebar.classList.toggle("-translate-x-full");
    });

  }

}
