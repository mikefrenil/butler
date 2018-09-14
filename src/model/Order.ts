import { EntityBase } from "./EntityBase";
import { ObjectID } from "bson";

export interface IGroupOrder extends EntityBase {
  restaurantId: ObjectID;
  date: Date;
  note: string;
  individualOrders: IOrder[];
}

export interface IOrder {
  userId: ObjectID;
  items: { description: string; note: string }[];
}
