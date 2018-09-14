import { EntityBase } from "./EntityBase";

export interface IUser extends EntityBase {
  email: string;
  name: string;
}
