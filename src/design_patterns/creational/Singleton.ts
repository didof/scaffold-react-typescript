export default class Singleton {
   private static instance: Singleton;

   private constructor() { }

   public static createSingleton() {
      return new Singleton();
   }

   public static getInstance(): Singleton {
      console.log(`in a static method, this referes to ${this}`);
      if (!Singleton.instance)
         Singleton.instance = new Singleton()
      return Singleton.instance;
   }

   public businnessLogic() {
      throw Error('not implemented');
   }
}

export function buildSingleton() {
   const singleton = Singleton.createSingleton();
   return singleton;
}