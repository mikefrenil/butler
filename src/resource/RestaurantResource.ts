import { IRoute } from "express-serve-static-core";
import { Router } from "express";
import Restaurant from "../model/Restaurant";
import { RestaurantService } from "../service/RestaurantService";
import { Controller, Get, Render, Post, Authenticated, Required, BodyParams, Delete } from "@tsed/common";

@Controller("/restaurants")
export default class RestaurantResource {
  restaurantService!: RestaurantService;

  constructor(restaurantService: RestaurantService) {
    this.restaurantService = restaurantService;
  }

  @Get("/")
  async getRestaurantList(): Promise<Array<Restaurant>> {
    return await this.restaurantService.get();
  }

  @Post("/")
  async createRestaurant(@BodyParams() restaurant: Restaurant): Promise<Restaurant> {
    return await this.restaurantService.create(restaurant);
  }
}
