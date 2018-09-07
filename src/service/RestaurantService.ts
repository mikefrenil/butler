import low from "lowdb";
import Restaurant from "../model/Restaurant";

export default class RestaurantService {
  create = async (db: low.LowdbSync<any>, restaurant: Restaurant): Promise<Restaurant> => {
    db.get("restaurants")
      .push(restaurant)
      .write();

    return restaurant;
  };

  get = async (db: low.LowdbSync<any>): Promise<Restaurant[]> => {
    return db.get("restaurants").value();
  };
}
