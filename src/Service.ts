import "reflect-metadata";
import { Container } from "./Container";
interface ConstructableFunction extends Function {
  new (): any;
}
export function Service(id: string): Function;
export function Service(singleton: boolean): Function;
export function Service(id: string, singleton: boolean): Function;
export function Service(
  idOrSingleton?: string | boolean,
  singleton?: boolean
): Function {
  return (target: ConstructableFunction) => {
    let _id;
    let _singleton;
    let _singleInstance;
    if (typeof idOrSingleton === "boolean") {
      _singleton = true;
      _id = Symbol(target.name);
    } else {
      // 判断如果设置 id，id 是否唯一
      if (idOrSingleton && Container.has(idOrSingleton)) {
        throw new Error(`Service：此标识符（${idOrSingleton}）已被注册.`);
      }

      _id = idOrSingleton || Symbol(target.name);
      _singleton = singleton;
    }
    Reflect.defineMetadata("cus:id", _id, target);
    if (_singleton) {
      _singleInstance = new target();
    }
    // TODO 为什么需要 target
    Container.set(_id, _singleInstance || target);
  };
}
