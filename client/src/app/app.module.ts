import { MaterialUiModule } from './core/material-ui/material-ui.module';
import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SettingsProvider } from './services/settingsProvider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export function initializeApp(appConfig: SettingsProvider) {
  return () => appConfig.load();
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialUiModule
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
