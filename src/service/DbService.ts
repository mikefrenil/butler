import { Db, MongoClient } from "mongodb";
import { Service } from "@tsed/common";
import Restaurant from "../model/Restaurant";

@Service()
export class DbService {
  private static _store: Db;
  private static _client: MongoClient;

  constructor() {
    MongoClient.connect("mongodb://127.0.0.1:27017")
      .then(client => {
        DbService._client = client;
        DbService._store = client.db();
      })
      .catch(err => {
        console.log(err);
        process.exit(1);
      });
  }

  get store() {
    return DbService._store;
  }
}

export interface Schema {
  restaurants: Array<Restaurant>;
}
