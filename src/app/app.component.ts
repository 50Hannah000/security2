import { Component } from '@angular/core';
import * as crypto from 'crypto-js';

@Component({
  selector: 'my-app',
  template: 
  `<h1>Encrypt-R-us</h1>
  <form name="myForm" (ngSubmit)="sendForm()">
  <table style="width:75%">
  <tr>
    <td><p>Name: </p></td>
    <td><input type="text" class="form-control" name="userName" [(ngModel)]="user.name" required></td> 
  </tr>
  <tr>
    <td><p>Secret text:<p> </td>
    <td><textarea rows="4" cols="50"  class="form-control" name="textArea" [(ngModel)]="user.secret"></textarea></td>
  </tr>
  <tr>
    <td><p>Password: </p></td>
    <td><input type="password" class="form-control" name="password" [(ngModel)]="user.password" required></td> 
  </tr>
  <tr><td><button type="submit">Send</button></td></tr>
</table>
</form>`,
})
export class AppComponent  { 
 

  protected user = {
    name: '',
    secret: '',
    password: ''
  };

  protected encrypted: crypto.WordArray;
  protected decrypted: crypto.DecryptedMessage;
  
  constructor() {
    console.log("constru", this.user)
  }

  protected sendForm(){
    if(this.user.secret == ''){
      //do decrypt
      this.decrypted = crypto.AES.decrypt(this.encrypted, this.user.password);
      this.user.secret = this.decrypted.toString(crypto.enc.Utf8)
      
    }
    else {
      this.encrypted = crypto.AES.encrypt(this.user.secret, this.user.password);
    }
  }

}
