import { Controller } from "litojs";
import { view } from "litojs/utils";

import { Home } from "./view";

export class CoreController extends Controller {
  public index() {
    return view(Home, { name: "Lito" });
  }
}
