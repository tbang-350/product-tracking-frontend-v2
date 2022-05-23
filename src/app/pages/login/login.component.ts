import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAuthService } from '../../_services/user-auth.service';
import { UserService } from '../../_services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(private userService: UserService,
    private userAuthService: UserAuthService,
    private router: Router) { }

  ngOnInit(): void {
    this.FormConfiguration()
  }

  FormConfiguration() {
    this.loginForm = new FormGroup({
      userName: new FormControl(null),
      userPassword: new FormControl(null)
    })
  }

  login() {
    this.userService.login(this.loginForm.value).subscribe(
      (response: any) => {
        console.log(response.jwtToken);
        console.log(response.user.roles);

        this.userAuthService.setRoles(response.user.roles);
        this.userAuthService.setToken(response.jwtToken);

        const role = response.user.roles[0].roleName;

        if (role === 'Admin') {
          this.router.navigate(['/sidenav/admin']);
        } else {
          this.router.navigate(['/sidenav/contractor']);
        }

      },
      (error) => {
        console.log(error);
      }
    );
    console.log(this.loginForm.value)
  }

  

}
