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
import { ChartsComponent } from './components/charts/charts.component';
import { PieGridChartComponent } from './components/charts/pie-grid-chart/pie-grid-chart.component';
import { PieAdvancedChartComponent } from './components/charts/pie-advanced-chart/pie-advanced-chart.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';

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
    DashboardSummaryComponent,
    ChartsComponent,
    PieGridChartComponent,
    PieAdvancedChartComponent,
  ],
  imports: [
    NgxChartsModule,
    MaterialUiModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
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
