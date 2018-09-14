import Restaurant from "../model/Restaurant";
import { RestaurantService } from "../service/RestaurantService";
import { Controller, Get, Post, BodyParams, PathParams } from "@tsed/common";
import { logger } from "../support/logger";

@Controller("/restaurants")
export default class RestaurantResource {
  restaurantService!: RestaurantService;

  constructor(restaurantService: RestaurantService) {
    this.restaurantService = restaurantService;
  }

  @Get("/")
  async getRestaurantList(): Promise<Array<Restaurant>> {
    return await this.restaurantService.getAll();
  }

  @Get("/:id")
  async getRestaurant(
    @PathParams("id") id: string
  ): Promise<Restaurant | string> {
    try {
      const restaurant = await this.restaurantService.get(id);
      // returning undefined will issue a HTTP 404 response (null does not)
      return restaurant ? restaurant : (undefined as any);
    } catch (err) {
      logger.error(err);
      return undefined as any;
    }
  }

  @Post("/")
  async createRestaurant(
    @BodyParams() restaurant: Restaurant
  ): Promise<Restaurant> {
    return await this.restaurantService.create(restaurant);
  }

  @Post("/:id")
  async updateRestaurant(
    @PathParams("id") id: string,
    @BodyParams() restaurant: Restaurant
  ): Promise<Restaurant> {
    return await this.restaurantService.update(id, restaurant);
  }
}
