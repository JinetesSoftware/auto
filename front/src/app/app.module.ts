import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './core/layout/footer/footer.component';
import { MaterialModule } from './shared/modules/material/material.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './core/interceptors/jwt-interceptor.interceptor';
import { LoadingInterceptor } from './core/interceptors/loader-interceptor.interceptor';
import { ToastrModule } from 'ngx-toastr';
import { ComponentsModule } from './shared/modules/components/components.module';
@NgModule({
  declarations: [AppComponent, FooterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ComponentsModule,
    ToastrModule.forRoot()
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
  ],
})
export class AppModule {}
