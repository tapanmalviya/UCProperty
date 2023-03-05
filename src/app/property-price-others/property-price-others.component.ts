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

  parentRadioButtonControlsResidential:any[] = [
    {value:'subChildRadioButtonControlResidential',viewValue:'Flat/Apartment'},
    {value:'subChildRadioButtonControlResidential',viewValue:'Service Apartment'},
    {value:'subChildRadioButtonControlResidential',viewValue:'Studio Apartment'},
    {value:'subChildRadioButtonControlResidential',viewValue:'Independent House/Villa'},
    {value:'subChildRadioButtonControlResidential',viewValue:'Penthouse/Builder Floor'},
    {value:'subChildRadioButtonControlResidential',viewValue:'Land/Plot'},
  ];
  ngOnInit(): void{
    this.formPriceOther = this.rootFormGroup.control;
  }
}
