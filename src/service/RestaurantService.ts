import { Service } from "@tsed/common";
import Restaurant from "../model/Restaurant";
import { DbService } from "./DbService";
@Service()
export class RestaurantService {
  private dbService: DbService;

  constructor(dbService: DbService) {
    this.dbService = dbService;
  }

  create = async (restaurant: Restaurant): Promise<Restaurant> => {
    const store = await this.dbService.store;
    store
      .get("restaurants")
      .push(restaurant)
      .write();

    return restaurant;
  };

  get = async (): Promise<Array<Restaurant>> => {
    const store = await this.dbService.store;
    return store.get("restaurants").value();
  };
}
