import { LoaderComponent } from './components/loader/loader.component'
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { AppComponent } from './components/app/app.component'
import { AppRoutes } from './route.module'
import { RouterModule, Routes } from '@angular/router'
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'

import { TrackerComponent } from './components/tracker/tracker.component'
import { MapComponent } from './components/map/map.component'
import { SidebarComponent } from './components/sidebar/sidebar.component'

import { TrackerServiceProvider } from './services/tracker/tracker.service'
import { LoaderServiceProvider } from './services/loader/loader.service'

@NgModule({
  declarations: [
    AppComponent,
    TrackerComponent,
    MapComponent,
    SidebarComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      AppRoutes
    ),
    HttpClientModule,
    FormsModule
  ],
  providers: [
    TrackerServiceProvider,
    LoaderServiceProvider
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
