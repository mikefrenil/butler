import { Service } from "@tsed/common";
import Restaurant from "../model/Restaurant";
import { DbService } from "./DbService";
import { ObjectID, ObjectId } from "bson";
@Service()
export class RestaurantService {
  private dbService: DbService;

  constructor(dbService: DbService) {
    this.dbService = dbService;
  }

  private getRestaurantsCollection = () => {
    const store = this.dbService.store;
    return store.collection("restaurants");
  };

  create = async (restaurant: Restaurant): Promise<Restaurant> => {
    const store = await this.dbService.store;
    const insertResult = await store.collection("restaurants").insertOne(restaurant);

    return insertResult.ops[0];
  };

  getAll = async (): Promise<Array<Restaurant>> => {
    return this.getRestaurantsCollection()
      .find()
      .toArray();
  };

  get = async (_id: string): Promise<Restaurant> => {
    return await this.getRestaurantsCollection().findOne({ _id: new ObjectID(_id) });
  };

  update = async (_id: string, restaurant: Restaurant) => {
    await this.getRestaurantsCollection().findOneAndUpdate({ _id: new ObjectID(_id) }, { $set: restaurant });
    return restaurant;
  };

  delete = async (_id: string) => {
    this.getRestaurantsCollection().deleteOne({ _id: new ObjectID(_id) });
  };
}
