import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './containers/layout/layout.component';
import { MaterialModule } from '@barrel/material';
import { RouterModule } from '@angular/router';
import { MainNavComponent } from './main-nav/main-nav.component';
import { PageNavComponent } from './page-nav/page-nav.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [CommonModule, MaterialModule, RouterModule],
  declarations: [LayoutComponent, MainNavComponent, PageNavComponent, FooterComponent],
  exports: [LayoutComponent, MainNavComponent, PageNavComponent, FooterComponent],
})
export class LayoutModule {}
