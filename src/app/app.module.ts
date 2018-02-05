import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//import { BrowserAnimationsMdoule} from '@angular/animations';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import 'hammerjs';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { PratodetalheComponent } from './pratodetalhe/pratodetalhe.component';
import { DishService } from './services/dish.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PratodetalheComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [
    DishService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
