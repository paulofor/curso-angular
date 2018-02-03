import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//import { BrowserAnimationsMdoule} from '@angular/animations';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import 'hammerjs';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { PratodetalheComponent } from './pratodetalhe/pratodetalhe.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PratodetalheComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
