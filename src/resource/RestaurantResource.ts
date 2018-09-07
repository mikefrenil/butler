import { Express, IRoute } from "express-serve-static-core";
import low from "lowdb";
import RestaurantService from "../service/RestaurantService";
import express, { Router } from "express";
import Restaurant from "../model/Restaurant";

export default class RestaurantResource {
  route!: IRoute;

  constructor(router: Router, db: low.LowdbSync<any>, restaurantService: RestaurantService) {
    this.route = router.route("/restaurants");

    this.route.get(async (_, res) => {
      res.json(await restaurantService.get(db));
    });

    this.route.post(async (req: { body: { name: string } }, res) => {
      const restaurant: Restaurant = new Restaurant(req.body.name);
      res.json(await restaurantService.create(db, restaurant));
    });
  }
}
