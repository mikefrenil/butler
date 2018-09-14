import { Service } from "@tsed/common";
import { Db, MongoClient } from "mongodb";
import { logger } from "../support/logger";
import config from "config";

@Service()
export class DbService {
  // tslint:disable-next-line:variable-name
  private static _store: Db;

  constructor() {
    MongoClient.connect(`mongodb://${config.get("mongodb.host")}:${config.get("mongodb.port")}`)
      .then(client => {
        DbService._store = client.db();
      })
      .catch(err => {
        logger.error(err);
        process.exit(1);
      });
  }

  get store() {
    return DbService._store;
  }
}
