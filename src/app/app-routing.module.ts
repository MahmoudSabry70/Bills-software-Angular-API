import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllUnitsComponent } from './Components/all-units/all-units.component';
import { ClientsComponent } from './Components/clients/clients.component';
import { CompanyDataComponent } from './Components/company-data/company-data.component';
import { ErrorComponent } from './Components/error/error.component';
import { HomeComponent } from './Components/home/home.component';
import { ItemsComponent } from './Components/items/items.component';
import { MainLayoutComponent } from './Components/main-layout/main-layout.component';
import { TypesComponent } from './Components/types/types.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', redirectTo: '/Home', pathMatch: 'full' },
      { path: 'Home', component: HomeComponent },
      { path: 'CompanyDatas', component: CompanyDataComponent },
      { path: 'TypeDatas', component: TypesComponent },
      { path: 'Units', component: AllUnitsComponent },
      { path: 'Items', component: ItemsComponent },
      { path: 'Clients', component: ClientsComponent },
    ],
  },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
