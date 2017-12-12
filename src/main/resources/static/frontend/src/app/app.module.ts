import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { ListuserComponent } from './compoents/listuser/listuser.component';
import { UserFormComponent } from './compoents/user-form/user-form.component';
import {UserService} from './shared-service/user.service';
import {FormsModule} from '@angular/forms';

import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

 import {ListuserEffects} from './compoents/listuser/effects/listuser.effects';
 import {listuserReducer} from './compoents/listuser/reducer/listuser.reducer';

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
    FormsModule,
     EffectsModule.forRoot([ListuserEffects]),
     StoreModule.forRoot({user: listuserReducer}),
    StoreDevtoolsModule.instrument({maxAge: 25})
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
