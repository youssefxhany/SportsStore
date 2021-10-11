import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';

import * as fromApp from './store/app.reducer';
import { EffectsModule } from '@ngrx/effects';
import { NikeEffects } from './nike/store/nike.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header/header.component';
import { HomePageComponent } from './home/home-page/home-page.component';
import { NotFoundComponent } from './not-found/not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { AdidasModule } from './adidas/adidas/adidas.module';
import { CoreModule } from './core.module';
import { UserModule } from './user/user.module';
import { LoggingService } from './logging.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    NotFoundComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot(fromApp.AppReducer),
    EffectsModule.forRoot([NikeEffects]),
    StoreDevtoolsModule.instrument(),
    AppRoutingModule,
    CoreModule,
    UserModule
  ],
  //providers: [AuthGuard,UserService,CanDeactivateGuard,NikeResolver],
  providers: [LoggingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
