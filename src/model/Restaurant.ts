export default class Restaurant {
  name!: string;
  menuLinks?: string[];
  lastOrder?: Date;

  constructor(name: string, menuLinks?: string[], lastOrder?: Date) {
    this.name = name;
    this.menuLinks = menuLinks;
    this.lastOrder = lastOrder;
  }
}
