import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthService } from './services/auth/auth.service';
import { SerialService } from './services/serial/serial.service';
import { SerialsViewComponent } from './views/serials-view/serials-view.component';
import { ErrorViewComponent } from './views/error-view/error-view.component';
import { SerialViewComponent } from './views/serial-view/serial-view.component';
import { AuthViewComponent } from './views/auth-view/auth-view.component';
import { AuthGuardService } from './services/guards/auth/auth-guard.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewSerialViewComponent } from './views/new-serial-view/new-serial-view.component';
import { EditSerialViewComponent } from './views/edit-serial-view/edit-serial-view.component';
import { NewCommentViewComponent } from './views/new-comment-view/new-comment-view.component';

@NgModule({
  declarations: [
    AppComponent,
    SerialsViewComponent,
    ErrorViewComponent,
    SerialViewComponent,
    AuthViewComponent,
    NewSerialViewComponent,
    EditSerialViewComponent,
    NewCommentViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [AuthService, SerialService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
