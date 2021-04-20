import {MicroApplicationContent} from './micro-application-content';
import {MicroAppForm} from './micro-app-form';

export abstract class MicroApplicationFormContent implements MicroApplicationContent {

  id: number;
  form: MicroAppForm

  CloseWindow = (parent?: MicroAppForm) => {
    this.FormOnDestroy();
    this.form.Close(parent);
  }

  AddChildren(form: MicroAppForm): void {
    if (form.xPos === this.form.xPos && form.yPos === this.form.yPos) {
      form.xPos = this.form.xPos + 30;
      form.yPos = this.form.yPos + 30;
    }
    this.form.AddChildren(form);
  }

  abstract FormOnInit(): void;

  abstract FormOnDestroy(): void;
}
