export class Container {
  private static ContainerMap = new Map<string | symbol, any>();

  public static set = (id: string | symbol, value: any): void => {
    this.ContainerMap.set(id, value);
  };

  public static get = <T extends any>(id: string | symbol): T => {
    return this.ContainerMap.get(id) as T;
  };

  public static has = (id: string | symbol): Boolean => {
    return this.ContainerMap.has(id);
  };
}
