export default class Singleton {
   private static instance: Singleton;

   private constructor() {
   }

   private static createSingleton(): void {
      Singleton.instance = new Singleton()
   }

   public static getInstance(): Singleton {
      if (!Singleton.instance)
         this.createSingleton();
      return Singleton.instance;
   }

   public businnessLogic() {
      throw Error('not implemented');
   }
}