import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderRootComponent } from './header-root/header-root.component';
import {AuthenticationModule} from "src/app/header/authentication/authentication.module";



@NgModule({
	declarations: [
		HeaderRootComponent
	],
	exports: [
		HeaderRootComponent
	],
	imports: [
		CommonModule,
		AuthenticationModule
	]
})
export class HeaderModule { }
