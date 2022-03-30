import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HeaderComponent } from './Components/header/header.component';
import { HomeComponent } from './Components/home/home.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { CompanyDataComponent } from './Components/company-data/company-data.component';
import { TypesComponent } from './Components/types/types.component';
import { AllUnitsComponent } from './Components/all-units/all-units.component';
import { ClientsComponent } from './Components/clients/clients.component';
import { ItemsComponent } from './Components/items/items.component';
import { HttpClientModule } from '@angular/common/http';
import { ErrorComponent } from './Components/error/error.component';
import { MainLayoutComponent } from './Components/main-layout/main-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    HomeComponent,
    FooterComponent,
    CompanyDataComponent,
    TypesComponent,
    AllUnitsComponent,
    ClientsComponent,
    ItemsComponent,
    ErrorComponent,
    MainLayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
