import { secondStepRadioControls } from "./firstStepModels/childRadio.model";
import { firstStepRadioControls } from "./firstStepModels/parentRadio.model";
import { thirdStepRadioControls } from "./firstStepModels/subChildRadio.model";
export class parentDataModel{
        public parentRadioControls:firstStepRadioControls | undefined;
        public childRadioControls:secondStepRadioControls | undefined;
        public subChildRadioControls:thirdStepRadioControls | undefined;
}