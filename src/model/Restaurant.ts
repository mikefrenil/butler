import { EntityBase } from "./EntityBase";

export default interface Restaurant extends EntityBase {
  name: string;
  menuLinks?: string[];
  lastOrder?: Date;
}
