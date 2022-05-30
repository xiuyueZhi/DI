import "reflect-metadata";
import { Container } from "./Container";
export function Inject(id?: string): PropertyDecorator {
  return (target: Object, propertyKey: string | symbol) => {
    const Dependency = Reflect.getMetadata("design:type", target, propertyKey);
    console.log(111, target,Dependency,propertyKey );

    const _id = id || Reflect.getMetadata("cus:id", Dependency);
    const _dependency = Container.get(_id);
    console.log(22, _dependency);

    // 给属性注入依赖
    Reflect.defineProperty(target, propertyKey, {
      value: _dependency
    });
  };
}
