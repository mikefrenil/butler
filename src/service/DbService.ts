import low from "lowdb";
import FileASync from "lowdb/adapters/FileASync";
import { Service } from "@tsed/common";

@Service()
export class DbService {
  private _store: Promise<low.LowdbAsync<any>>;

  constructor() {
    const adapter = new FileASync("data/store.json", {
      defaultValue: { restaurants: [] }
    });
    this._store = low(adapter);
  }

  get store() {
    return this._store;
  }
}
