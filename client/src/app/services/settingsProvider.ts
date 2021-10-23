import { IAppConfig } from '@models/configuration/configuration.interface';
import { Injectable, isDevMode } from '@angular/core'
import { HttpHeaders, HttpClient } from '@angular/common/http'

@Injectable()
export class SettingsProvider {
  static appConfig: IAppConfig;

  constructor(private http: HttpClient) {
    this.load();
  }
  // Http Options
  httpOptions = {
      headers: new HttpHeaders({
          'Content-Type': 'application/json',
      }),
  }

  load() {
    let jsonFile = `/assets/config.dev.json`
    if (!isDevMode()) {
        jsonFile = `/assets/config.deploy.json`;
    }
    return new Promise<IAppConfig>((resolve) => {
      this.http.get(jsonFile).subscribe((response: any) => {
        SettingsProvider.appConfig = response;
        resolve(response);
      });
    })
  }
}
