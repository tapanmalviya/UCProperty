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
  parentRadioButtonControlsResidential:any[] = [
    {value:'subChildRadioButtonControlResidential',viewValue:'Flat/Apartment'},
    {value:'subChildRadioButtonControlResidential',viewValue:'Service Apartment'},
    {value:'subChildRadioButtonControlResidential',viewValue:'Studio Apartment'},
    {value:'subChildRadioButtonControlResidential',viewValue:'Independent House/Villa'},
    {value:'subChildRadioButtonControlResidential',viewValue:'Penthouse/Builder Floor'},
    {value:'subChildRadioButtonControlResidential',viewValue:'Land/Plot'},
  ];
  
  parentRadioButtonControlsCommercial:any[] = [
    {value:'subChildRadioButtonControlResidential',viewValue:'Office'},
    {value:'subChildRadioButtonControlResidential',viewValue:'Retail'},
    {value:'subChildRadioButtonControlResidential',viewValue:'Land'},
    {value:'subChildRadioButtonControlResidential',viewValue:'Storage'},
    {value:'subChildRadioButtonControlResidential',viewValue:'Industry'},
    {value:'subChildRadioButtonControlResidential',viewValue:'Hospitality'}
  ];
  
  parentRadioButtonControlsAgriculture:any[] = [
    {value:'subChildRadioButtonControlResidential',viewValue:'Farmhouse/Farmhouse Land'},
    {value:'subChildRadioButtonControlResidential',viewValue:'Agriculture Land'}
  ];
ngOnInit(): void{
  this.formBasicInfo = this.rootFormGroup.control;
  this.formAddressInfo = this.rootFormGroup.control;
  this.formBasicInfoSubChildRadio = this.rootFormGroup.control;
}
}
