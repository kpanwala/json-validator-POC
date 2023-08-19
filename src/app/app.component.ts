import { Component } from '@angular/core';
// import { DataService } from './data.service';
// import Ajv from 'ajv';
// import {userSchema} from '../model/schema/userSchema';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'jsonValidator';
  // ajv = new Ajv();
  // validate = this.ajv.compile(userSchema);

  // constructor(private dataService:DataService){}

  // ngOnInit() {
  //   this.dataService.getUserById("2")
  //   .then((data: any) => data.json())
  //   .then((response:any)=>{
  //     console.log(this.validate(response));
  //   });
  // }
}
