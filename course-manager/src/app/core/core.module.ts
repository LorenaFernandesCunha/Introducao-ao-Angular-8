import { ErrorComponent } from './component/error/error.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    NavBarComponent,
    ErrorComponent
],
imports: [
  RouterModule.forChild([
    {path: '**', component: ErrorComponent}
  ])
],
exports: [
  NavBarComponent
]
})
export class CoreModule{

}
