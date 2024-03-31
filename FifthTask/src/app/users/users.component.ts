import { Component } from '@angular/core';
import { Data } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  user: {name: string, salary: number, BirthDate: Date}[] = [{name:"rand", salary:1000000, BirthDate: new Date("10.11.2003")}];
  userTemp: string = "";
  salary: number = 0;
  birthDate: Date = new Date();
  addUser(){
    if(this.userTemp !== '' && this.salary !== null && this.birthDate !== null){
      this.user.push({name: this.userTemp, salary: this.salary, BirthDate: this.birthDate});
      this.userTemp = "";
      this.salary = 0;
      this.birthDate = new Date();
    }
  }
  RemoveUser(index: number){
    this.user.splice(index,1);
  }

  EditUser(index: number){
    this.user[index].name = this.userTemp;
    this.user[index].salary = this.salary;
    this.user[index].BirthDate = this.birthDate;
    this.userTemp = "";
    this.salary = 0;
    this.birthDate = new Date();
  }
}
