import { environment } from './../environments/environment';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire';

import { CadastroService } from './cadastro.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

@NgModule({
    declarations: [AppComponent],
    entryComponents: [],
    imports: [
        BrowserModule, IonicModule.forRoot(), AppRoutingModule,
        AngularFireModule.initializeApp(environment.firebase,"test")
    ],
    providers: [
        StatusBar,
        SplashScreen,
        { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
        CadastroService,
        AngularFireAuth,
        AngularFirestore
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
