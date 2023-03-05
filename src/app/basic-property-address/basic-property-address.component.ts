import { Component } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-basic-property-address',
  templateUrl: './basic-property-address.component.html',
  styleUrls: ['./basic-property-address.component.scss']
})
export class BasicPropertyAddressComponent {
  formLocationInfo!: FormGroup;
  constructor(private rootFormGroup: FormGroupDirective){
  }
  ngOnInit(): void{
    this.formLocationInfo = this.rootFormGroup.control;
  }
//   formAddressInfo!: FormGroup;

//   parentRadioButtonControls2:any[] = [
//     {value:'childRadioButtonControl',viewValue:'Residential'},
//     {value:'childRadioButtonControl',viewValue:'Commercial'},
//     {value:'childRadioButtonControl',viewValue:'Agriculture'},
//   ];
  
// constructor(private rootFormGroup: FormGroupDirective){
// }
// ngOnInit(): void{
//   this.formAddressInfo = this.rootFormGroup.control;
// }
}
