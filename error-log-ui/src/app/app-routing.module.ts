import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorLogComponent } from './error-log/error-log.component';

const routes: Routes = [
  {path: "", pathMatch: "full", redirectTo: "error-logs"},
  {path: "error-logs", component: ErrorLogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
