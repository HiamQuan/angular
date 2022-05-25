import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // Trung gian dữ liệu của file ts với form
  inputValues = {
    id: 0,
    name: '',
    age: 0,
    email: '',
    phone: '',
  };

  users = [
    {
      id: 1,
      name: 'nguyenanhquan',
      age: 24,
      email:"ngongquan@gmail.com",
      phone: "031214123124",
    },
  ];

  onSubmit(userForm: NgForm) {
    // console.log(formData);
    // 0. Tìm id lớn nhất đang có để +1
    const newUserIds = this.users
      .map(user => user.id) // lấy ra mảng mới chỉ có id
      .sort((a: number, b: number) => b - a); // sort các id đang có
    const maxId = newUserIds[0];
    // 1. Push dữ liệu mới nhận từ form vào mảng
    this.users.push({
      ...userForm.value,
      id: maxId + 1
    });
    // 2. Cập nhật giá trị của inputValues về default
    userForm.resetForm({
      id:"",
      name: '',
      age: 0,
      email: '',
      phone: '',
    });
  }

  onUpdateuser (updatedUser:any){
    this.users.forEach((user,index)=>{
      if(user.id === updatedUser.id){
        this.users[index] = updatedUser;
      }
    })
  }

  onEdit(userId: any) {
    const userEdit = this.users.find(user=> user.id === userId);
     if(userEdit){
       this.inputValues = {...userEdit};
     }
  }

  
}

