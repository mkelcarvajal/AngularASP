import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { OperadorComponent } from './components/operador/operador/operador.component';
import { EstadoPipePipe } from './pipes/estado-pipe.pipe';
import { ToastrModule } from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { TrenComponent } from './components/tren/tren.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OperadorComponent,
    EstadoPipePipe,
    TrenComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'operador', component: OperadorComponent },
      { path: 'tren', component: TrenComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
