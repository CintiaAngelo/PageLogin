import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  title = 'Login';
  loginErro = false;

  form = new FormGroup({
    name: new FormControl('', Validators.required),
    senha: new FormControl('', Validators.required)
  });

  constructor(private router: Router, private authService: AuthService) { }

  entrar() {
    if(this.form.valid) {
      const nome = this.form.get('name')?.value || '';
      const senha = this.form.get('senha')?.value || '';
      if(this.authService.login(nome, senha)){
        this.router.navigate(['/home']);
      } else {
        this.loginErro = true;
      }
    } else {
      this.form.markAllAsTouched();
    }
  }

  limpar() {
    this.form.reset();
    this.loginErro = false;
  }
}
