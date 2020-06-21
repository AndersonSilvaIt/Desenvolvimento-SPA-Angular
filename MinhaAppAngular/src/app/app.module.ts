import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeuComponenteComponent } from './pasta/meu-componente/meu-componente.component';
import { HomeComponent } from './home/home.component';
import {ServicoService} from './servico.service'

@NgModule({
  declarations: [
    AppComponent,
    MeuComponenteComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    ServicoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
