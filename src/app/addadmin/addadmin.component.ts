import { Component, OnInit } from '@angular/core';
import { isNumber } from '@ng-bootstrap/ng-bootstrap/util/util';

@Component({
  selector: 'app-addadmin',
  templateUrl: './addadmin.component.html',
  styleUrls: ['./addadmin.component.scss']
})
export class AddadminComponent implements OnInit {

  message: Array<string> = [];
  url: string = '';
  imgURL: any;

  username: string = '';
  firstname: string = '';
  lastname: string = '';
  birthday: Date;
  codephone: string = '';
  phone: string = '';
  email: string = '';
  password: string = '';
  confirmpassword: string = '';
  product_add: string = '';
  product_modify: string = '';
  product_delete: string = '';
  plan_add: string = '';
  plan_modify: string = '';
  plan_delete: string = '';

  preview(files) {
    if (files.length === 0)
      return;
    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message[0] = 'Only images are supported.';
      return;
    } else {
      this.message[0] = '';
    }
    var reader = new FileReader();
    this.url = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    }
  }

  submit(username, firstname, lastname, birthday, codephone, phone, email, password, confirmpassword, product_add, product_modify, product_delete, plan_add, plan_modify, plan_delete) {
    if (username == '') {
      this.message[1] = 'Username must not be empty';
    } else {
      this.message[1] = '';
    }

    if (firstname == '') {
      this.message[2] = 'The first name must not be empty';
    } else {
      this.message[2] = '';
    }

    if (lastname == '') {
      this.message[3] = 'The last name must not be empty';
    } else {
      this.message[3] = '';
    }

    if (birthday == '') {
      this.message[4] = 'Birthdate must not be empty';
    } else {
      this.message[4] = '';
    }

    if (codephone == '' || phone == '') {
      this.message[5] = 'Phone must not be empty';
    } else if (isNaN(phone) || phone.length != 9)  {
      this.message[5] = 'Wrong phone number';
    } else if (!codephone.match("[+]{1}[0-9]{1,4}")) {
      this.message[5] = 'Wrong Code phone number';
    } else {
      this.message[5] = '';
    }

    if (email == '') {
      this.message[6] = 'Email must not be empty';
    } else if (!email.match("[a-zA-Z0-9_.]+@[a-zA-Z0-9]+.[a-zA-Z]{2,3}[.] {0,1}[a-zA-Z]+")) {
      this.message[6] = 'Incorrect email';
    } else if (email.toLowerCase().includes("@hotmail.")) {
      this.message[6] = 'The email used is rejected';
    } else {
      this.message[6] = '';
    }

    if (password == '') {
      this.message[7] = 'Password must not be empty';
    } else {
      this.message[7] = '';
    }

    if (confirmpassword == '') {
      this.message[8] = 'Confirm password must not be empty';
    } else if (confirmpassword != password) {
      this.message[8] = 'Password does not match';
    } else {
      this.message[8] = '';
    }

    for (let i = 0; i < this.message.length; i++) {
      this.message[i] != '';
      return;
    }

  }

  constructor() { }

  ngOnInit(): void {

  }

}
