import { Component } from '@angular/core';
import { Login } from 'src/app/Module/login';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  registerModel: Login;

  constructor(private registerService: UserService) {
    this.registerModel = {
      email: '',
      username: '',
      password: '',
    };
  }

  showAlert: boolean = false; // Tanımlama ve başlatma

  register() {
    this.registerService.register(this.registerModel).subscribe(
      (subscribe) => {},
      (error) => {
        this.showAlert = true;
      }
    );
  }
}
