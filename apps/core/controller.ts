import { Controller } from "litojs";
import { view } from "litojs/renderer";
import { Fruit, MyFruits } from "./view";

export class CoreController extends Controller {
  public index() {
    return view(MyFruits, { fruits: ["Apple", "Banana", "Orange"] });
  }

  public hello() {
    return view(Fruit, { fruit: "New Fruit" });
  }
}
