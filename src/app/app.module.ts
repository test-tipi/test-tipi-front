import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBasesComponent } from './components/data-bases/data-bases.component';
import { LogicComponent } from './components/logic/logic.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './components/menu/menu.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    DataBasesComponent,
    LogicComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
