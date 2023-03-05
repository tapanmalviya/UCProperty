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


  parentRadioButtonControls3:any[] = [
    {value:'subChildRadioButtonControl',viewValue:'Flat/Apartment'},
    {value:'subChildRadioButtonControl',viewValue:'Service Apartment'},
    {value:'subChildRadioButtonControl',viewValue:'Studio Apartment'},
    {value:'subChildRadioButtonControl',viewValue:'Independent House/Villa'},
    {value:'subChildRadioButtonControl',viewValue:'Penthouse/Builder Floor'},
    {value:'subChildRadioButtonControl',viewValue:'Land/Plot'},
  ];

  constructor(private fb:FormBuilder){}

  ngOnInit(): void {    
    this.userForm = this.fb.group({
      parentRadioControls: this.fb.group({
        parentRadioButtonControl: ['', ''],
        childRadioButtonControl: ['', ''],
        subChildRadioButtonControl: ['', ''],
    }),
      address: this.fb.group({
        street: ['', ''],
        city: ['', ''],
        state: ['', ''],
        zip: ['', '']
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
