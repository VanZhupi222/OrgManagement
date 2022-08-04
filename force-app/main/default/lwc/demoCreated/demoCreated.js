import { api, LightningElement } from "lwc";

export default class demoCreated extends LightningElement {
  org;

  @api
  get orgFromParent() {
    return this.org;
  }

  set orgFromParent(value) {
    this.org = value;
  }
}
