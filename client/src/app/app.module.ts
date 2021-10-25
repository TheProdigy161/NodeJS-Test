import { MaterialUiModule } from './core/material-ui/material-ui.module';
import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SettingsProvider } from './services/settingsProvider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './core/nav-bar/nav-bar.component';
import { MessagesComponent } from './components/messages/messages.component';
import { PageLinkComponent } from './core/page-link/page-link.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardSummaryComponent } from './components/dashboard/dashboard-summary/dashboard-summary.component';

export function initializeApp(appConfig: SettingsProvider) {
  return () => appConfig.load();
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    MessagesComponent,
    PageLinkComponent,
    DashboardComponent,
    DashboardSummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialUiModule,
    DragDropModule,
  ],
  providers: [
    SettingsProvider,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [SettingsProvider],
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
