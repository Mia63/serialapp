import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorViewComponent } from './views/error-view/error-view.component';
import { SerialViewComponent } from './views/serial-view/serial-view.component';
import { SerialsViewComponent } from './views/serials-view/serials-view.component';
import { AuthViewComponent } from './views/auth-view/auth-view.component';
import { AuthGuardService } from './services/guards/auth/auth-guard.service';
import { NewSerialViewComponent } from './views/new-serial-view/new-serial-view.component';
import { EditSerialViewComponent } from './views/edit-serial-view/edit-serial-view.component';
import { NewCommentViewComponent } from './views/new-comment-view/new-comment-view.component';

const routes: Routes = [
  { path: "", component: AuthViewComponent },
  { path: "serial", canActivate:[AuthGuardService] , component: SerialsViewComponent },
  { path: "serial/new", canActivate:[AuthGuardService] , component: NewSerialViewComponent },
  { path: "serial/edit/:id", canActivate:[AuthGuardService] , component: EditSerialViewComponent },
  { path: "serial/:id/comment", canActivate:[AuthGuardService] , component: NewCommentViewComponent },
  { path: "serial/:id", canActivate:[AuthGuardService], component: SerialViewComponent },
  //Error 404
  { path: "error", component: ErrorViewComponent },
  { path: "**", component: ErrorViewComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
