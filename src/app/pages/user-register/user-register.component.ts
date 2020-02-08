import { DataService } from './../../services/data.service';
import { User } from './../../models/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {
 
  model: User = new User();
  retypePassword = "";

  constructor(private dataSrv : DataService) { }

  ngOnInit() {
  }

  save(){
    console.log("Saving user", this.model);
    
    // save the user (this.model) into a service
    this.dataSrv.saveUser(this.model);
  }
}
