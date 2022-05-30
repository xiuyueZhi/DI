import { LogService } from "./LogService";
import { Inject } from "./Inject";
import { Container } from "./Container";
export class CustomerController {
  // 使用 Inject 注入
  @Inject()
  private log!: LogService;
  // constructor() {
  //   this.log = new LogService();
  // }

  // 使用 Container.get 注入
  private token = Container.get("token");

  public main(): void {
    console.log(this.token);
    this.log.info(this.token);
  }
}
