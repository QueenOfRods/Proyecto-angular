import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './components/contacto/contacto.component';
import { HomeComponent } from './components/home/home.component';
import { PaginaerrorComponent } from './components/paginaerror/paginaerror.component';
import { ProductosComponent } from './components/productos/productos.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path: 'Contacto', component:ContactoComponent},
  {path: 'Productos', component:ProductosComponent},
  {path: '404', component:PaginaerrorComponent},
  {path:'**', redirectTo: '404', pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
