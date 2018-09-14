import log4js from "log4js";

export const logger = log4js.getLogger();
log4js.configure({
  appenders: {
    file: { type: "file", filename: "./log/butler.log", maxLogSize: 1024 * 1024 },
    out: { type: "stdout", layout: { type: "colored" }, level: "debug" }
  },
  categories: { default: { appenders: ["file", "out"], level: "error" } }
});
