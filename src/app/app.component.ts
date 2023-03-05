import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { parentDataModel } from './dataModels/parentDataModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  userForm!: FormGroup;
  propertyModelObj:parentDataModel=new parentDataModel;
  showAllData:any;

  constructor(private fb:FormBuilder){}

  ngOnInit(): void {    
    this.userForm = this.fb.group({
      parentRadioControls: this.fb.group({
        parentRadioButtonControl: ['', ''],
        childRadioButtonControl: ['', ''],
        subChildRadioButtonControlResidential: ['', ''],
    }),
      address: this.fb.group({
        city: ['', ''],
        project: ['', ''],
        locality: ['', ''],
        subLocality: ['', ''],
        address: ['', '']
      }),
      formProfileInfo: this.fb.group({
        noOfBedRooms: ['', ''],
        noOfBalconies: ['', ''],
        noOfBathrooms: ['', ''],
        propertyOnFloor: ['', ''],
        totalFloors: ['', ''],
      })
    })
  }
}
