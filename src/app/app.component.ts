import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from './../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'nullpointer-front';

  constructor(private http: HttpClient) {
    this.http.get(environment.SERVER_URL + '/hello_world').subscribe((res: any) => {
      console.log(res);
    })
  }
}
