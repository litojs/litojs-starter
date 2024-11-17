import { Router } from "litojs";
import { CoreController } from "./controller";

export const router = new Router();

router
  .controller(CoreController)
  .get("/", "index")
  .get("/hello", "hello")
  .get("/api", "api");
