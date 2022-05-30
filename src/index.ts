import * as config from "./Config";
import { CustomerController } from "./CustomerController";
config.default();
new CustomerController().main();

export default function DI() {}
