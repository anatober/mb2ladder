import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { RegisterComponent } from '../register/register.component';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  @Input() loginModalController: ModalController;

  constructor(private readonly _authService: AuthService) { }

  ngOnInit() { }

  async signIn() {
    await this._authService.signIn({
      nick: 'test',
      password: 'test'
    });
  }

  async register() {
    const modal = await this.loginModalController.create({
      component: RegisterComponent,
      cssClass: 'my-custom-class',
      componentProps: {
        registerModalController: this.loginModalController
      }
    });
    return await modal.present();
  }

}