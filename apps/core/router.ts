import { Router } from "litojs";
import { CoreController } from "./controller";

export const router = new Router();

router.controller(CoreController).get("/", "index").post("/hello", "hello");
