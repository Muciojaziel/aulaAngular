import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MeuNovoComponent } from "app/meu-novo-component/meu-novo.component";
import { OlaMundoComponent } from './ola-mundo/ola-mundo.component';

@NgModule({
  declarations: [
    AppComponent,
    MeuNovoComponent,
    OlaMundoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
