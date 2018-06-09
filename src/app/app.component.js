"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var crypto = require("crypto-js");
var AppComponent = (function () {
    function AppComponent() {
        this.user = {
            name: '',
            secret: '',
            password: ''
        };
        console.log("constru", this.user);
    }
    AppComponent.prototype.sendForm = function () {
        if (this.user.secret == '') {
            //do decrypt
            this.decrypted = crypto.AES.decrypt(this.encrypted, this.user.password);
            this.user.secret = this.decrypted.toString(crypto.enc.Utf8);
        }
        else {
            this.encrypted = crypto.AES.encrypt(this.user.secret, this.user.password);
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "<h1>Encrypt-R-us</h1>\n  <form name=\"myForm\" (ngSubmit)=\"sendForm()\">\n  <table style=\"width:75%\">\n  <tr>\n    <td><p>Name: </p></td>\n    <td><input type=\"text\" class=\"form-control\" name=\"userName\" [(ngModel)]=\"user.name\" required></td> \n  </tr>\n  <tr>\n    <td><p>Secret text:<p> </td>\n    <td><textarea rows=\"4\" cols=\"50\"  class=\"form-control\" name=\"textArea\" [(ngModel)]=\"user.secret\"></textarea></td>\n  </tr>\n  <tr>\n    <td><p>Password: </p></td>\n    <td><input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"user.password\" required></td> \n  </tr>\n  <tr><td><button type=\"submit\">Send</button></td></tr>\n</table>\n</form>",
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map