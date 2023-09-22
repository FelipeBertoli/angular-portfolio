import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { AboutTextComponent } from './components/about-text/about-text.component';
import { AboutSkillsComponent } from './components/about-skills/about-skills.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { GamesComponent } from './components/projects/games/games.component';
import { SitesComponent } from './components/projects/sites/sites.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    HomeComponent,
    AboutComponent,
    AboutTextComponent,
    AboutSkillsComponent,
    ProjectsComponent,
    GamesComponent,
    SitesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
