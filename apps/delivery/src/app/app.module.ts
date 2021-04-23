import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { authRoutes, AuthModule, AuthGuard } from '@barrel/auth';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@barrel/layout';
import { UiModule } from '@barrel/ui';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    HttpClientModule,
    RouterModule.forRoot(
      [
        {
          path: '',
          loadChildren: () =>
            import('@barrel/ui').then((module) => module.UiModule),
        },
        //{ path: '', pathMatch: 'full', redirectTo: 'profile' },
        { path: 'auth', children: authRoutes },
        {
          path: 'profile',
          loadChildren: () =>
            import('@barrel/profile').then((module) => module.ProfileModule),
          canActivate: [AuthGuard],
        },
      ],
      {
        initialNavigation: 'enabled',
      }
    ),
    AuthModule,
    LayoutModule,
    UiModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
