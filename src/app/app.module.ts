import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './components/home/hero/hero.component';
import { HeaderComponent } from './components/global/header/header.component';
import { FooterComponent } from './components/global/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EditorComponent } from './components/home/editor/editor.component';
import { BestsellerComponent } from './components/home/bestseller/bestseller.component';
import { ClassicComponent } from './components/home/classic/classic.component';
import { FeaturedComponent } from './components/home/featured/featured.component';

@NgModule({
  declarations: [AppComponent, HeroComponent, HeaderComponent, FooterComponent, EditorComponent, BestsellerComponent, ClassicComponent, FeaturedComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
