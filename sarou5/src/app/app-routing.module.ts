import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ListAnnoncesComponent } from './core/Gestion-Annonces/list-annonces/list-annonces.component';
import { PublierAnnoncesComponent } from './core/Gestion-Annonces/publier-annonces/publier-annonces.component';
import { ListOffresComponent } from './core/Gestion-Offres/list-offres/list-offres.component';
import { ListProduitsNeufsComponent } from './core/Gestion-ProduitsNeufs/list-produits-neufs/list-produits-neufs.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

const routes: Routes = [
   
  // { path: '', pathMatch: 'full', redirectTo: 'ListAnnoncesComponent' },
  // {
  //   path: 'client',
  //   children: [
      
     
      



  //   ]
  // },
  {
  
    path: 'client',
    children: [
  {path: 'login',  component: LoginComponent },
  {path: '',  component: ListAnnoncesComponent },
  {path: 'offres',  component: ListOffresComponent},
  {path: 'ProduitsNeufs',  component: ListProduitsNeufsComponent },
  {path: 'SeConnecter',  component: LoginComponent },
  {path: 'PublierAnnonces',  component: PublierAnnoncesComponent },
    ]
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
