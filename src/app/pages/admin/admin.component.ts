import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  message:string = "";

  constructor(
    private userService:UserService
    ) { }

  ngOnInit(): void {
    // this.forAdmin();
  }


  // forAdmin(){
  //   this.userService.forAdmin().subscribe(
  //     (response) => {
  //       console.log(response)
  //       this.message = response;
  //     },
  //     (error) => {
  //       console.log(error)
  //     }
  //   );
  // }

}
