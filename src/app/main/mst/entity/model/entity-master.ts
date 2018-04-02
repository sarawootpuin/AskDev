
export class EntityMaster {
  public display;
  public id;
  public key1;
  public key2;
  public type;

  constructor(display, id, key1, key2, type) {
    this.display = display;
    this.id = id;
    this.key1 = key1;
    this.key2 = key2;
    this.type = type;
  }

  static parse(json: any[]) {
    let data: EntityMaster[] = [];

    for (let i = 0; i < json.length; i++) {
      data.push(new EntityMaster(
        json[i].display,
        json[i].id,
        json[i].key1,
        json[i].key2,
        json[i].type
      ))
    }
    return data;
  }
}
