import { Component } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-basic-property-info',
  templateUrl: './basic-property-info.component.html',
  styleUrls: ['./basic-property-info.component.scss']
})
export class BasicPropertyInfoComponent {
  formBasicInfo!: FormGroup;
  formAddressInfo!: FormGroup;
  formBasicInfoSubChildRadio!: FormGroup;

  constructor(private rootFormGroup: FormGroupDirective){}

  parentRadioButtonControls1:any[] = [
    {value:'parentRadioButtonControl',viewValue:'Sell'},
    {value:'parentRadioButtonControl',viewValue:'Rent'},
    {value:'parentRadioButtonControl',viewValue:'Pg'},
  ];
  parentRadioButtonControls2:any[] = [
    {value:'childRadioButtonControl',viewValue:'Residential'},
    {value:'childRadioButtonControl',viewValue:'Commercial'},
    {value:'childRadioButtonControl',viewValue:'Agriculture'},
  ];
  parentRadioButtonControls3:any[] = [
    {value:'subChildRadioButtonControl',viewValue:'Flat/Apartment'},
    {value:'subChildRadioButtonControl',viewValue:'Service Apartment'},
    {value:'subChildRadioButtonControl',viewValue:'Studio Apartment'},
    {value:'subChildRadioButtonControl',viewValue:'Independent House/Villa'},
    {value:'subChildRadioButtonControl',viewValue:'Penthouse/Builder Floor'},
    {value:'subChildRadioButtonControl',viewValue:'Land/Plot'},
  ];
ngOnInit(): void{
  this.formBasicInfo = this.rootFormGroup.control;
  this.formAddressInfo = this.rootFormGroup.control;
  this.formBasicInfoSubChildRadio = this.rootFormGroup.control;
}
}
