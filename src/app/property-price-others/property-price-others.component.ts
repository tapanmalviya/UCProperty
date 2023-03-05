import { Component } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-property-price-others',
  templateUrl: './property-price-others.component.html',
  styleUrls: ['./property-price-others.component.scss']
})
export class PropertyPriceOthersComponent {
  formPriceOther!: FormGroup;

  constructor(private rootFormGroup: FormGroupDirective){}

  parentRadioButtonControls3:any[] = [
    {value:'subChildRadioButtonControl',viewValue:'Flat/Apartment'},
    {value:'subChildRadioButtonControl',viewValue:'Service Apartment'},
    {value:'subChildRadioButtonControl',viewValue:'Studio Apartment'},
    {value:'subChildRadioButtonControl',viewValue:'Independent House/Villa'},
    {value:'subChildRadioButtonControl',viewValue:'Penthouse/Builder Floor'},
    {value:'subChildRadioButtonControl',viewValue:'Land/Plot'},
  ];
  ngOnInit(): void{
    this.formPriceOther = this.rootFormGroup.control;
  }
}
