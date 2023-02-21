import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CoreComponent } from './core/core.component';
import { ModelComponent } from './model/model.component';
import { SharedComponent } from './shared/shared.component';
import { LoginComponent } from './login/login.component';

import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ListAnnoncesComponent } from './core/Gestion-Annonces/list-annonces/list-annonces.component';


import { PublierOffresComponent } from './core/Gestion-Offres/publier-offres/publier-offres.component';
import { ListOffresComponent } from './core/Gestion-Offres/list-offres/list-offres.component';
import { ListProduitsNeufsComponent } from './core/Gestion-ProduitsNeufs/list-produits-neufs/list-produits-neufs.component';
import { PublierProduitsNeufsComponent } from './core/Gestion-ProduitsNeufs/publier-produits-neufs/publier-produits-neufs.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';


@NgModule({
  declarations: [
    AppComponent,
    CoreComponent,
    ModelComponent,
    SharedComponent,
    LoginComponent,
  
    FooterComponent,
    NavbarComponent,
    ListAnnoncesComponent,
   

    PublierOffresComponent,
    ListOffresComponent,
    ListProduitsNeufsComponent,
    PublierProduitsNeufsComponent,
    ForgotPasswordComponent,

   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
