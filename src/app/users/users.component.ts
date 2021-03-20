import { UsersService } from './users.service';
import { Component, OnInit } from '@angular/core';
import { Config } from './users-interface';

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  userProfileData: Config[] = [];
  searchText: string = '';

  constructor(private userService: UsersService) {}

  ngOnInit(): void {
    this.userService.getUserProfileData().subscribe(
      (data) => {
        this.userProfileData = data;
        console.log(this.userProfileData);
      },
      (error) => console.log('The user profile API has got some error: ', error)
    );
  }

  // Remove profile
  removeProfile(id) {
    console.log(typeof id, 'deleted');
    const index = this.userProfileData.findIndex((item) => item.id === id);
    console.log('index', index);
    this.userProfileData.splice(index, 1);
  }

  // Edit profile
  editProfile(id) {
    const nameInput = prompt('Enter the name to be edited ');
    if (!nameInput) {
      return;
    } else {
      return this.userProfileData.map((item) => {
        if (item.id === id) {
          item.name = nameInput;
        }
      });
    }
  }

  // Add profile
  addProfile() {
    const newProfile = {
      Image: '',
      id: this.userProfileData[this.userProfileData.length - 1].id + 1,
      name: 'George',
    };

    this.userProfileData.splice(0, 0, newProfile);
  }
}
