import { Controller } from "litojs";
import { view } from "litojs/utils";
import { MyComponent } from "./view";

export class CoreController extends Controller {
  public index() {
    return view(MyComponent, { fruits: ["Apple", "Banana", "Orange"] });
  }

  public hello() {
    return "Hello, World!";
  }

  public api() {
    return { message: "Hello, World!" };
  }
}
