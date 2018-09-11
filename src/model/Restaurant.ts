import { ObjectID } from "bson";

export default interface Restaurant {
  _id?: ObjectID;
  name: string;
  menuLinks?: string[];
  lastOrder?: Date;
}
