import { Controller } from "litojs";
import { MyFruit } from "./view";
import { view } from "litojs/views";

export class CoreController extends Controller {
  public index() {
    const context = { fruits: ["Banana", "Apple", "Orange"] };
    return view(MyFruit, context);
  }
}
