import Restaurant from "../model/Restaurant";
import { RestaurantService } from "../service/RestaurantService";
import { Controller, Get, Post, BodyParams, PathParams } from "@tsed/common";

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
  async getRestaurant(@PathParams("id") id: string): Promise<Restaurant | null> {
    return await this.restaurantService.get(id);
  }

  @Post("/")
  async createRestaurant(@BodyParams() restaurant: Restaurant): Promise<Restaurant> {
    return await this.restaurantService.create(restaurant);
  }

  @Post("/:id")
  async updateRestaurant(@PathParams("id") id: string, @BodyParams() restaurant: Restaurant): Promise<Restaurant> {
    return await this.restaurantService.update(id, restaurant);
  }
}
