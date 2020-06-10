import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  @Input() registerModalController: ModalController;

  constructor(private readonly _authService: AuthService) { }

  ngOnInit() { }

  async register() {
    await this._authService.register({
      email: 'test@',
      nick: 'Helix',
      password: 'test'
    });
    this.registerModalController.dismiss();
  }

}
