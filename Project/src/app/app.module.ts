import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './order/order.component';
import { BuildComponent } from './build/build.component';
import { LocComponent } from './loc/loc.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { HttpService } from './http.service';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { NavComponent } from './nav/nav.component';
import { PersonalComponent } from './personal/personal.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OrderComponent,
    BuildComponent,
    LocComponent,
    ShoppingCartComponent,
    NavComponent,
    PersonalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: LocComponent },
      { path: 'home', component: HomeComponent },
      { path: 'order', component: OrderComponent},
      { path: 'build', component: BuildComponent},
      { path: 'shoppingCart', component: ShoppingCartComponent},
      { path: 'personal', component: PersonalComponent}
    ])
  ],
  providers: [HttpService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
