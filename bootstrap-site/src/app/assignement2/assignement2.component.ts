import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignement2',
  templateUrl: './assignement2.component.html',
  styleUrls: ['./assignement2.component.css']
})
export class Assignement2Component implements OnInit {
  private userName = '';
  private allowSubmitForm: boolean;
  private formUserName;

  constructor() {
    setTimeout(() => {
      this.allowSubmitForm = false;
    }, 2000);
  }

  getUserName() {
    return this.userName;
  }

  setAllowSubmitForm(allowSubmitForm: boolean) {
    console.log('WTF');
    this.allowSubmitForm = false;
  }

  ngOnInit() {
  }

  onCreateSubmitEvent() {
    this.formUserName = 'YEAH';
    this.userName = '';
  }

  onUpdateUserName(event: any) {
    console.log(this.userName);
    this.userName = ( event.target as HTMLInputElement).value;
    if (! /\S/.test(this.userName)) {
      console.log('empty string');
      console.log(this.allowSubmitForm);
      this.setAllowSubmitForm(false);
    }
  }
}
