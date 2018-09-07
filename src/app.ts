import express from "express";
import low from "lowdb";
import FileSync from "lowdb/adapters/FileSync";
import bodyParser from "body-parser";
import RestaurantResource from "./resource/RestaurantResource";
import RestaurantService from "./service/RestaurantService";
import { AddressInfo } from "net";

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const router = express.Router();
app.use("/api", router);

const adapter = new FileSync("data/db.json");
const db = low(adapter);
db.defaults({ restaurants: [] }).write();

new RestaurantResource(router, db, new RestaurantService());

const server = app.listen(3000, () => {
  console.log("app listening at port", (server.address() as AddressInfo).port);
});
