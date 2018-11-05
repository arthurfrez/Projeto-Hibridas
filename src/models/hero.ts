export class Hero {
  name:        string;
  thumb:       string;
  private _description: string;

  get description():string {
    return this._description || "No description.";
  }

  set description(desc: string) {
    this._description = desc;
  }
}
