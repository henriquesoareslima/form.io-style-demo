import { Component } from '@angular/core';
import { Formio } from 'formiojs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public form:Object = {};
  public formRender:Object = {};
  public formRenderString:string = "";

  constructor(){
    this.form = { components: [] };
  }

  getFormio(){
    this.formRender = {};
    this.formRender = this.form;
    this.formRenderString = JSON.stringify(this.form);
    console.dir(this.formRender);
  }
}
