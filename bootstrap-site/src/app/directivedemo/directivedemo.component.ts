import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivedemo',
  templateUrl: './directivedemo.component.html',
 // styleUrls: ['./directivedemo.component.css']
  styles: [`
    .online {
      color: white
    }
  `]
})
export class DirectivedemoComponent implements OnInit {
  userName = '';
  allowSubmitForm: boolean;
  userNameEntered = false;
  userNameStatus = 'empty'
  users = ['Sanyi', 'Béla'];

  constructor() {
    setTimeout( () => {
      this.allowSubmitForm = false;
    });
    this.userNameStatus = Math.random() > 0.5 ? 'filled' : 'empty';
    this.users.push(this.userName);
  }

  ngOnInit() {
  }

  getUserNameStatus() {
    return this.userNameStatus;
  }

  getUserName() {
    return this.userName;
  }

  setAllowSubmitDirectiveForm(allowSubmitForm: boolean) {
    console.log('WTF');
    this.allowSubmitForm = allowSubmitForm;
  }

  onCreateSubmitEvent() {
    this.userNameEntered = true;

  }

  onUpdateUserName(event: any) {
    console.log(this.userName);
    this.userName = ( event.target as HTMLInputElement).value;
    /*    if (! /\S/.test(this.userName)) {
          console.log('empty string');
          console.log(this.allowSubmitForm);
          this.setAllowSubmitForm(false);
        }*/
    if (this.userName.length === 0) {
      this.setAllowSubmitDirectiveForm(true);
    } else {
      this.setAllowSubmitDirectiveForm(false);
    }
  }

  getColor() {
    return this.userNameStatus === 'empty' ? 'green' : 'red';
  }
}
