import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {TreeModule} from "src/app/util/tree/tree.module";
import {HeaderModule} from "src/app/header/header.module";

@NgModule({
  declarations: [
    AppComponent
  ],
	imports: [
		HttpClientModule,
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		TreeModule,
		HeaderModule
	],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
