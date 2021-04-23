import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { Message } from '@barrel/api-interfaces';
import {
  onAuthUIStateChange,
  CognitoUserInterface,
  AuthState,
} from '@aws-amplify/ui-components';

@Component({
  selector: 'barrel-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  //hello$ = this.http.get<Message>('/api/hello');
  user: CognitoUserInterface | undefined;
  authState: AuthState;

  constructor(private ref: ChangeDetectorRef, private http: HttpClient) {}
  ngOnInit() {
    onAuthUIStateChange((authState, authData) => {
      this.authState = authState;
      this.user = authData as CognitoUserInterface;
      this.ref.detectChanges();
    });
  }

  ngOnDestroy() {
    return onAuthUIStateChange;
  }
}
