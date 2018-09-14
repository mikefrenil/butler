import express from "express";
import { ServerLoader, ServerSettings, GlobalAcceptMimesMiddleware } from "@tsed/common";
import Path = require("path");
import { logger } from "./support/logger";

@ServerSettings({
  rootDir: Path.resolve(__dirname), // optional. By default it's equal to process.cwd()
  acceptMimes: ["application/json"],
  mount: {
    "/api": "${rootDir}/resource/*.ts"
  },
  componentsScan: ["${rootDir}/service/*.ts"]
})
export class Server extends ServerLoader {
  /**
   * This method let you configure the middleware required by your application to works.
   * @returns {Server}
   */
  public $onMountingMiddlewares(): void | Promise<any> {
    this.use(GlobalAcceptMimesMiddleware)
      .use(express.json())
      .use(express.urlencoded({ extended: true }));
  }

  public $onReady() {
    logger.info("Server started...");
  }

  public $onServerInitError(err: any) {
    logger.error(err);
  }
}
