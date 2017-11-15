import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { ListuserComponent } from './compoents/listuser/listuser.component';
import { UserFormComponent } from './compoents/user-form/user-form.component';
import {UserService} from './shared-service/user.service';
import {FormsModule} from '@angular/forms';

const appRoutes: Routes = [
  {path: '', component: ListuserComponent},
  {path: 'op', component: UserFormComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ListuserComponent,
    UserFormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    FormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
